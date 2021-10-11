import React from 'react'
import { addPerson, editPerson } from '../../shared/services/people.service'
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';
import styled from 'styled-components';
import { NotificationManager } from 'react-notifications';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom'
import { getPerson } from '../../shared/services/people.service'

export default function PersonForm() {
    const { id } = useParams();
    const person = getPerson(id)

    const history = useHistory()
    const { register, handleSubmit, control } = useForm({
        defaultValues:
        {
            nome: person?.nome,
            cpf: person?.cpf,
            telefone: person?.telefone,
            email: person?.email
        }
    });


    const onSubmit = (data) => {
        if (id) {
            editPerson({ ...data, id: person.id })
            NotificationManager.success('Pessoa editada!', 'Sucesso', 3000)
        }
        else {
            addPerson(data)
            NotificationManager.success('Pessoa adicionada!', 'Sucesso', 3000)
        }
        history.push('/people')
    }

    return (
        <div>
            <h1>Adicionar Pessoa</h1>
            <Form>
                <label>Nome</label>
                <Input type="text" {...register("nome", { required: true })} />
                <label>CPF</label>
                <InputMask mask="999.999.999-99" value={control._formValues.cpf} {...register("cpf", { required: true })}>
                    {(inputProps) => <Input {...inputProps} type="text" disableUnderline />}
                </InputMask>
                <label>Telefone</label>
                <InputMask mask="(99) 9 9999-9999" value={control._formValues.telefone} {...register("telefone", { required: true })}>
                    {(inputProps) => <Input {...inputProps} type="tel" disableUnderline />}
                </InputMask>
                <label>Email</label>
                <Input type="email" {...register("email", { required: true })} />
                <SubmitButton onClick={handleSubmit(onSubmit)}>{id ? 'Editar' : 'Adicionar'}</SubmitButton>
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