import React from 'react';
import { outfits } from '../../Data/Outfits'; // Revisa si tus mayúsculas son Data u data
import { useTheme } from '../../Context/ThemeContext';

const OutfitGrid = () => {
    const { changeTheme } = useTheme();

    // 1. Definimos cuál es el estado "Normal" (Reset)
    const defaultTheme = {
        background: "#ffffff",
        text: "#000000",
        accent: "#ff0000" // O el color rojo de tu logo
    };

    return (
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '2rem',
                fontFamily: 'Helvetica, sans-serif',
                textTransform: 'uppercase'
            }}>
                Selected Looks
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {outfits.map((item) => (
                    <div
                        key={item.id}
                        style={{ cursor: 'pointer' }}
                        // 2. AQUÍ ESTÁ LA MAGIA:
                        onMouseEnter={() => changeTheme(item.theme)}   // Al entrar -> Color del outfit
                        onMouseLeave={() => changeTheme(defaultTheme)} // Al salir  -> Color normal (blanco)
                    >
                        <div style={{ overflow: 'hidden', borderRadius: '4px' }}>
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{
                                    width: '100%',
                                    height: '400px',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease',
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>

                        <div style={{ marginTop: '1rem' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{item.title}</h3>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>{item.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OutfitGrid;