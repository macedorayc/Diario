import './index.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';



export default function Consultar() {
    const [token, setToken] = useState(null);
    const [diario, setDiario] = useState([]);


    const navigate = useNavigate()


    async function buscar() {
        const url = `http://localhost:5010/diario?x-access-token=${token}`;
        let resp = await axios.get(url);
        setDiario(resp.data);
    }

    async function excluir(id) {
        const url = `http://localhost:5010/diario/${id}?x-access-token=${token}`;
        await axios.delete(url)

        await buscar()
    }

    async function sair() {
        localStorage.setItem('USUARIO', null)
        navigate('/')
    }
    

    useEffect(() => {
        let token = localStorage.getItem('USUARIO')
        setToken(token)

        if (token == 'null') {
            navigate('/')
        }
    }, [])
    
    return (
        <div className='pagina-consulta'>
            <h2>Bem-vindo {token?.diario}</h2>
            <button onClick={sair}>Sair</button>
            <h1> CONSULTAR </h1>

            <button onClick={buscar}>Buscar</button>
            <button><Link to={'/conteudo'} className='butom'>Diario</Link></button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Dia</th>
                        <th>Conteudo</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {diario.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{new Date(item.dia).toLocaleDateString()}</td>
                            <td>{item.conteudo}</td>
                            <td>
                            <Link to={`/conteudo/${item.id}`}>Alterar</Link>
                                <Link onClick={() => excluir(item.id)}>Deletar</Link>
                            </td>
                        </tr>
                    )}
                </tbody>

            </table>

           
        </div>
    )
}
