import axios from "axios"
import { useEffect, useState } from "react"
import "./GetApi.css";


function GetApiDB(){
    //variaveis de estado
    const [valor, setValor] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/EnfeitesMeias")
        .then(res => setValor(res.data))
        .catch(err => console.log(err))
    }, [])
    return(
        
        <div className="col-md-9">
        <div className="panel-body">
          <div className="pull-right"></div>
        </div>
    
        <div className="row product-list">
          {valor.map((d, i) => (
            <div className="col-md-4" key={i}>
              <section className="panel">
                <div className="pro-img-box">
                  <img src={d.img} alt="" />
                  <a href="#" className="adtocart">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                </div>
                <div className="panel-body text-center">
                  <h4>
                    <a href="#" className="pro-title">
                      {d.nome}
                    </a>
                  </h4>
                  <p className="price">R${d.valor},00</p>
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>
    
        
    )
}

export default GetApiDB
//aqui


