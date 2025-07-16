import NavBar from "@/components/ui/NavBar";
import Section from "@/components/ui/Section";

const HomeLayout = ({ children }) => {
    return (
        <div className="bg-[var(--azul-oscuro)]">
            <NavBar />
            <Section>
                {children}
            </Section>

        </div>
    )
}

export default HomeLayout
