import { useEffect, useState } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './ApiUser.css'

function  ApiUser(){
//
const [valor, setValor] = useState([])
const navigat = useNavigate
useEffect(() => {
    axios.get("http://localhost:3000/DecoracaoBolas")
    .then(res => setValor(res.data))
    .catch(err => console.log(err))
})


    return(
        <>
        <div className="container "><br />
            <div className="text-end"><Link to="/criar" className="btn btn-primary">Adicionar +</Link></div>
            <table className="table" >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Detalhes</th>
                        <th>Foto</th>
                    </tr>
                </thead>
           
            <tbody>
                    {
                    valor.map((d, i) => (
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.nome}</td>
                        <td>R${d.valor},00</td>
                        <td>{d.detalhes}</td>
                        <td> <img src={d.img} className="foto" /> </td>
                        <td>
                            <Link to={`/update/${d.id}`} className="btn btn-sm btn-success">Atualiza</Link>
                            {/* <Link to="/delete" className="btn btn-sm ms-1 btn-danger">Excluir</Link> */}
                            <button onClick={e => hardSubmit(d.id)} className="btn btn-sm ms-2 btn-danger" >Excluir</button>
                        </td>
                    </tr>
                    ))
                    }

            </tbody>
            </table>
        </div>
        
        </>
    )
    function hardSubmit(id){
        const mensagem = window.confirm("Deseja realmente excluir esse registro?")
        if(mensagem){
            axios.delete("http://localhost:3000/DecoracaoBolas/"+id)
            .then(res =>{
                alert("Dados Excluidos com sucesso!")
                navigat("/")
            }).catch(err  => console.log(err))
        }

    }
}
export default ApiUser