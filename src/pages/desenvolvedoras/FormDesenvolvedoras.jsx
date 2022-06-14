import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import DesenvolvedoraValidator from '../../validators/DesenvolvedoraValidator';
import Input from '../../components/forms/Input';
import DesenvolvedoraService from '../../services/games/DesenvolvedoraService';
import { mask } from 'remask';

const FormDesenvolvedoras = () => {

    const params = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const reference = { register, errors, validator: DesenvolvedoraValidator, setValue };

    useEffect(() => {

        if (params.id) {
            const desenvolvedora = DesenvolvedoraService.get(params.id)
            for (let campo in desenvolvedora) {
                setValue(campo, desenvolvedora[campo])
            }
        }
    }, [])

    function salvar(dados) {

        if (params.id) {
            DesenvolvedoraService.update(params.id, dados)
        } else {
            DesenvolvedoraService.create(dados)
        }
        navigate('/desenvolvedoras')
    }

    return (
        <div>
            <h1>Desenvolvedoras</h1>
            <Form >
                <Input name="nome" label="Nome" reference={reference} />
                <Input name="presidente" label="Presidente" reference={reference} />
                <Input name="dtFundacao" label="Dt. Fundação" mask="99/99/9999" reference={reference} />
                <div className="text-center" style={{ marginBottom: '2rem' }}>
                    <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
                    <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
                </div>
            </Form>
        </div>
    )
}

export default FormDesenvolvedoras