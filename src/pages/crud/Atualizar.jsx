import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from "axios"


function Atualizar(){
    //variaveis
    const {id} = useParams()
    const [data, setData] = useState([])
    const navigat = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3000/DecoracaoBolas"+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    function handSubmit(event){
        event.preventDefault()
        axios.put("http://localhost:3000/DecoracaoBolas"+id, data)
        .then(res =>{
            alert("Dados atualizados com sucesso!!")
            navigat("/")
        })
    }

    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
           
           <div className="w-50 border bg-light p-5">
            <form onSubmit={handSubmit} >
                <div >
                    <label htmlFor="name">Id</label><br />
                    <input type="text" name="id" disabled value={data.id} className="from-control" 
                    />
                </div>
                <div >
                    <label htmlFor="name">Nome</label><br />
                    <input type="text" name="name" value={data.nome} className="from-control" 
                    onChange={e => setData({...data, nome: e.target.value})} />
                </div><br />
                <div>
                    <label htmlFor="valor">Valor</label><br />
                    <input type="valor" name="valor" value={data.email} className="from-control"
                     onChange={e => setData({...data, valor: e.target.value})} />
                </div><br />
                <div>
                    <label htmlFor="detalhes">Detalhes</label><br />
                    <input type="detalhes" name="detalhes" value={data.detalhes} className="from-control"
                     onChange={e => setData({...data, detalhes: e.target.value})} />
                </div><br />
                <button className="btn btn-info" >Atualizar</button>
            </form>
            </div> 
           
           
        </div>
    )
}

export default Atualizar