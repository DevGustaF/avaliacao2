import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import PlataformaService from '../../services/games/PlataformaService';
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import Swal from 'sweetalert2';

const PlataformasLista = () => {

    const [plataformas, setPlataformas] = useState([])

    useEffect(() => {
        setPlataformas(PlataformaService.getAll())
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
                PlataformaService.delete(id)
                setPlataformas(PlataformaService.getAll())
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
            <h1>Plataformas</h1>

            <Link className='btn btn-info mb-3' to={'/plataformas/create'}><FaPlus /> Novo</Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Dt. Lançamento</th>
                        <th>Editora/Produtora</th>
                    </tr>
                </thead>
                <tbody>
                    {plataformas.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link to={'/plataformas/' + i}><BsPencilFill /></Link>{' '}
                                <BsTrash onClick={() => apagar(i)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.dtLancamento}</td>
                            <td>{item.editora_nome}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>



        </div>
    )
}

export default PlataformasLista