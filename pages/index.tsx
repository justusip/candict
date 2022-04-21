import {NextPage} from "next";
import {MdEdit, MdExtension, MdKeyboardVoice, MdSearch} from "react-icons/md";
import SearchbarButton from "../components/SearchbarButton";
import React from "react";
import Entry from "../components/Entry";
import Wrapper from "../components/Wrapper";
import Link from "next/link";
import Pagination from "../components/Pagination";
import MenuButton from "../components/MenuButton";
import {useRouter} from "next/router";
import RomanButton from "../components/RomanButton";
import Footer from "../components/Footer";
import UnderConstruction from "../components/UnderConstruction";
import Head from "next/head";


export async function getServerSideProps(ctx: any) {
    const query = ctx.query["query"];
    const page = parseInt(ctx.query["page"] as string) || 1;

    if (!query)
        return {props: {results: null}};

    const res = await fetch(`http://localhost:3000/api/search?query=${query}&page=${page}`);

    if (!res.ok)
        return;
    const results = await res.json();
    return {props: {results}};
}

const Home: NextPage<{ results: any }> = ({results}) => {
    const router = useRouter();
    const [query, setQuery] = React.useState(results && results.query || "");
    const [tab, setTab] = React.useState(0);
    const [roman, setRoman] = React.useState(0);

    const search = () => {
        router.push(`/?query=${query}`).then();
    };

    return <div className={"min-h-screen flex flex-col"}>
        <Head>
            <title>{router.query.query ? `粵辭林 - ${router.query.query}` : "粵辭林"}</title>
        </Head>
        <div className={"flex flex-col place-items-center bg-gray-200"}>
            <Wrapper>
                <a href={"/"}><img className={"w-24 mt-4"} src="logo.png"/></a>
                <div className={"mt-2 p-2 flex place-items-center gap-2 bg-white"}>
                    <input type="text"
                           className={"flex-1 bg-transparent"}
                           placeholder="搜尋"
                           value={query}
                           onChange={e => setQuery(e.target.value)}
                           onKeyDown={e => {
                               if (e.key === "Enter")
                                   search();
                           }}/>
                    <SearchbarButton><MdEdit/></SearchbarButton>
                    <SearchbarButton><MdExtension/></SearchbarButton>
                    <SearchbarButton><MdKeyboardVoice/></SearchbarButton>
                    <SearchbarButton onClick={() => search()}><MdSearch/></SearchbarButton>
                </div>
                <div className={"mt-2 flex place-items-center text-sm"}>
                    <div className={"flex mt-2 mr-auto"}>
                        {
                            ["綜合", "漢字", "例句"].map((o, i) =>
                                <MenuButton selected={tab === i} onClick={() => setTab(i)}>{o}</MenuButton>
                            )
                        }
                    </div>
                    <div className={"flex gap-4"}>
                        {
                            ["粵拼", "耶魯", "懶人拼音"].map((o, i) =>
                                <RomanButton selected={roman === i} onClick={() => setRoman(i)}>{o}</RomanButton>
                            )
                        }
                    </div>
                </div>
            </Wrapper>
        </div>
        {
            [
                <div className={"flex flex-col place-items-center"}>
                    <Wrapper>
                        {
                            (() => {
                                const SampleQuery = (props: React.PropsWithChildren<{}>) =>
                                    <a className={"underline text-blue-900"}
                                       href={`/?query=${props.children}`}>{props.children}</a>;

                                if (!results)
                                    return <div className={"text-black/70 pt-4"}>
                                        粵詞林蒐集坊間唔同辭典嘅資料，能夠同時提供一個字嘅粵語解釋、官話解釋、例句、讀音同筆順等。<br/>
                                        <br/>
                                        請輸入任何單字、粵語詞語、官話詞語、成語、拼音等。例：
                                        <ul className={"list-disc list-inside"}>
                                            <li><SampleQuery>咩</SampleQuery></li>
                                            <li><SampleQuery>金碧輝煌</SampleQuery></li>
                                            <li><SampleQuery>肚餓</SampleQuery></li>
                                            <li><SampleQuery>jai1</SampleQuery></li>
                                            <li><SampleQuery>je sik</SampleQuery></li>
                                        </ul>
                                    </div>;

                                if (results.results.length === 0)
                                    return <div className={"text-black/75 pt-4"}>
                                        關於你嘅查詢：<span className={"text-black"}>{results.query}</span>，我哋搵唔到任何嘅資料。<br/>
                                        請您改下關鍵字再試。
                                    </div>;

                                return <>
                                    <div className={"pt-4 text-xs text-black/50"}>關於你嘅查詢：<span
                                        className={"text-black"}>{results.query}</span>，我哋搵到{results.count}筆資料
                                    </div>
                                    {results!!.results.map((result: any, i: number) => <Entry key={i} entry={result}/>)}
                                    {
                                        results &&
                                        <Pagination
                                            linkTo={(toPage: number) => `/?query=${query}&page=${toPage}`} {...results}/>
                                    }
                                </>;
                            })()
                        }
                    </Wrapper>
                </div>,
                <UnderConstruction/>,
                <UnderConstruction/>
            ][tab]
        }
        <Footer/>
    </div>;
};

export default Home;
