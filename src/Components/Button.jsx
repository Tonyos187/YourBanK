
const Button = ({ children, className, ...props }) => (
    <button className={`whitespace-nowrap text-bodySm md:text-bodyMd lg:text-bodyLg transition duration-300 ${className}`} {...props}>
        {children}
    </button>
);
export default Button;