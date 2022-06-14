import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import DesenvolvedoraService from '../../services/games/DesenvolvedoraService';
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import Swal from 'sweetalert2';

const DesenvolvedorasLista = () => {

    const [desenvolvedoras, setDesenvolvedoras] = useState([])

    useEffect(() => {
        setDesenvolvedoras(DesenvolvedoraService.getAll())
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
                DesenvolvedoraService.delete(id)
                setDesenvolvedoras(DesenvolvedoraService.getAll())
                Swal.fire(
                    'Deletado',
                    'Seu registro foi deletado.',
                    'success'
                )
            }
        })
    }

    return (
        <div>
            <h1>Desenvolvedoras</h1>

            <Link className='btn btn-info mb-3' to={'/desenvolvedoras/create'}><FaPlus /> Novo</Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Presidente</th>
                        <th>Dt. Fundação</th>
                    </tr>
                </thead>
                <tbody>
                    {desenvolvedoras.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link to={'/desenvolvedoras/' + i}><BsPencilFill /></Link>{' '}
                                <BsTrash onClick={() => apagar(i)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.presidente}</td>
                            <td>{item.dtFundacao}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>



        </div>
    )
}

export default DesenvolvedorasLista