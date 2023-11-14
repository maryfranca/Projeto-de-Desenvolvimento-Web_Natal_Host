// import styles from './Decoracao.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderSecDeco from '../../components/HeaderSec/HeaderSecDeco';
import GetApiDP from '../GetApiDP';


function DecoracaoPresepio ()
{
    return(
        <>
        <Header />
     <HeaderSecDeco/> 
     <div className="card-container"> 
        <GetApiDP />
      </div>
     
      <div className="spacer"></div>
        <Footer />
        </>
    )
}
export default DecoracaoPresepio