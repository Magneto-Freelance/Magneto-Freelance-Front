"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';


const formRegisterModel = z.object({
  name: z.string().min(2, 'El nombre debe tener como mínimo 2 caracteres'),
  username: z.string(),
  email: z.string().email(),
  password: z.string().regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/, "Escribe mínimo 1 número y 1 carácter especial"),
});

type FormRegisterModel = z.infer<typeof formRegisterModel>;

function FormularioRegistro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRegisterModel>({
    resolver: zodResolver(formRegisterModel),
  });

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
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-group" style={{ marginBottom: '20px' }}>
          <label htmlFor='name'>Nombre</label>
          <input type='text' id='name' {...register('name')} />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>

        <div className="form-group" style={{ marginBottom: '20px' }}>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' {...register('email')} />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div className="form-group" style={{ marginBottom: '20px' }}>
          <label htmlFor='password'>Contraseña</label>
          <input type='password' id='password' {...register('password')} />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>

        <div className="form-group" style={{ marginBottom: '20px' }}>
          <label htmlFor='username'>Nombre de Usuario</label>
          <input type='text' id='username' {...register('username')} />
        </div>

        <input type='submit' value='Registrarse' className="submit-button" />
      </form>
    </div>
  );
}

export default FormularioRegistro;
