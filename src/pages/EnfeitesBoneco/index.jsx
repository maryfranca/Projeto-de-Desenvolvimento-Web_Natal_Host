// import styles from './Decoracao.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderSecEnfeites from '../../components/HeaderSec/HeaderSecEnfeites.jsx'
import GetApiEB from '../GetApiEB';

function EnfeitesBoneco ()
{
    return(
        <>
        <Header />
        <HeaderSecEnfeites/>
        <div className="card-container"> 
        <GetApiEB/>
        </div>
        <div className="spacer"></div>
        <Footer />
        </>
    )
}
export default EnfeitesBoneco