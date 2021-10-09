import React from 'react'
import { addPerson } from '../../shared/services/people.service'
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';
import styled from 'styled-components';
import { NotificationManager } from 'react-notifications';

export default function PersonForm() {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        addPerson(data)
        NotificationManager.success('Pessoa adicionada!', 'Sucesso', 3000)
        reset()
    }

    return (
        <div>
            <h1>Adicionar Pessoa</h1>
            <Form>
                <label>Nome</label>
                <Input type="text" {...register("nome", { required: true })} />
                <label>CPF</label>
                <InputMask mask="999.999.999-99" {...register("cpf", { required: true })}>
                    {(inputProps) => <Input {...inputProps} type="text" disableUnderline />}
                </InputMask>
                <label>Telefone</label>
                <InputMask mask="(99) 9 9999-9999" {...register("telefone", { required: true })}>
                    {(inputProps) => <Input {...inputProps} type="tel" disableUnderline />}
                </InputMask>
                <label>Email</label>
                <Input type="email" {...register("email", { required: true })} />
                <SubmitButton onClick={handleSubmit(onSubmit)}>Adicionar</SubmitButton>
            </Form>
        </div>
    )
}

const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    width: 700px;
    height: 300px;
    border-radius: 20px;
    padding: 20px;
`

const Input = styled.input`
    height: 20px;
    width: 90%;
`

const SubmitButton = styled.button`
    width: 30%;
    height: 30px;
    align-self: flex-end;
    background: #18fd64;
    border: none;
    cursor: pointer;
`