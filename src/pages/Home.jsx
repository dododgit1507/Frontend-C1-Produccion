// Landing Page //
import HomeLayout from "@/layouts/HomeLayout";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <HomeLayout>
            <div className="flex flex-col items-center justify-center text-center text-white py-20">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Fluxor</h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 opacity-80">
                    Soluciones profesionales para optimizar y automatizar los procesos de tu empresa
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <button className="px-8 py-3 bg-[var(--celeste)] hover:bg-[var(--celeste-claro)] text-white rounded-lg shadow-lg transition-all duration-300 font-medium"
                        onClick={() => navigate("/login")}
                    >
                        Comenzar ahora
                    </button>
                    <button className="px-8 py-3 bg-transparent border-2 border-[var(--celeste)] hover:bg-[var(--celeste)]/10 text-white rounded-lg shadow-lg transition-all duration-300 font-medium">
                        Conocer más
                    </button>
                </div>
            </div>
        </HomeLayout>
    )
}

export default Home;