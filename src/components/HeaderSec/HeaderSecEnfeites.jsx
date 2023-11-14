import { Link, useLocation } from 'react-router-dom';
import './HeaderSec.css';

function HeaderSecEnfeites() {
  const location = useLocation();

  return (
    <ul className="menu-secundario">
      <li><Link to="/enfeites" className={`cool-link ${location.pathname === '/enfeites' ? 'active' : ''}`}>Todos</Link></li>
      <li><Link to="/enfeites/EnfeitesArtesanato" className={`cool-link ${location.pathname === '/enfeites/EnfeitesArtesanato' ? 'active' : ''}`}>Artesanato</Link></li>
      <li><Link to="/enfeites/EnfeitesBoneco" className={`cool-link ${location.pathname === '/enfeites/EnfeitesBoneco' ? 'active' : ''}`}>Boneco</Link></li>
      <li><Link to="/enfeites/EnfeitesMeias" className={`cool-link ${location.pathname === '/enfeites/EnfeitesMeias' ? 'active' : ''}`}>Meias</Link></li>
    </ul>
  );
}

export default HeaderSecEnfeites;
