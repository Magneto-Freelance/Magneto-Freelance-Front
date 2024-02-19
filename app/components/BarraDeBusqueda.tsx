"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const searchBarModel = z.object({
	searchTerm: z.string({
		required_error: 'Debes ingresar un término de búsqueda',
	}),
});

type SearchBarModel = z.infer<typeof searchBarModel>;

function BarraDeBusqueda() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SearchBarModel>({ resolver: zodResolver(searchBarModel) });

	const sendSearch = (data: SearchBarModel) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(sendSearch)}>
			<input
				type='search'
				placeholder='Buscar empleo o profesión'
				{...register('searchTerm')}
			/>
			{errors.searchTerm && <p>{errors.searchTerm.message}</p>}
			<button
				type='submit'
				style={{ backgroundColor: '#171D8E', color: '#FFFFFF' }}
			>
				Buscar
			</button>
		</form>
	);
};

export default BarraDeBusqueda;
