"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginModel = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginModel = z.infer<typeof loginModel>;

function FormularioInicioEmpresas() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginModel>({ resolver: zodResolver(loginModel) });

  const onSubmit = async (data: LoginModel) => {
    try {
      const ress = await fetch("http://localhost:8000/postulants", {
        method: "POST", 
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (ress.ok) {
        console.log("Inicio de sesión exitoso");
      } else {
        const errorData = await ress.json();
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <div style={{ backgroundColor: '#F5D7AE', padding: '20px' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Escribe el correo electrónico de tu empresa</label>
          <input type="email" id="email" {...register('email')} />
        </div>
        <br/>
        <div>
          <label htmlFor="contra">Escribe la contraseña de tu empresa</label>
          <input type="password" id="contra" {...register('password')} />
        </div>
        <br/>
        <input type="submit" value="Iniciar sesión" />
      </form>
    </div>
  );
}

export default FormularioInicioEmpresas;
