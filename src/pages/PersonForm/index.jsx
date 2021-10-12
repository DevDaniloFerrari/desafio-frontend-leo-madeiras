import React from 'react'
import { addPerson, editPerson } from '../../shared/services/people.service'
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';
import { NotificationManager } from 'react-notifications';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom'
import { getPerson } from '../../shared/services/people.service'
import { PageContainer, PageTitle } from '../../shared/styles/page.styles';
import { Form, Input, SubmitButton } from './style';

export default function PersonForm() {
    const { id } = useParams();
    const person = getPerson(id)

    const history = useHistory()
    const { register, handleSubmit, control, formState } = useForm({
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
        <PageContainer>
            <PageTitle>{id ? 'Editar Pessoa' : 'Adicionar Pessoa'}</PageTitle>
            <Form>
                <label>Nome</label>
                <Input id="nome" type="text" {...register("nome", { required: true })} errors={formState.errors.nome} />
                <label>CPF</label>
                <InputMask mask="999.999.999-99" defaultValue={control._formValues.cpf} {...register("cpf", { required: true })} errors={formState.errors?.cpf}>
                    {(inputProps) => <Input {...inputProps} type="text" disableUnderline />}
                </InputMask>
                <label>Telefone</label>
                <InputMask mask="(99) 9 9999-9999" defaultValue={control._formValues.telefone} {...register("telefone", { required: true })} errors={formState.errors?.telefone}>
                    {(inputProps) => <Input {...inputProps} type="tel" disableUnderline />}
                </InputMask>
                <label>Email</label>
                <Input type="email" {...register("email", { required: true })} errors={formState.errors?.email} />
                <SubmitButton onClick={handleSubmit(onSubmit)}>{id ? 'Editar' : 'Adicionar'}</SubmitButton>
            </Form>
        </PageContainer>
    )
}

