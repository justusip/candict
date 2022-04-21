import React from "react";
import classNames from "classnames";

export default (props: { entry: any }) => {
    const source = {
        m: {
            name: "臺灣教育部重編國語辭典（修訂本）",
            icon: "icons/moedict.png",
            link: `https://dict.revised.moe.edu.tw/search.jsp?md=1&word=${props.entry.title}&qMd=0&qCol=1`
        },
        j: {
            name: "粵典",
            icon: "icons/wordshk.png",
            link: `https://words.hk/zidin/wan/?fp=1&q=${props.entry.title}`
        }
    }[props.entry.src as string];

    console.log(props.entry.forms, props.entry.title);
    const defPron = props.entry.forms && props.entry.forms.find((form: string[]) => form[0] === props.entry.title)[1];

    return <div className={"flex border-b border-neutral-300 py-4"}>
        <div className={"w-32 text-2xl"}>
            {defPron && <div className={"text-xs text-neutral-500"}>{defPron}</div>}
            <div className={"mb-2"}>{props.entry.title}</div>
            {
                props.entry.forms && props.entry.forms.filter((form: string[]) => form[0] !== props.entry.title)
                    .map((form: string[]) => <div className={"text-sm text-neutral-500"}>{form[0]} <span
                        className={"text-xs"}>{form[1]}</span></div>)
            }
        </div>
        <div className={"w-0 ml-4 flex-1"}>
            <a className={"flex place-items-center gap-1 cursor-pointer select-none no-underline text-black opacity-50 hover:opacity-80 transition-opacity"}
               href={source.link}>
                <img className={"w-4 h-4"} src={source.icon}/>
                <div className={"text-xs"}>{source.name}</div>
            </a>
            {
                props.entry.defs.map((def: any, i: number) =>
                    <div key={i}
                         className={classNames(
                             "mt-2",
                             {"border-b border-neutral-300 pb-4": props.entry.defs.length - 1 !== i}
                         )}>
                        <div className={""}>{def.def}</div>
                        <div
                            className={"text-sm text-neutral-500 italic"}>{def.comb && def.comb.map((c: any) => c[0]).join("、")}</div>
                        {def.ex.map((ex: any) => <div className={"text-sm text-neutral-500"}>{ex}</div>)}
                    </div>
                )
            }
        </div>
    </div>;
}
