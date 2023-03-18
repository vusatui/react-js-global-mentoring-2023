import React, {CSSProperties} from "react";

import "./styles.css";

interface Props {
    styles?: CSSProperties
    step?: number
    value: number
    onChange: (v: number) => void
}

const Counter = ({
    styles = undefined,
    step = 1,
    value,
    onChange,
}: Props) => {
    const increment = () => onChange(value + step);
    const decrement = () => onChange(value - step);

    return React.createElement("div", { styles, className: "v-counter" }, [
        React.createElement("button", { onClick: decrement }, "-"),
        React.createElement("span", {}, value),
        React.createElement("button", { onClick: increment }, "+"),
    ]);
};

export default Counter;