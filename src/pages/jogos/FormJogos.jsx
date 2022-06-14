import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import JogoValidator from '../../validators/JogoValidator';
import Input from '../../components/forms/Input';
import JogoService from '../../services/games/JogoService';
import DesenvolvedoraService from '../../services/games/DesenvolvedoraService';
import EditoraService from '../../services/games/EditoraService';
import GeneroService from '../../services/games/GeneroService';
import PlataformaService from '../../services/games/PlataformaService';



const FormJogos = () => {

    const params = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const reference = { register, errors, validator: JogoValidator, setValue };

    const desenvolvedoras = DesenvolvedoraService.getAll()
    const editoras = EditoraService.getAll()
    const generos = GeneroService.getAll()
    const plataformas = PlataformaService.getAll()

    useEffect(() => {

        if (params.id) {
            const jogo = JogoService.get(params.id)
            for (let campo in jogo) {
                setValue(campo, jogo[campo])
            }
        }
    }, [])

    function salvar(dados) {

        if (params.id) {
            JogoService.update(params.id, dados)
        } else {
            JogoService.create(dados)
        }
        navigate('/jogos')
    }

    return (
        <div>
            <h1>Jogos</h1>
            <Form >
                <Input name="nome" label="Nome" reference={reference} />

                <Form.Label>Gênero: </Form.Label>
                <Form.Select {...register("genero_nome", JogoValidator.genero_nome)}>
                    <option></option>
                    {generos.map((item, i) => (
                        <option key={i} value={item.nome}>{item.nome}</option>
                    ))}
                </Form.Select>
                {errors.genero_nome && <span style={{color: 'red'}}>{errors.genero_nome.message}</span>}

                <br/>

                <Input name="dtLancamento" label="Dt. Lançamento" mask="99/99/9999" reference={reference} />

                <Form.Label>Plataforma: </Form.Label>
                <Form.Select {...register("plataforma_nome", JogoValidator.plataforma_nome)}>
                    <option></option>
                    {plataformas.map((item, i) => (
                        <option key={i} value={item.nome}>{item.nome}</option>
                    ))}
                </Form.Select>
                {errors.plataforma_nome && <span style={{color: 'red'}}>{errors.plataforma_nome.message}</span>}

                <br/>

                <Form.Label>Editora: </Form.Label>
                <Form.Select {...register("editora_nome", JogoValidator.editora_nome)}>
                    <option></option>
                    {editoras.map((item, i) => (
                        <option key={i} value={item.nome}>{item.nome}</option>
                    ))}
                </Form.Select>
                {errors.editora_nome && <span style={{color: 'red'}}>{errors.editora_nome.message}</span>}

                <br/>

                <Form.Label>Desenvolvedora: </Form.Label>
                <Form.Select {...register("desenvolvedora_nome", JogoValidator.desenvolvedora_nome)}>
                    <option></option>
                    {desenvolvedoras.map((item, i) => (
                        <option key={i} value={item.nome}>{item.nome}</option>
                    ))}
                </Form.Select>
                {errors.desenvolvedora_nome && <span style={{color: 'red'}}>{errors.desenvolvedora_nome.message}</span>}

                <br/>

                <Input name="classificacao" label="Classificação" reference={reference} />

                <div className="text-center" style={{ marginBottom: '2rem' }}>
                    <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
                    <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
                </div>
            </Form>
        </div>
    )
}

export default FormJogos