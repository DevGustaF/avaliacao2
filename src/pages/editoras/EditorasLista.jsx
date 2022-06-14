import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import EditoraService from '../../services/games/EditoraService';
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import Swal from 'sweetalert2';

const EditorasLista = () => {

    const [editoras, setEditoras] = useState([])

    useEffect(() => {
        setEditoras(EditoraService.getAll())
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
                EditoraService.delete(id)
                setEditoras(EditoraService.getAll())
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
            <h1>Editoras</h1>

            <Link className='btn btn-info mb-3' to={'/editoras/create'}><FaPlus /> Novo</Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>CEO</th>
                        <th>Dt. Fundação</th>
                    </tr>
                </thead>
                <tbody>
                    {editoras.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link to={'/editoras/' + i}><BsPencilFill /></Link>{' '}
                                <BsTrash onClick={() => apagar(i)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.ceo}</td>
                            <td>{item.dtFundacao}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>



        </div>
    )
}

export default EditorasLista