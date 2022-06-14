import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PlataformaValidator from '../../validators/PlataformaValidator';
import Input from '../../components/forms/Input';
import PlataformaService from '../../services/games/PlataformaService';
import EditoraService from '../../services/games/EditoraService';

const FormPlataformas = () => {

    const params = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const reference = { register, errors, validator: PlataformaValidator, setValue };

    const editoras = EditoraService.getAll()

    useEffect(() => {

        if (params.id) {
            const plataforma = PlataformaService.get(params.id)
            for (let campo in plataforma) {
                setValue(campo, plataforma[campo])
            }
        }
    }, [])

    function salvar(dados) {

        if (params.id) {
            PlataformaService.update(params.id, dados)
        } else {
            PlataformaService.create(dados)
        }
        navigate('/plataformas')
    }

    return (
        <div>
            <h1>Plataformas</h1>
            <Form >
                <Input name="nome" label="Nome" reference={reference} />

                <Input name="dtLancamento" label="Dt. Lançamento" mask="99/99/9999" reference={reference} />

                <Form.Label>Editora: </Form.Label>
                <Form.Select {...register("editora_nome", PlataformaValidator.editora_nome)}>
                    <option></option>
                    {editoras.map((item, i) => (
                        <option key={i} value={item.nome}>{item.nome}</option>
                    ))}
                </Form.Select>
                {errors.editora_nome && <span style={{color: 'red'}}>{errors.editora_nome.message}</span>}

                <div className="text-center" style={{ marginBottom: '2rem' }}>
                    <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
                    <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
                </div>
            </Form>
        </div>
    )
}

export default FormPlataformas