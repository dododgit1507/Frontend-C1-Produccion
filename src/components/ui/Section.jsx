
const Section = ({ children, className }) => {
    return (
        <div className={`flex flex-col justify-center items-center min-h-screen w-full h-full py-12 ${className}`}>
            {children}
        </div>
    )
}

export default Section