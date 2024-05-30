"use client";

"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Portafolio } from '../types';
import styles from './styles.css';

function VisualizarPortafolio() {
    const router = useRouter();
    const [portafolios, setPortafolios] = useState<Portafolio[]>([]);

    useEffect(() => {
        async function fetchPortafolios() {
            try {
                const res = await fetch('http://localhost:8000/portafolio');
                if (res.ok) {
                    const portafolioData = await res.json();
                    setPortafolios(portafolioData);
                } else {
                    console.error('Error al obtener el portafolio:', res.statusText);
                }
            } catch (error) {
                console.error('Error al obtener el portafolio:', error);
            }
        }

        fetchPortafolios();
    }, []);

    if (portafolios.length === 0) {
        return <div className='container mt-5'>Cargando...</div>;
    }

    return (
        <div className='container-fluid mt-5'>
            <div className='row justify-content-center'>
                <div className='col-lg-8'>
                    {portafolios.map((portafolio, index) => (
                        <div key={index} className='card'>
                            <div className='card-header'>
                                <h1 className='card-title text-center'>Portafolio</h1>
                            </div>
                            <div className='card-body'>
                                <p><strong>Profesión:</strong> {portafolio.profesion}</p>
                                <p><strong>Descripción:</strong> {portafolio.description}</p>
                                <p><strong>Salario deseado:</strong> {portafolio.salary}</p>
                                <p><strong>Habilidades:</strong> {portafolio.skills}</p>
                                <p><strong>Whatsapp:</strong> {portafolio.whatsapp}</p>
                                <p><strong>Otra información:</strong> {portafolio.other}</p>
                            </div>
                        </div>
                    ))}
                    <button className='btn btn-primary' onClick={() => router.back()}>Volver</button>
                </div>
            </div>
            <style jsx>{`
                .card {
                    margin-bottom: 40px;
                }
            `}</style>
        </div>
    );
}

VisualizarPortafolio.useClient = true;

export default VisualizarPortafolio;
