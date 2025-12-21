import React from 'react';
import { useTheme } from '../../Context/ThemeContext';

const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer style={{
            padding: '3rem 2rem',
            textAlign: 'center',
            borderTop: '1px solid rgba(0,0,0,0.1)', // Una línea muy sutil
            fontSize: '0.8rem',
            color: theme.text,
            transition: 'color 0.5s ease'
        }}>
            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                {/* Enlaces reales a tus redes */}
                <a href="https://github.com/mmariellemm" target="_blank" style={{ color: 'inherit', textDecoration: 'none' }}>GITHUB</a>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>LINKEDIN</a>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>INSTAGRAM</a>
            </div>

            <p style={{ opacity: 0.5 }}>
                © 2025 MARIELLE ABIGAIL AKE CARRILLO
            </p>
        </footer>
    );
};

export default Footer;