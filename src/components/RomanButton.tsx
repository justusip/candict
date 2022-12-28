import React, {MouseEventHandler} from "react";
import cx from "classnames";

export default (props: React.PropsWithChildren<{
    selected?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    title?: string
}>) =>
    <button className={cx(
        "",
        {"text-black": props.selected},
        {"text-black/50 hover:text-black/75": !props.selected}
    )}
            onClick={props.onClick}
            title={props.title}>
        {props.children}
    </button>
