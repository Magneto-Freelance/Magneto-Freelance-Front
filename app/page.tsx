"use client";

import Image from 'next/image';
import BarraDeBusqueda from './components/BarraDeBusqueda';
import Botones from './components/Botones';
import { Suspense, useState } from 'react';
import Muro from './components/Muro';

function App() {
  const [search, setSearch] = useState('');
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<div className='container-fluid d-lg-flex d-md-block w-100 justify-content-between'>
					<a className='navbar-brand' href='/'>
						<Image
							src='/magneto.svg'
							alt='Magneto Freelance'
							width={120}
							height={60}
						/>
						<Image
							src='/freelance.svg'
							alt='Magneto Freelance'
							width={80}
							height={40}
						/>
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='d-lg-block mw-50 d-md-none d-sm-none'>
						<div className='mx-auto'>
							<BarraDeBusqueda onSearch={setSearch} />
						</div>
					</div>
					<div className='d-block'>
						<div
							className='collapse navbar-collapse'
							id='navbarSupportedContent'
						>
							<Botones />
						</div>
					</div>
				</div>
			</nav>
			<main className='container'>
				<div className='row col-lg-10'>
					<Suspense fallback={<div>Loading...</div>}>
            <Muro search={search} />
          </Suspense>
				</div>
			</main>
		</>
	);
}

export default App;
