"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTokenStore } from '../store';
import { useRouter } from 'next/navigation';
import { Offer } from '../types';

export default function CrearOferta() {
    const router = useRouter();
	const { email, type } = useTokenStore();
    const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Offer>({ resolver: zodResolver(Offer), defaultValues: {
        employer: email ?? '',
    } });

    useEffect(() => {
        if (!email || type !== 'empresa') {
            toast.error('Debes iniciar sesión como empresa para crear una oferta');
            router.push('/');
        }
    }, [email, router, type]);

	const onSubmit = async (data: Offer) => {
		try {
			const res = await fetch('http://localhost:8000/offer', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (res.status === 201) {
				toast.success('Oferta creada exitosamente');
			} else {
				toast.error('Error al crear la oferta, intente más tarde');
			}
		} catch (error) {
			console.error('Error al enviar la solicitud:', error);
		}
	};

	return (
		<main className='container mt-5'>
			<form className='row g-3' role='form' onSubmit={handleSubmit(onSubmit)}>
				<div className='col-md-6'>
					<label htmlFor='title' className='form-label'>
						Título
					</label>
					<input
						type='text'
						className='form-control'
						id='title'
						placeholder='Título'
						{...register('title')}
					/>
					{errors.title && <p>{errors.title.message}</p>}
				</div>
				<div className='col-md-6'>
					<label htmlFor='employer' className='form-label'>
						Empleador
					</label>
					<input
						type='text'
						className='form-control text-secondary disabled'
						id='employer'
						placeholder='Empleador'
                        readOnly
						{...register('employer')}
					/>
					{errors.employer && <p>{errors.employer.message}</p>}
				</div>
				<div className='col-12'>
					<label htmlFor='description' className='form-label'>
						Descripción
					</label>
					<textarea
						className='form-control'
						id='description'
						placeholder='Descripción'
						{...register('description')}
					></textarea>
					{errors.description && <p>{errors.description.message}</p>}
				</div>
				<div className='col-md-6'>
					<label htmlFor='skills' className='form-label'>
						Habilidades
					</label>
					<input
						type='text'
						className='form-control'
						id='skills'
						placeholder='Habilidades'
						{...register('skills')}
					/>
					{errors.skills && <p>{errors.skills.message}</p>}
				</div>
				<div className='col-md-6'>
					<label htmlFor='salary' className='form-label'>
						Salario
					</label>
					<input
						type='text'
						className='form-control'
						id='salary'
						placeholder='Salario'
						{...register('salary')}
					/>
					{errors.salary && <p>{errors.salary.message}</p>}
				</div>
				<div className='col-12'>
					<button type='submit' className='btn btn-primary'>
						Crear oferta
					</button>
				</div>
			</form>
		</main>
	);
}