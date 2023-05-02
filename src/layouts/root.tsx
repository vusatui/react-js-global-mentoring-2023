import {Outlet} from "react-router-dom";

interface RootProps {
    className?: string
}

const Root = ({
    className,
}: RootProps) => (
    <div className={className}>
        <Outlet />
    </div>
);

export default Root;