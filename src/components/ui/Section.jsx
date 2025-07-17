
const Section = ({ children, className }) => {
    return (
        <div className={`flex flex-col justify-center h-svh w-full py-12 ${className}`}>
            {children}
        </div>
    )
}

export default Section