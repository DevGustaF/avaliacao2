import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import GeneroService from '../../services/games/GeneroService';
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import Swal from 'sweetalert2';

const GenerosLista = () => {

    const [generos, setGeneros] = useState([])

    useEffect(() => {
        setGeneros(GeneroService.getAll())
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
                GeneroService.delete(id)
                setGeneros(GeneroService.getAll())
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
                <h1>Gêneros</h1>

                <Link className='btn btn-info mb-3' to={'/generos/create'}><FaPlus /> Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Categorias</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generos.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={'/generos/' + i}><BsPencilFill /></Link>{' '}
                                    <BsTrash onClick={() => apagar(i)} className='text-danger' />
                                </td>
                                <td>{item.nome}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>



            </div>
        )
    }

    export default GenerosLista