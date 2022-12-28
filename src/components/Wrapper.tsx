import React from "react";

export default (props: React.PropsWithChildren<{}>) =>
    <div className={"w-full max-w-[800px] flex flex-col px-4"}>{props.children}</div>
