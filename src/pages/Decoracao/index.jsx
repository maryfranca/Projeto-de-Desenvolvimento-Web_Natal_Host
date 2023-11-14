import Header from '../../components/Header'
import Footer from '../../components/Footer'
import GetApiDB from '../GetApiDB';
import GetApiDG from '../GetApiDG';
import GetApiDP from '../GetApiDP';
import HeaderSecDeco from '../../components/HeaderSec/HeaderSecDeco';
import './PagesCSS.css';



function Decoracao ()
{
    return(
        <>
        <Header />
        <HeaderSecDeco/>
        
        {/* <div className={styles.spacer}></div> */}
        
        <div className="card-container"> 
        <GetApiDP/>
        </div>
        <div className="card-container"> 
        <GetApiDG/>
        </div>
        <div className="card-container"> 
        <GetApiDB/>
        </div>
        <div className="spacer"></div>
        <Footer />
        </>
    )
}
export default Decoracao