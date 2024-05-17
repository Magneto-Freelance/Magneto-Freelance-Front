"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Portafolio } from '../types';

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
        return <div>Cargando...</div>;
    }

    return (
        <div className='container mt-5'>
            <h1>Visualizar Portafolio</h1>
            <p>Profesión: {portafolio.profesion}</p>
            <p>Descripción: {portafolio.description}</p>
            <p>Salario deseado: {portafolio.salary}</p>
            <p>Habilidades: {portafolio.skills}</p>
            <p>Whatsapp: {portafolio.whatsapp}</p>
            <p>Otra información: {portafolio.other}</p>
            <button className='btn btn-primary' onClick={() => router.back()}>
                Volver
            </button>
        </div>
    );
}

export default VisualizarPortafolio;