interface Props {
    className?: string
}

const ArrowIcon = ({ className }: Props) => (
    <svg className={className} width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.13423 0C0.286533 0 -0.176668 0.988581 0.365828 1.63996L8.22615 11.0779C8.6258 11.5578 9.36265 11.558 9.76259 11.0784L17.6322 1.64041C18.1752 0.989135 17.7121 0 16.8642 0H1.13423Z" fill="#F65261"/>
    </svg>
);

export default ArrowIcon;