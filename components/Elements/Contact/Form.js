import { useState } from "react";
import {useForm} from 'react-hook-form';



export default function Form() {
      const {register, handleSubmit, formState: {errors, isSubmitted} } = useForm();
      const [formSuccess, setFormSuccess] = useState(false)
      const [isLoading, setIsLoading] = useState(false)
      
      const onSubmit = data => {
        console.log(data)
     }

     
    return (
        <>
            {!formSuccess && <form onSubmit={handleSubmit(onSubmit)}>
                <label>Nome: *</label>
                <input className={`${errors.name && "invalid"}`}
                    {...register("name", {
                        required: true,
                        minLength: 4,
                        pattern: /^[A-Za-z0-9 ]+$/i
                    })}
                />
                {errors?.name?.type === "required" && <p className="errorMsg">Este campo é obrigatório.</p>}
                {errors?.name?.type === "minLength" && (<p className="errorMsg">O minimo é de 4 caracteres.</p>)}
                {errors?.name?.type === "pattern" && (<p className="errorMsg">Apenas caracteres alfabéticos.</p>)}

                <label>E-mail: *</label>
                <input className={`${errors.email && "invalid"}`}
                    {...register("email", {
                        required: true,
                        pattern: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
                    })}
                />
                {errors?.email?.type === "required" && <p className="errorMsg">Este campo é obrigatório.</p>}
                {errors?.email?.type === "pattern" && (<p className="errorMsg">Insira um E-mail válido.</p>)}

                <label>Mensagem: *</label>
                <textarea className={`${errors.message && "invalid"}`}
                    {...register("message", {
                        required: true,
                        maxLength: 2048
                    })}
                />

                {errors?.message?.type === "required" && <p className="errorMsg">Este campo é obrigatório.</p>}
                {errors?.message?.type === "maxLength" && (<p className="errorMsg">O limite máximo é de 2048 caracteres.</p>)}

                <button className="btn-contact" type="submit" disabled={isLoading} > {!isLoading ? "Enviar" : "Enviado..."}</button>
                {isSubmitted && Object.keys(errors).length !== 0 && <p className="errorMsg mt-5">Não foi possível prosseguir com o envio, pois o formulário possui erros. Corrija os erros e tente novamente, por favor. </p>}
            </form>}
        </>
    )
}