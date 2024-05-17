'use client';

import React from 'react';
import Link from 'next/link';
import { useTokenStore } from '../store';

function Botones() {
    const { token, type, logout } = useTokenStore();

    return (
        <ul className='navbar-nav'>
            {token && type === 'empresa' && (
                <li className='nav-item'>
                    <Link href='/crear-oferta' className='me-2'>
                        <button style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem', lineHeight: '1.5', borderRadius: '0.2rem' }} className='btn btn-primary me-2'>Crear oferta</button>
                    </Link>
                </li>
            )}

            {token && type === 'freelancer' && (
                <>
                    <li className='nav-item'>
                        <Link href='/visualizar_portafolio' className='me-2'>
                            <button style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem', lineHeight: '1.5', borderRadius: '0.2rem' }} className='btn btn-primary me-2'>Visualizar Portafolio</button>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/crear_portafolio' className='me-2'>
                            <button style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem', lineHeight: '1.5', borderRadius: '0.2rem' }} className='btn btn-primary'>Crear Portafolio</button>
                        </Link>
                    </li>
                </>
            )}

            {!token && (
                <>
                    <li className='nav-item'>
                        <Link
                            className='btn btn-outline-primary me-2'
                            href='/empresa-o-freelancer/inicio'
                        >
                            Iniciar sesión
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            href='/empresa-o-freelancer/registro'
                            className='btn btn-primary'
                        >
                            Registrarse
                        </Link>
                    </li>
                </>
            )}

            {token && (
                <>
                    <li className='nav-item mt-2 me-2'>
                        Perfil: <span className='text-capitalize'>{type}</span>
                    </li>
                    <li className='nav-item'>
                        <button className='nav-link btn' onClick={() => logout()}>
                            Cerrar sesión
                        </button>
                    </li>
                </>
            )}
        </ul>
    );
}

export default Botones;