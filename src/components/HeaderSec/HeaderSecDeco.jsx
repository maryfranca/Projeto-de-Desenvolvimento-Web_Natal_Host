import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './HeaderSec.css';

function HeaderSecDeco() {
  const location = useLocation();

  return (
    <ul className="menu-secundario">
      <li><Link to="/Decoracao" className={`cool-link ${location.pathname === '/Decoracao' ? 'active' : ''}`}>Todos</Link></li>
      <li><Link to="/Decoracao/DecoracaoBolas" className={`cool-link ${location.pathname === '/Decoracao/DecoracaoBolas' ? 'active' : ''}`}>Bolas</Link></li>
      <li><Link to="/Decoracao/DecoracaoGuilandas" className={`cool-link ${location.pathname === '/Decoracao/DecoracaoGuilandas' ? 'active' : ''}`}>Guilandas</Link></li>
      <li><Link to="/Decoracao/DecoracaoPresepio" className={`cool-link ${location.pathname === '/Decoracao/DecoracaoPresepio' ? 'active' : ''}`}>Presepio</Link></li>
    </ul>
  );
}

export default HeaderSecDeco;
