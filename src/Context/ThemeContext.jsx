import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Definimos el estado inicial (Colores por defecto: Blanco y Negro minimalista)
const defaultTheme = {
    background: "#ffffff",
    text: "#000000",
    accent: "#ff0000" // Un rojo para resaltar, estilo Floppy Kenny
};

const ThemeContext = createContext();

// 2. Creamos el componente Proveedor que envolverá tu app
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme);

    // Función para cambiar el tema suavemente
    const changeTheme = (newTheme) => {
        setTheme(newTheme);
    };

    // Aplicar el background al body
    useEffect(() => {
        document.body.style.backgroundColor = theme.background;
    }, [theme.background]);

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {/* Aquí aplicamos las variables CSS dinámicamente al div contenedor.
        Esto es magia pura: al cambiar el estado, CSS se entera automático.
      */}
            <div
                style={{
                    color: theme.text,
                    minHeight: '100vh',
                    transition: 'background-color 0.5s ease, color 0.5s ease' // Transición suave
                }}
            >
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

// 3. Un Hook personalizado para usar esto fácil en cualquier lado
export const useTheme = () => useContext(ThemeContext);