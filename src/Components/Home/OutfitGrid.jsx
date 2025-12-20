import React from 'react';
import { outfits } from '../../Data/Outfits'; // Importamos los datos
import { useTheme } from '../../Context/ThemeContext';

const OutfitGrid = () => {
    const { changeTheme } = useTheme();

    return (
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '2rem',
                fontFamily: 'Helvetica, sans-serif', // Una fuente limpia tipo Floppy Kenny
                textTransform: 'uppercase'
            }}>
                Selected Looks
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Grid responsivo
                gap: '2rem'
            }}>
                {outfits.map((item) => (
                    <div
                        key={item.id}
                        style={{ cursor: 'pointer' }}
                        // AQUÍ ESTÁ EL TRUCO: Al pasar el mouse, cambiamos el tema global
                        onMouseEnter={() => changeTheme(item.theme)}
                    >
                        <div style={{ overflow: 'hidden', borderRadius: '4px' }}>
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{
                                    width: '100%',
                                    height: '400px',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease', // Efecto zoom suave
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