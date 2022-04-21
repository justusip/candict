import React, {MouseEventHandler} from "react";
import cx from "classnames";

export default (props: React.PropsWithChildren<{
    selected: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>
}>) =>
    <button className={cx(
        "px-4 py-2 ",
        {"bg-white": props.selected},
        {"text-neutral-500 hover:bg-white/50 active:text-neutral-700": !props.selected}
    )}
            onClick={props.onClick}>
        {props.children}
    </button>
