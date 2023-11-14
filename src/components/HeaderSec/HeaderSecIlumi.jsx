import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeaderSec.css';

function HeaderSecIlumi() {
  const location = useLocation();

  return (
    <ul className="menu-secundario">
      <li><Link to="/Iluminacao" className={`cool-link ${location.pathname === '/Iluminacao' ? 'active' : ''}`}>Luzes de Natal</Link></li>
    </ul>
  );
}

export default HeaderSecIlumi;
