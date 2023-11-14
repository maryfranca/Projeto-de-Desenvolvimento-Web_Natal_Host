import Header from "../../components/Header";
import Footer from "../../components/Footer";
// 
import GetApiDB from "../GetApiDB";
import HeaderSecDeco from '../../components/HeaderSec/HeaderSecDeco';

function DecoracaoBolas() {
  return (
    <>
      <Header />
      <HeaderSecDeco />
      <div className="card-container"> 
        <GetApiDB />
      </div>
      <div className="spacer"></div>
      <Footer />
    </>
  );
}
export default DecoracaoBolas;
