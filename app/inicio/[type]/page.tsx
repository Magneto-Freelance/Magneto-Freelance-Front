'use client';
import { useTokenStore } from '@/app/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { z } from 'zod';

const loginModel = z.object({
	email: z.string().email(),
	password: z.string(),
});

const TYPE_MAP = {
  empresa: 'Empleador',
  freelancer: 'Freelancer',
};

const TYPE_MAP_BACKEND = {
  empresa: 'company',
  freelancer: 'postulant',
}

type LoginModel = z.infer<typeof loginModel>;

function FormularioInicio() {
  const setSession = useTokenStore((s) => s.setSession);
  const params = useParams<{ type: keyof typeof TYPE_MAP }>();
	const { type } = params;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginModel>({ resolver: zodResolver(loginModel) });

	const onSubmit = async (data: LoginModel) => {
		try {
			const res = await fetch('http://localhost:8000/login', {
				method: 'POST',
				body: JSON.stringify({
          type: TYPE_MAP_BACKEND[type],
          ...data
        }),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (res.status === 200) {
        const resJson = await res.json();
        toast.success('Inicio de sesión exitoso');
        setSession(data.email, resJson.access_token, type);
			} else if (res.status === 401) {
        const resJson = await res.json();
        toast.error(resJson.detail);
			} else {
        toast.error('Error al iniciar sesión, intente más tarde');
      }
		} catch (error) {
			console.error('Error al enviar la solicitud:', error);
		}
	};

	return (
		<main>
			<div className='d-flex vh-100 vw-100  justify-content-center align-items-center'>
				<div className='card' style={{ width: '32rem' }}>
					<div className='card-header text-center'>
						<h2>Bienvenido <span className='text-capitalize'>{TYPE_MAP[type]}</span></h2>
					</div>
					<div className='card-body'>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='mb-3'>
								<label htmlFor='email' className='form-label'>
									Correo electrónico
								</label>
								<input
									type='email'
									className='form-control'
									id='email'
									{...register('email')}
								/>
								{errors.email && (
									<span
										className='text-danger'
										role='alert'
									>
										{errors.email.message}
									</span>
								)}
							</div>
							<div className='mb-3'>
								<label
									htmlFor='password'
									className='form-label'
								>
									Contraseña
								</label>
								<input
									type='password'
									className='form-control'
									id='password'
									{...register('password')}
								/>
								{errors.password && (
									<span
										className='text-danger'
										role='alert'
									>
										{errors.password.message}
									</span>
								)}
							</div>
							<button type='submit' className='btn btn-primary'>
								Iniciar sesión
							</button>
						</form>
					</div>
				</div>
			</div>
		</main>
	);
}

export default FormularioInicio;
