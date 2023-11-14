// import styles from './Decoracao.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderSecDeco from '../../components/HeaderSec/HeaderSecDeco';

import GetApiDG from '../GetApiDG';
// import GetApiDB from '../GetApiDB';

function DecoracaoGuilandas ()
{
    return(
        <>
        <Header />
     <HeaderSecDeco/> 
       
     <div className="card-container"> 
        <GetApiDG />
      </div>
     
      <div className="spacer"></div>
        <Footer />
        </>
    )
}
export default DecoracaoGuilandas