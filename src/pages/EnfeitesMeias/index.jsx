// import styles from './Decoracao.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderSecEnfeites from '../../components/HeaderSec/HeaderSecEnfeites.jsx'
import GetApiEM from '../GetApiEM';

function EnfeitesMeias ()
{
    return(
        <>
        <Header />
        <HeaderSecEnfeites/>
        <div className="card-container"> 
        <GetApiEM/>
        </div>
        <div className="spacer"></div>
        <Footer />
        </>
    )
}
export default EnfeitesMeias