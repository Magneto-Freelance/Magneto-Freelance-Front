"use client";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';


const formRegisterModel = z.object({
    name: z.string().min(2, 'El nombre debe tener como minimo 2 caracteres'),
    email: z.string().email(),
    description: z.string(),
    ubication: z.string(),
    type: z.string(),
    nit: z.string(),
    cellphoneNumber: z.string()
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
    console.log(errors);
    return (
        <div style={{ backgroundColor: '#F5D7AE', padding: '20px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='name'>Escribe el nombre de la empresa</label>
                    <input
                        type='text'
                        id='name'
                        {...register('name')}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor='email'>Escribe el E-mail de la empresa</label>
                    <input
                        type='email'
                        {...register('email')}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor='nit'>Escribe el NIT  o contraseña de la empresa</label>
                    <input
                        type='text'
                        id='nit'
                        {...register('nit')}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor='type'>Escribe de qué tipo es la empresa</label>
                    <input
                        type='text'
                        id='type'
                        {...register('type')}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor='type'>Escribe la ubicación de la empresa</label>
                    <input
                        type='text'
                        id='type'
                        {...register('ubication')}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor='description'>Escribe una breve descripción de la empresa</label>
                    <input
                        type='text'
                        id='description'
                        {...register('description')}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor='cellphoneNumber'>Escribe el número de la empresa</label>
                    <input
                        type='text'
                        id='cellphoneNumber'
                        {...register('cellphoneNumber')}
                    />
                </div>
                <br />
                <button type='submit' > Registrarse </button>
            </form>
        </div>
    );
}

export default FormularioRegistroEmpresas;