"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTokenStore } from '../store';
import { useRouter } from 'next/navigation';
import { Portafolio } from '../types';

export default function CrearPortafolio() {
    const router = useRouter();
	const { email, type } = useTokenStore();
    const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Portafolio>({ resolver: zodResolver(Portafolio), defaultValues: {
    } });

    useEffect(() => {
        if (!email || type !== 'freelancer') {
            toast.error('Debes iniciar sesión como freelancer para crear un potafolio');
            router.push('/');
        }
    }, [email, router, type]);

	const onSubmit = async (data: Portafolio) => {
		try {
			const res = await fetch('http://localhost:8000/portafolio', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (res.status === 201) {
				toast.success('Portafolio creado exitosamente');
			} else {
				toast.error('Error al crear el portafolio, intente más tarde');
			}
		} catch (error) {
			console.error('Error al enviar la solicitud:', error);
		}
	};

	return (
		<main className='container mt-5'>
			<form className='row g-3' role='form' onSubmit={handleSubmit(onSubmit)}>
				<div className='col-md-6'>
					<label htmlFor='profesion' className='form-label'>
						Profesion
					</label>
					<input
						type='text'
						className='form-control'
						id='profesion'
						placeholder='Profesion'
						{...register('profesion')}
					/>
					{errors.profesion && <p>{errors.profesion.message}</p>}
				</div>
				<div className='col-md-6'>
					<label htmlFor='description' className='form-label'>
						Descripcion personal 
					</label>
					<input
						type='text'
						className='form-control text-secondary'
						id='description'
						placeholder='Descripcion'
						{...register('description')}
					/>
					{errors.description && <p>{errors.description.message}</p>}
				</div>
				<div className='col-12'>
					<label htmlFor='salary' className='form-label'>
						Salario deseado
					</label>
					<textarea
						className='form-control'
						id='salary'
						placeholder='Salary'
						{...register('salary')}
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
					<label htmlFor='whatsapp' className='form-label'>
						Link de whatsapp o número
					</label>
					<input
						type='text'
						className='form-control'
						id='whatsapp'
						placeholder='Whatsapp'
						{...register('whatsapp')}
					/>
					{errors.whatsapp && <p>{errors.whatsapp.message}</p>}
				</div>
                <div className='col-md-6'>
					<label htmlFor='other' className='form-label'>
						Otra información o redes sociales
					</label>
					<input
						type='text'
						className='form-control'
						id='other'
						placeholder='Otros'
						{...register('other')}
					/>
					{errors.other && <p>{errors.other.message}</p>}
				</div>
				<div className='col-12'>
					<button type='submit' className='btn btn-primary'>
						Crear Portafolio
					</button>
				</div>
			</form>
		</main>
	);
}
