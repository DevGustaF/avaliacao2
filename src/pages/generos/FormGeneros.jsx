import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import GeneroValidator from '../../validators/GeneroValidator';
import Input from '../../components/forms/Input';
import GeneroService from '../../services/games/GeneroService';

const FormGeneros = () => {

    const params = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const reference = { register, errors, validator: GeneroValidator, setValue };

    useEffect(() => {

        if (params.id) {
            const genero = GeneroService.get(params.id)
            for (let campo in genero) {
                setValue(campo, genero[campo])
            }
        }
    }, [])

    function salvar(dados) {

        if (params.id) {
            GeneroService.update(params.id, dados)
        } else {
            GeneroService.create(dados)
        }
        navigate('/generos')
    }

    return (
        <div>
            <h1>Gêneros</h1>
            <Form >
                <Input name="nome" label="Nome" reference={reference} />
                <div className="text-center" style={{ marginBottom: '2rem' }}>
                    <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
                    <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
                </div>
            </Form>
        </div>
    )
}


export default FormGeneros