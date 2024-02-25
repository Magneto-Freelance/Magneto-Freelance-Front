import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Botones() {
	return (
		<div>
			<div className='button-container'>
				<Link style={{ backgroundColor: '#FFFFFF' }} href='/inicio'>
					{' '}
					<Image
						src={'/crear_usuario.png'}
						alt='Iniciar sesión'
						height='30'
						width='30'
					/>
					Iniciar sesión
				</Link>
				<Link style={{ backgroundColor: '#65EEC1' }} href='/empresa_o_freelancer'>
					{' '}
					<Image
						src={'/flecha_inicio.jpg'}
						alt='Crear cuenta'
						height='30'
						width='30'
					/>
					Crear cuenta
				</Link>
			</div>
		</div>
	);
};

export default Botones;
