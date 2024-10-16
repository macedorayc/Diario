import { useState } from 'react';
import './index.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Inicio() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    async function entrar() {
        const usuario = {
            "nome": nome,
            "senha": senha
        };

        const url = `http://localhost:5010/entrar/`; 

        try {
            let resp = await axios.post(url, usuario);
            if (resp.data.erro) {
                alert(resp.data.erro);
            } else {
                localStorage.setItem('USUARIO', resp.data.token);
                navigate('/consultar');
            }
        } catch (error) {
            alert('Erro ao fazer login: ' + error.message);
        }
    }

    return (
        <div className='pagina-inicio'>
            <h1> Seja Bem-Vinda </h1>

            <div className='card'>
            <div className='campo'>
                <label htmlFor='nome'>Nome</label>
                <input
                    id='nome'
                    type='text'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label htmlFor='senha'>Senha</label>
                <input
                    id='senha'
                    type='password' 
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
            </div>

            <button onClick={entrar}>Entrar</button>

            </div>

        </div>
    );
}
