import React from 'react';
import { useTheme } from '../../Context/ThemeContext';
// 1. Importamos los íconos que queremos usar (Fa = FontAwesome)
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    const { theme } = useTheme();

    // Estilo base para los enlaces (para no repetir código)
    const iconStyle = {
        color: theme.text, // Toman el color del tema (blanco o negro)
        fontSize: '1.5rem', // Tamaño del ícono
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center'
    };

    return (
        <footer style={{
            padding: '3rem 2rem',
            textAlign: 'center',
            borderTop: '1px solid rgba(0,0,0,0.1)',
            color: theme.text,
            transition: 'color 0.5s ease'
        }}>
            <div style={{ 
                marginBottom: '1.5rem', 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '2.5rem' // Un poco más de espacio entre íconos
            }}>
                {/* GITHUB */}
                <a 
                    href="https://github.com/mmariellemm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={iconStyle}
                    // Pequeño efecto hover inline
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <FaGithub />
                </a>

                {/* LINKEDIN - ¡No olvides poner tu link real aquí! */}
                <a 
                    href="https://www.linkedin.com/in/tu-usuario" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={iconStyle}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <FaLinkedin />
                </a>

                {/* INSTAGRAM - ¡No olvides poner tu link real aquí! */}
                <a 
                    href="https://www.instagram.com/tu-usuario" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={iconStyle}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <FaInstagram />
                </a>
            </div>

            <p style={{ fontSize: '0.8rem', opacity: 0.6, fontFamily: 'Helvetica, sans-serif' }}>
                © 2025 MARIELLE ABIGAIL AKE CARRILLO
            </p>
        </footer>
    );
};

export default Footer;