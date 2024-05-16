"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formRegisterModel = z.object({
	name: z.string().min(2, 'El nombre debe tener como minimo 2 caracteres'),
	username: z.string(),
	email: z.string().email(),
	password: z.string().regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/, "Escribe mínimo 1 número y 1 carácter especial"),
});

type FormRegisterModel = z.infer<typeof formRegisterModel>;

//creacion de estados para el formulario de registro
function FormularioRegistro() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormRegisterModel>({
		resolver: zodResolver(formRegisterModel),
	});

	//mandar los datos del front a la base de datos
	const onSubmit = async (data: FormRegisterModel) => {
		const res = await fetch('http://localhost:8000/postulants', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		console.log(res);
	};

	return (
		<div style={{ backgroundColor: '#F5D7AE', padding: '20px' }}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor='name'> Escibe tu nombre</label>
					<input
						type='text'
            id='name'
						{...register('name')}
					/>
				</div>
        {errors.name && <p>{errors.name.message}</p>}
				<br />
				<div>
					<label htmlFor='email'> Escibe tu E-mail</label>
					<input
						type='email'
            {...register('email')}
					/>
				</div>
        {errors.email && <p>{errors.email.message}</p>}
				<br />
				<div>
					<label htmlFor='password'> Escribe tu Contraseña</label>
					<input
						type='password'
            id='password'
            {...register('password')}
					/>
				</div>
        {errors.password && <p>{errors.password.message}</p>}
				<br />
				<div>
					<label htmlFor='username'> Escribe tu nombre de usuario </label>
					<input
						type='username'
            id='username'
            {...register('username')}
					/>
				</div>
				<br />
				<input type='submit' value='Registarse' />
			</form>
		</div>
	);
};

export default FormularioRegistro;