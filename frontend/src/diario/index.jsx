import './index.scss'
import { useEffect, useState } from 'react'
import moment from 'moment';
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';



export default function Diario() {
    const [token, setToken] = useState(null);


    const [data, setData] = useState('');
    const [conteudo, setConteudo] = useState('');


    const navigate = useNavigate()

    const { id } = useParams();

    async function salvar() {
        let segredo = {

            "data": data,
            "conteudo": conteudo
        }

        if (id == undefined) {

            const url = `http://localhost:5010/diario?x-access-token=${token}`;
            let resp = await axios.post(url, segredo);
            alert('Novo conteudo adicionado no Diario. Id: ' + resp.data.id);
        } else {

            const url = `http://localhost:5010/diario/${id}?x-access-token=${token}`;
            await axios.put(url, segredo);
            alert('Conteudo alterado no diario.');
        }
    }

    async function consultar(token) {
        if (id != undefined) {
            const url = `http://localhost:5010/diario/${id}?x-access-token=${token}`;

            let resp = await axios.put(url);
            let dados = resp.data;

            let datas = moment(dados.data).format('YYYY-MM-DD');
            setData(datas);
            setConteudo(dados.conteudo);

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
            <button className='but'><Link to={'/consultar'}>Voltar</Link></button>
            <h1>{id ? 'EDITAR' : 'DIARIO'}</h1>


            <div className='form'>

                <div>
                    <label>Dia:</label>
                    <input
                        type='date'
                        value={data}
                        onChange={e => setData(e.target.value)} />
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
