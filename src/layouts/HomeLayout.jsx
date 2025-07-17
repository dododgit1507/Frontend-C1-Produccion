import NavBar from "@/components/ui/NavBar";
import Section from "@/components/ui/Section";
import Footer from "@/components/ui/Footer";
import DarkVeil from "@/components/react-bits/DarkVeil";

const HomeLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col relative">
            {/* Fondo con DarkVeil */}
            <div className="absolute inset-0 z-0">
                <DarkVeil
                    warpAmount={5}
                    hueShift={30}
                    speed={0.3}
                    noiseIntensity={0.03}
                />
            </div>

            {/* Contenido */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <NavBar />
                <Section className="flex-grow">
                    {children}
                </Section>
                <Footer />
            </div>
        </div>
    )
}

export default HomeLayout
