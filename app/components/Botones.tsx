'use client';

import React from 'react';
import Link from 'next/link';
import { useTokenStore } from '../store';

function Botones() {
	const { token, type, logout } = useTokenStore();

	if (token) {
		return (
			<ul className='navbar-nav'>
				{type == 'empresa' && (
					<li className='nav-item'>
						<Link href='/crear-oferta' className='me-2'>
							<button className='btn btn-primary'>Crear oferta</button>
						</Link>
					</li>
				)}

					{type == 'freelancer' && (
					<li className='nav-item'>
						<Link href='/crear_portafolio' className='me-2'>
							<button className='btn btn-primary'>Crear Portafolio</button>
						</Link>
					</li>
				)}
				<li className='nav-item mt-2 me-2'>
					Perfil: <span className='text-capitalize'>{type}</span>
				</li>
				<li className='nav-item'>
					<button className='nav-link' onClick={() => logout()}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							fill='currentColor'
							className='bi bi-box-arrow-right'
							viewBox='0 0 16 16'
						>
							<path
								fillRule='evenodd'
								d='M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z'
							/>
							<path
								fillRule='evenodd'
								d='M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z'
							/>
						</svg>
						Cerrar sesión
					</button>
				</li>
			</ul>
		);
	}

	return (
		<ul className='navbar-nav'>
			<li className='nav-item'>
				<Link
					className='btn btn-outline-primary me-2'
					href='/empresa-o-freelancer/inicio'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						fill='currentColor'
						className='bi me-2 bi-box-arrow-in-right'
						viewBox='0 0 16 16'
					>
						<path
							fillRule='evenodd'
							d='M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z'
						/>
						<path
							fillRule='evenodd'
							d='M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z'
						/>
					</svg>
					Iniciar sesión
				</Link>
			</li>
			<li className='nav-item'>
				<Link
					href='/empresa-o-freelancer/registro'
					className='btn btn-primary'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						fill='currentColor'
						className='bi me-2 bi-box-arrow-in-right'
						viewBox='0 0 16 16'
					>
						<path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0' />
						<path d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z' />
					</svg>
					Registrarse
				</Link>
			</li>
		</ul>
	);
}
export default Botones;
