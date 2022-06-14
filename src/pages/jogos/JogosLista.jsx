import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import JogoService from '../../services/games/JogoService';
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import Swal from 'sweetalert2'

const JogosLista = () => {

    const [jogos, setJogos] = useState([])

    useEffect(() => {
        setJogos(JogoService.getAll())
    }, [])

    function apagar(id) {

        Swal.fire({
            title: 'Deseja excluir o registro?',
            icon: 'question',
            iconHtml: '?',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
            showCancelButton: true,
            showCloseButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                JogoService.delete(id)
                setJogos(JogoService.getAll())
              Swal.fire(
                'Deletado',
                'Seu registro foi deletado.',
                'success'
              )
            }
        })

       /* if (window.confirm('Deseja realmente excluir o registro?')) {
            JogoService.delete(id)
            setJogos(JogoService.getAll())
        }*/
    }

    return (
        <div>
            <h1>Jogos</h1>

            <Link className='btn btn-info mb-3' to={'/jogos/create'}><FaPlus /> Novo</Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Gênero</th>
                        <th>Dt. Lançamento</th>
                        <th>Plataforma</th>
                        <th>Editora</th>
                        <th>Desenvolvedora</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    {jogos.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link to={'/jogos/' + i}><BsPencilFill /></Link>{' '}
                                <BsTrash onClick={() => apagar(i)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.genero_nome}</td>
                            <td>{item.dtLancamento}</td>
                            <td>{item.plataforma_nome}</td>
                            <td>{item.editora_nome}</td>
                            <td>{item.desenvolvedora_nome}</td>
                            <td>+{item.classificacao}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>



        </div>
    )
}

export default JogosLista