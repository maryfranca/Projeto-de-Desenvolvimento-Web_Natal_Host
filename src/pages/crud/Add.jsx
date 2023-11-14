import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"


function Add()
{
    const [inputData, setInputData] = useState({nome:'',valor:'',detalhes:'',img:''})
    const navigat = useNavigate()

    function HandSubmit(event){
        event.preventDefault()
        axios.post("http://localhost:3000/DecoracaoBolas",inputData)
        .then(res =>{
            alert("Dados inseridos com sucesso")
            navigat('/')
        })
        .catch(err => console.log(err))
    }

    return(
        
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
           
           <div className="w-50 border bg-light p-5">
            <form onSubmit={HandSubmit}>
            <div >
                    <label htmlFor="name">Nome</label><br />
                    <input type="text" name="name" className="from-control" 
                    onChange={e=>setInputData({...inputData, nome: e.target.value})} />
                </div><br />
                <div>
                    <label htmlFor="valor">Valor</label><br />
                    <input type="valor" name="valor" className="from-control"
                    onChange={e=>setInputData({...inputData, valor: e.target.value})} />
                </div><br />
                <div>
                    <label htmlFor="detalhes">Detalhes</label><br />
                    <input type="detalhes" name="detalhes" className="from-control"
                    onChange={e=>setInputData({...inputData, detalhes: e.target.value})} />
                </div><br />
                <div>
                    <label htmlFor="img">Imagem</label><br />
                    <input type="img" name="img" className="from-control"
                    onChange={e=>setInputData({...inputData, img: e.target.value})} />
                </div><br />



                <button className="btn btn-info" >Enviar</button>
            </form>
            </div> 
           
           
        </div>
    )
    
}
export default Add