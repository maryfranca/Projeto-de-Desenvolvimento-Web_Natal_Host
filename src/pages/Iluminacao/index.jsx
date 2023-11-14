import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeaderSecIlumi from '../../components/HeaderSec/HeaderSecIlumi.jsx'
// Tem que importar o link
import GetApiIP from '../GetApiIP';


function Iluminacao ()
{
    return(
        <>
        <Header />
        <HeaderSecIlumi />
        <div className="card-container">
                <GetApiIP />
            </div>

            <div className="spacer"></div>
        <Footer />
        </>
    )
}
export default Iluminacao