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
        React.createElement("button", { key: "decrement", onClick: decrement }, "-"),
        React.createElement("span", { key: "value", }, value),
        React.createElement("button", { key: "increment", onClick: increment }, "+"),
    ]);
};

export default Counter;