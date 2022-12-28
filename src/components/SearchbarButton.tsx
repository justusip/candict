import React from "react";

export default (props: React.PropsWithChildren<any>) =>
    <button className={"p-1 text-xl text-neutral-500 hover:text-neutral-700 active:text-neutral-600 cursor-pointer"}
            {...props}>
        {props.children}
    </button>
