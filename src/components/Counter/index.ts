import React from "react";

import "./styles.css";

interface CounterProps {
    step?: number
    value: number
    onChange: (v: number) => void
}

const Counter = ({
    step = 1,
    value,
    onChange,
}: CounterProps) => {
    const increment = () => onChange(value + step);

    const decrement = () => onChange(value - step);

    return React.createElement("div", { className: "v-counter" }, [
        React.createElement("button", { onClick: decrement }, "-"),
        React.createElement("span", {}, value),
        React.createElement("button", { onClick: increment }, "+"),
    ]);
};

export default Counter;