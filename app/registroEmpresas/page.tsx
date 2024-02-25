"use client";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';


const formRegisterModel = z.object({
	name: z.string().min(2, 'El nombre debe tener como minimo 2 caracteres'),
	email: z.string().email(),
	description : z.string(),
    ubication: z.string(),
    type: z.string(),
    id: z.string(),
    cell_phone_number: z.string()
});

type FormRegisterModel = z.infer<typeof formRegisterModel>;


const onSubmit = async (data: FormRegisterModel) => {
    const res = await fetch('http://localhost:8000/companies', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    console.log(res);
}

    function FormularioRegistroEmpresas() {
        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm<FormRegisterModel>({
            resolver: zodResolver(formRegisterModel),
        });
    return(
<div style={{ backgroundColor: '#F5D7AE', padding: '20px' }}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor='name'> Escibe el nombre de la empresa</label>
					<input
						type='text'
            id='name'
						{...register('name')}
					/>
				</div>
        {errors.name && <p>{errors.name.message}</p>}
				<br />
				<div>
					<label htmlFor='email'> Escibe el E-mail de la empresa</label>
					<input
						type='email'
            {...register('email')}
					/>
				</div>
        {errors.email && <p>{errors.email.message}</p>}
				<br />
				<div>
					<label htmlFor='id'> Escribe el NIT de la empresa</label>
					<input
						type='id'
            id='id'
            {...register('id')}
					/>
				</div>
				<br />
				<div>
					<label htmlFor='description'> Escribe una breve descripción de la empresa</label>
					<input
						type='description'
            id='description'
            {...register('description')}
					/>
				</div>
				<br />
				<div>
					<label htmlFor='cell_phone_number'>
						Escibe el número de la empresa
					</label>
					<input
						type='cell_phone_number'
            id='cell_phone_number'
            {...register('cell_phone_number')}
					/>
				</div>
				<br />
				<input type='submit' value='Registarse' />
			</form>
		</div>

    );
}

export default  FormularioRegistroEmpresas;