import React from 'react';
import { useTheme } from '../../Context/ThemeContext';
// Importamos Facebook, Instagram y TikTok de la colección estándar
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
// Importamos la "X" específica de la colección nueva (FontAwesome 6)
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    const { theme } = useTheme();

    // Estilo base para los íconos
    const iconStyle = {
        color: theme.text, // Toman el color del tema (blanco o negro)
        fontSize: '1.5rem',// Tamaño del ícono
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center'
    };

    // Función para el efecto hover (hacerse grande)
    const handleMouseEnter = (e) => e.currentTarget.style.transform = 'scale(1.2)';
    const handleMouseLeave = (e) => e.currentTarget.style.transform = 'scale(1)';

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
                gap: '2rem' // Un poco más de espacio entre íconos
            }}>
                {/* 1. FACEBOOK */}
                <a 
                    href="https://facebook.com/tu-usuario" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={iconStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <FaFacebook />
                </a>

                {/* 2. INSTAGRAM */}
                <a 
                    href="https://instagram.com/tu-usuario" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={iconStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <FaInstagram />
                </a>

                {/* 3. TIKTOK */}
                <a 
                    href="https://tiktok.com/@tu-usuario" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={iconStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <FaTiktok />
                </a>

                {/* 4. TWITTER (X) */}
                <a 
                    href="https://x.com/tu-usuario" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={iconStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <FaXTwitter />
                </a>
            </div>

            <p style={{ fontSize: '0.8rem', opacity: 0.6, fontFamily: 'Helvetica, sans-serif' }}>
                © 2025 MARIELLE ABIGAIL AKE CARRILLO
            </p>
        </footer>
    );
};

export default Footer;