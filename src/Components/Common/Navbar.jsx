import React from 'react';
import { useTheme } from '../../Context/ThemeContext'; // Ajusta la ruta si tus carpetas cambiaron

const Navbar = () => {
    const { theme } = useTheme();

    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '2rem 3rem',
            position: 'sticky', // Se queda pegado arriba
            top: 0,
            zIndex: 100,
            // Usamos un fondo sólido del color actual para un efecto elegante
            backgroundColor: theme.background,
            transition: 'background-color 0.5s ease'
        }}>
            {/* LOGO */}
            <div style={{ fontSize: '1.5rem', fontWeight: '900', letterSpacing: '-1px' }}>
                MARIELLE.
            </div>

            {/* ENLACES (Solo visuales por ahora) */}
            <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: '600' }}>
                <span style={{ cursor: 'pointer' }}>NEW ARRIVALS</span>
                <span style={{ cursor: 'pointer' }}>LOOKBOOK</span>
                <span style={{ cursor: 'pointer' }}>SHOP</span>
            </div>

            {/* ICONOS (Simulados con texto por ahora o puedes usar librería de íconos) */}
            <div style={{ display: 'flex', gap: '1.5rem' }}>
                <span>🔍</span>
                <span>👜 (0)</span>
            </div>
        </nav>
    );
};

export default Navbar;