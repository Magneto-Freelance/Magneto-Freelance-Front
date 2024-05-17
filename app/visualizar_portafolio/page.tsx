"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Portafolio } from '../types';
import styles from './styles.css';

function VisualizarPortafolio() {
    const router = useRouter();
    const [portafolio, setPortafolio] = useState<Portafolio | null>(null);

    useEffect(() => {
        async function fetchPortafolio() {
            try {
                const res = await fetch('http://localhost:8000/portafolio');
                if (res.ok) {
                    const portafolioData = await res.json();
                    setPortafolio(portafolioData);
                } else {
                    console.error('Error al obtener el portafolio:', res.statusText);
                }
            } catch (error) {
                console.error('Error al obtener el portafolio:', error);
            }
        }

        fetchPortafolio();
    }, []);

    if (!portafolio) {
        return <div className='container mt-5'>Cargando...</div>;
    }

    return (
        <div className='container-fluid mt-5'>
            <div className='row justify-content-center'>
                <div className='col-lg-8'>
                    <div className='card'>
                        <div className='card-header'>
                            <h1 className='card-title text-center'>Mi Portafolio</h1>
                        </div>
                        <div className='card-body'>
                            <p><strong>Profesión:</strong> {portafolio.profesion}</p>
                            <p><strong>Descripción:</strong> {portafolio.description}</p>
                            <p><strong>Salario deseado:</strong> {portafolio.salary}</p>
                            <p><strong>Habilidades:</strong> {portafolio.skills}</p>
                            <p><strong>Whatsapp:</strong> {portafolio.whatsapp}</p>
                            <p><strong>Otra información:</strong> {portafolio.other}</p>
                            <button className='btn btn-primary' onClick={() => router.back()}>Volver</button>
                        </div>
                    </div>
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
