"use client";


import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';


const formRegisterModel = z.object({
  name: z.string().min(2, 'El nombre debe tener como mínimo 2 caracteres'),
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

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-group" style={{ marginBottom: '20px' }}>
          <label htmlFor='name'>Nombre de la empresa</label>
          <input type='text' id='name' {...register('name')} />
        </div>
        <div className="form-group" style={{ marginBottom: '20px' }}>
          <label htmlFor='email'>Email de la empresa</label>
          <input type='email' {...register('email')} />
        </div>
        <div className="form-group" style={{ marginBottom: '20px' }}>
          <label htmlFor='username'>Nombre de usuario de la empresa</label>
          <input type='text' id='username' {...register('username')} />
        </div>
        <div className="form-group" style={{ marginBottom: '20px' }}>
          <label htmlFor='password'>Contraseña de la empresa</label>
          <input type='password' id='password' {...register('password')} />
        </div>
        <div className="form-group">
          <button type='submit'>Registrarse</button>
        </div>
      </form>
    </div>
  );
}

export default FormularioRegistroEmpresas;
