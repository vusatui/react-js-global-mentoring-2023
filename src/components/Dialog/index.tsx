import {ReactNode, useEffect, useMemo} from "react";
import {createPortal} from "react-dom";

interface DialogProps {
    children: ReactNode
}

const Dialog = ({ children }: DialogProps) => {
    const el = useMemo<HTMLDivElement>(() => document.createElement("div"), []);
    useEffect(() => {
        const modalsRoot: HTMLDivElement | null = document.querySelector("#modals-root");
        modalsRoot?.appendChild(el);
        return () => { modalsRoot?.removeChild(el); };
    }, [el]);

    return createPortal(children, el);
};

export default Dialog;