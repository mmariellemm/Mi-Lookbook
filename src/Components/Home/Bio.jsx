import React from 'react';
import { useTheme } from '../../Context/ThemeContext';

const Bio = () => {
    const { theme } = useTheme();

    return (
        <section style={{
            padding: '6rem 2rem',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            // Usamos el color de texto del tema, por si vienes de un hover
            color: theme.text,
            transition: 'color 0.5s ease'
        }}>
            <h3 style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: '2rem',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '2px'
            }}>
                ACERCA DE MÍ
            </h3>

            <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                fontFamily: 'Helvetica, Arial, sans-serif',
                marginBottom: '3rem',
                opacity: 0.8
            }}>
                Soy <strong>Marielle</strong>. Este portafolio es una colección de mi estilo 
                personal y mi versatilidad visual. Este espacio es mi lienzo digital donde 
                exploro mi gusto por la moda, la fotografía y la estética.
            </p>

            {/* Botón de Contacto Estilizado */}
            <a
                href="mailto:marielleacarrillo@gmail.com"
                style={{
                    display: 'inline-block',
                    padding: '1rem 3rem',
                    border: `1px solid ${theme.text}`, // Borde del color del tema
                    textDecoration: 'none',
                    color: theme.text,
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    transition: 'all 0.3s ease',
                }}
                // Un pequeño efecto hover inline para el botón
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = theme.text;
                    e.target.style.color = theme.background;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = theme.text;
                }}
            >
                CONTACTAR
            </a>
        </section>
    );
};

export default Bio;