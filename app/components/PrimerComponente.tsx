import { useEffect, useState } from 'react';

//funcion para conectar el back con el front (fetch), Linea del 6  a la 13 son para traer la respuesta del servidor del back

async function PrimerComponente() {
	const respuesta = await fetch('http://127.0.0.1:8000/postulants');
	const data = await respuesta.json();
	const postulants = data.postulants;

	return (
		<header
			style={{
				textAlign: 'center',
				padding: '20px',
				backgroundColor: 'E7F5F2',
				fontFamily: 'Lato, sans-serif',
			}}
		>
			<h1>
				<span style={{ color: '#00ff77' }}>¡Bienvenido a</span>{' '}
				<span style={{ color: '#16216E' }}>Magneto-Freelance!</span>
			</h1>
		</header>
	);
};

export default PrimerComponente;
