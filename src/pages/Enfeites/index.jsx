// import styles from './Decoracao.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import HeaderSecEnfeites from '../../components/HeaderSecEnfeites/index.jsx'
import GetApiEA from '../GetApiEA.jsx';
import GetApiEB from '../GetApiEB';
import GetApiEM from '../GetApiEM';
import HeaderSecEnfeites from '../../components/HeaderSec/HeaderSecEnfeites.jsx'



function Enfeites ()
{
    return(
        <>
        <Header />
        <HeaderSecEnfeites/>
        <div className="card-container"> 
        <GetApiEA/>
        </div>
        <div className="card-container">
        <GetApiEB/>
        </div>
        <div className="card-container">
        <GetApiEM/> 
        </div>
      
     
      <div className="spacer"></div>
        <Footer />
        </>
    )
}
export default Enfeites