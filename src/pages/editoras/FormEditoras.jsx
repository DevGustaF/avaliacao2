import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import EditoraValidator from '../../validators/EditoraValidator';
import Input from '../../components/forms/Input';
import EditoraService from '../../services/games/EditoraService';

const FormEditoras = () => {

    const params = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const reference = { register, errors, validator: EditoraValidator, setValue };

    useEffect(() => {

        if (params.id) {
            const editora = EditoraService.get(params.id)
            for (let campo in editora) {
                setValue(campo, editora[campo])
            }
        }
    }, [])

    function salvar(dados) {

        if (params.id) {
            EditoraService.update(params.id, dados)
        } else {
            EditoraService.create(dados)
        }
        navigate('/editoras')
    }

    return (
        <div>
            <h1>Editoras</h1>
            <Form >
                <Input name="nome" label="Nome" reference={reference} />
                <Input name="ceo" label="CEO" reference={reference} />
                <Input name="dtFundacao" label="Dt. Fundação" mask="99/99/9999" reference={reference} />
                <div className="text-center" style={{ marginBottom: '2rem' }}>
                    <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
                    <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
                </div>
            </Form>
        </div>
    )
}

export default FormEditoras