// import styles from './Decoracao.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderSecEnfeites from '../../components/HeaderSec/HeaderSecEnfeites.jsx'
import GetApiEA from '../GetApiEA.jsx';

function EnfeitesArtesanato ()
{
    return(
        <>
        <Header />
        <HeaderSecEnfeites/>
        <div className="card-container"> 
        <GetApiEA/>
        </div>
        <div className="spacer"></div>
        <Footer />
        
        </>
    )
}
export default EnfeitesArtesanato