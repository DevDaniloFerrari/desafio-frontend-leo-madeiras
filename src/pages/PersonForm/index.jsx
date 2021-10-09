import React from 'react'
import { addPerson } from '../../shared/services/people.service'
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';

export default function PersonForm() {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        addPerson(data)
        reset()
    }

    return (
        <div>
            <input type="text" {...register("nome", { required: true })} />
            <InputMask mask="999.999.999-99" {...register("cpf", { required: true })}>
                {(inputProps) => <input {...inputProps} type="text" disableUnderline />}
            </InputMask>
            <InputMask mask="(99) 9 9999-9999" {...register("telefone", { required: true })}>
                {(inputProps) => <input {...inputProps} type="tel" disableUnderline />}
            </InputMask>
            <input type="email" {...register("email", { required: true })} />
            <button onClick={handleSubmit(onSubmit)}>adicionar</button>
        </div>
    )
}