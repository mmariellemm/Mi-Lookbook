import React from 'react';
import { useTheme } from '../../Context/ThemeContext';

const Hero = () => {
    const { theme } = useTheme();

    return (
        <header style={{
            height: '90vh', // Casi toda la pantalla
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 2rem',
            position: 'relative', // Para poder poner elementos flotando si queremos
        }}>

            {/* 1. Título Gigante */}
            <h1 style={{
                // En el style del h1:
                //fontFamily: "'Oswald', sans-serif", // <--- Agrega esto
                //textTransform: 'uppercase',

                fontSize: 'clamp(3rem, 10vw, 8rem)', // Responsivo: se hace chico en móvil y gigante en PC
                fontWeight: '900',
                lineHeight: '0.9',
                letterSpacing: '-2px',
                margin: 0,
                color: theme.text, // Usa el color del tema actual
                transition: 'color 0.5s ease'
            }}>
                MARIELLE
                <br />
                <span style={{ opacity: 0.5 }}>MARIELLE</span>
            </h1>

            {/* 2. Subtítulo Tech + Moda */}
            <p style={{
                marginTop: '2rem',
                fontSize: '1.2rem',
                maxWidth: '600px',
                fontWeight: '500'
            }}>
                HAY MUCHAS MANERAS DE EXPRESARSE, Y UNA DE ELLAS... ES EN LA ROPA
            </p>

            {/* 3. Una foto tuya principal (Opcional: Si quieres una foto fija de presentación) */}
            <div style={{
                marginTop: '3rem',
                width: '200px',
                height: '250px',
                overflow: 'hidden',
                // Un borde sutil que cambia de color con el tema
                border: `2px solid ${theme.text}`
            }}>
                <img
                    src="/images/Perfil1.png" // <--- CAMBIA ESTO por una foto tuya de perfil o artística
                    alt="Marielle Profile"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            {/* 4. Indicador de Scroll (Flecha animada) */}
            {/* En Hero.jsx */}
            <br></br>
            <a href="#lookbook" style={{ /*...tus estilos...*/ textDecoration: 'none', color: 'inherit' }}>
                ↓ DESLISA PARA EXPLORAR
            </a>

            {/* Agregamos la animación en el mismo archivo para no crear un CSS aparte */}
            <style>
                {`
            @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
            40% {transform: translateY(-10px);}
            60% {transform: translateY(-5px);}
            }
        `}
            </style>
        </header>
    );
};

export default Hero;