import Link from "next/link";
import React from "react";

export default (props: { count: number, pages: number, page: number, linkTo: (toPage: number) => string }) => {
    let pages: number[] = [...Array(9)].map((_, i) => i - 5 + props.page);
    if (pages[0] < 1)
        pages = pages.map(p => p - pages[0] + 1);
    else if (pages[pages.length - 1] > props.pages)
        pages = pages.map(p => p - (pages[pages.length - 1] - props.pages));

    pages = pages.filter(page => page <= props.pages);
    if (pages[0] !== 1)
        pages.unshift(1, null);
    if (pages[pages.length - 1] !== props.pages)
        pages.push(null, props.pages);

    if (pages.length === 1)
        return <div className={"my-4"}></div>;

    return <div className={"flex gap-4 my-4"}>
        {
            pages.map((page: number) => {
                if (!page)
                    return <div>...</div>;

                const isCurPage = props.page === page;
                if (isCurPage)
                    return <a>{page}</a>;
                return <Link href={props.linkTo(page)}>
                    <a className={"underline text-neutral-500 hover:text-neutral-900 cursor-pointer"}>{page}</a>
                </Link>;
            })
        }
    </div>;
};
