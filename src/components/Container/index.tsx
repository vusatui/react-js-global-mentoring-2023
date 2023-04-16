import {ContainerWrapper} from "./styled";
import {ReactNode} from "react";

interface ContainerProps {
    className?: string
    children: ReactNode
}

const Container = ({
   className,
   children,
}: ContainerProps) => {
    return (
        <ContainerWrapper className={className}>
            {children}
        </ContainerWrapper>
    );
};

export default Container;