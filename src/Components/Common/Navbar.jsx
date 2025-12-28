import React from 'react';
import { useTheme } from '../../Context/ThemeContext';

const Navbar = () => {
    const { theme } = useTheme();

    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '2rem 3rem',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            backgroundColor: theme.background,
            transition: 'background-color 0.5s ease'
        }}>
            {/* LOGO - Al darle clic también te lleva al inicio */}
            <a href="#inicio" style={{ 
                fontSize: '1.5rem', 
                fontWeight: '900', 
                letterSpacing: '-1px',
                color: 'inherit',     // Hereda el color del tema
                textDecoration: 'none' // Sin subrayado
            }}>
                MARIELLE.
            </a>

            {/* ENLACES FUNCIONALES */}
            <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: '600' }}>
                
                {/* 1. INICIO */}
                <a href="#inicio" style={{ 
                    cursor: 'pointer', 
                    color: 'inherit', 
                    textDecoration: 'none' 
                }}>
                    INICIO
                </a>

                {/* 2. LOOKBOOK */}
                <a href="#lookbook" style={{ 
                    cursor: 'pointer', 
                    color: 'inherit', 
                    textDecoration: 'none' 
                }}>
                    LOOKBOOK
                </a>

                {/* 3. ACERCA DE MÍ */}
                <a href="#acerca" style={{ 
                    cursor: 'pointer', 
                    color: 'inherit', 
                    textDecoration: 'none' 
                }}>
                    ACERCA DE MÍ
                </a>
            </div>

            {/* ICONOS */}
            {/*<div style={{ display: 'flex', gap: '1.5rem' }}>
                <span>Marielle</span>
                <span>Marielle</span>
            </div>*/}
        </nav>
    );
};

export default Navbar;