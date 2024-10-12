import './index.scss'
import { useEffect, useState } from 'react'
import moment from 'moment';
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';



export default function Diario() {
    const [token, setToken] = useState(null);

    const [nome, setNome] = useState('');
    const [dia, setDia] = useState('');
    const [conteudo, setConteudo] = useState('');
    

    const navigate = useNavigate()

    const { id } = useParams();

    async function salvar() {
        let paramCorpo = {
            "nome": nome,
            "dia": dia,
            "conteudo": conteudo
        }
        
        if (id == undefined) {
          
            const url = `http://localhost:5010/diario?x-access-token=${token}`;
            let resp = await axios.post(url, paramCorpo);
            alert('Novo conteudo adicionado no Diario. Id: ' + resp.data.novoId);
        } else {
           
            const url = `http://localhost:5010/diario/${id}?x-access-token=${token}`;
            let resp = await axios.put(url, paramCorpo);
            alert('Conteudo alterado no diario.');
        }
    }

    async function consultar(token) {
        if (id != undefined) {
            const url = `http://localhost:5010/diario/${id}?x-access-token=${token}`;
            let resp = await axios.get(url);
            let dados = resp.data;

            let data = moment(dados.dia).format('YYYY-MM-DD')
            console.log(data)

            setNome(dados.nome)
            setDia(dados.dia)
        }
    }

    useEffect(() => {
        let token = localStorage.getItem('USUARIO')
        setToken(token)

        if (token == 'null') {
            navigate('/')
        }

        consultar(token);
    }, [])

    return (
        <div className='pagina-diario'>
            <button className='but'><Link to={'/diario'}>Voltar</Link></button>
            <h1>{id ? 'EDITAR' : 'DIARIO'}</h1>


            <div className='form'>
                <div>
                    <label>Nome:</label>
                    <input
                        type='text'
                        value={nome}
                        onChange={e => setNome(e.target.value)} />
                </div>
                <div>
                    <label>Dia:</label>
                    <input
                        type='date'
                        value={dia}
                        onChange={e => setDia(e.target.value)} />
                </div>
                <div>
                    <label>Conteudo:</label>
                    <input className='cont'
                        type='text'
                        value={conteudo}
                        onChange={e => setConteudo(e.target.value)} />
                </div>
            </div>
            <button onClick={salvar}> SALVAR </button>

        </div>
    )
}
