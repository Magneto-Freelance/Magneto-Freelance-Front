'use client';

import React, { useState } from 'react';
import { useDebounce, useDebouncedCallback } from 'use-debounce';

interface BarraDeBusquedaProps {
	onSearch: (searchTerm: string) => void;
}

function BarraDeBusqueda({ onSearch }: BarraDeBusquedaProps) {
	const debounced = useDebouncedCallback((value) => {
		onSearch(value);
	}, 500);

	return (
		<input
			className='form-control text-center fs-5'
			type='search'
			placeholder='Buscar empleo o profesión'
			aria-label='Search'
			onChange={(e) => debounced(e.target.value)}
		/>
	);
}

export default BarraDeBusqueda;
