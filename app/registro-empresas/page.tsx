"use client";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';


const formRegisterModel = z.object({
    name: z.string().min(2, 'El nombre debe tener como minimo 2 caracteres'),
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
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
                    <label htmlFor='ussername'>Escribe el nombre de usuario de la empresa</label>
                    <input
                        type='text'
                        id='nit'
                        {...register('username')}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor='nit'>Escribe la contraseña de la empresa</label>
                    <input
                        type='password'
                        id='password'
                        {...register('password')}
                    />
                </div>
                <br />
                <br />
                <button type='submit' > Registrarse </button>
            </form>
        </div>
    );
}

export default FormularioRegistroEmpresas;