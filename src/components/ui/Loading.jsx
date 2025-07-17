import { LoaderCircle } from "lucide-react"

const Loading = ({ size = 'md', fullScreen = true, text = 'Cargando...' }) => {
    // Tamaños predefinidos para el spinner
    const sizes = {
        sm: 'w-6 h-6',
        md: 'w-10 h-10',
        lg: 'w-16 h-16',
        xl: 'w-24 h-24'
    };

    const spinnerSize = sizes[size] || sizes.md;
    
    // Si es pantalla completa
    if (fullScreen) {
        return (
            <div className="fixed inset-0 flex flex-col items-center justify-center bg-[var(--azul-oscuro)]/80 backdrop-blur-sm z-50">
                <img 
                    src="/img/c1-logo-final.png" 
                    className="w-48 h-auto mx-auto mb-6" 
                    alt="C1 - Imagen - Loading" 
                />
                <LoaderCircle className={`${spinnerSize} animate-spin text-[var(--celeste)] mb-4`} />
                {text && <p className="text-[var(--blanco)] font-medium">{text}</p>}
            </div>
        );
    }

    // Versión inline (no pantalla completa)
    return (
        <div className="flex flex-col items-center justify-center py-4">
            <LoaderCircle className={`${spinnerSize} animate-spin text-[var(--celeste)] mb-2`} />
            {text && <p className="text-[var(--blanco)] font-medium text-sm">{text}</p>}
        </div>
    );
};

export default Loading