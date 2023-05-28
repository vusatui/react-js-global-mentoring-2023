interface CloseIconProps {
    className?: string
}

const CloseIcon = ({ className }: CloseIconProps) => (
    <svg className={className} width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.47099 1.15426L21.529 21.2122" stroke="white" />
        <path d="M21.529 1.15426L1.47103 21.2122" stroke="white" />
    </svg>
);

export default CloseIcon;