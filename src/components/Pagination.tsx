import Pagination from "rc-pagination";
import React from "react";
import Link from "next/link";

export default (props: { count: number, pages: number, page: number, onPageChange: (toPage: number) => string }) => {

    return <Pagination className="flex gap-4 my-4"
                       current={props.page}
                       total={props.pages}
                       itemRender={(current, type, element) => {
                           if (type === "jump-prev" || type === "jump-next")
                               return <div>...</div>;

                           if (type === "page") {
                               if (props.page === current)
                                   return <a className={"no-underline text-black"}>{current}</a>;

                               return <Link href={props.onPageChange(current)}>
                                   <a className={"underline text-neutral-500 hover:text-neutral-900 cursor-pointer"}>{current}</a>
                               </Link>;
                           }
                           return element;
                       }}
    />;
};
