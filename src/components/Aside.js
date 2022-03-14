import React from 'react';
import { NavLink} from 'react-router-dom';
import Logo from '../media/logo_web_BN.png'
import Isotipo from '../media/isotipo2.png'
const Aside = ({asideStatus,changeTituloHeader}) => {
    
  return (
    <>
        <aside>
            <div className={asideStatus === true ? "close-menu":"logo expand-menu"}><figcaption><img src={Logo}/></figcaption></div>
            <div className="isotipo"><figcaption><img src={Isotipo} alt=""/></figcaption></div>
            <nav className="sidebar-nav">
                <ul>
                    <li  className={asideStatus === true ? "close-menu":"menu-title expand-menu"}>--Menu</li>
                    <li className="item-menu"><NavLink to='/' onClick={()=>changeTituloHeader('Dashboard')}><div className={asideStatus === true ? "item-close":"item"}><i className="fa-solid fa-desktop" title="Dashboard"></i><span className={asideStatus === true ? "close-menu":"logo expand-menu"}>Dashboard</span></div> </NavLink></li>
                    <li className="item-menu"><NavLink to='/agenda' onClick={()=>changeTituloHeader('Agenda')}><div className={asideStatus === true ? "item-close":"item"} ><i className="fa-solid fa-address-book" title="Agenda"></i><span className={asideStatus === true ? "close-menu":"logo expand-menu"}>Agenda</span></div></NavLink></li>
                    <li className="item-menu"><NavLink to='/casos' onClick={()=>changeTituloHeader('Mis Casos')}><div className={asideStatus === true ? "item-close":"item"}><i className="fa-solid fa-folder" title="Documentacion"></i><span className={asideStatus === true ? "close-menu":"logo expand-menu"}>Mis Casos</span></div></NavLink></li>
                    <li className="item-menu"><NavLink to='/mailbox' onClick={()=>changeTituloHeader('Mailbox')}><div className={asideStatus === true ? "item-close":"item"}><i className="fa-solid fa-envelope" title="Mailbox"></i><span className={asideStatus === true ? "close-menu":"logo expand-menu"}>Mailbox</span></div></NavLink></li>

                </ul>
            </nav>
        </aside>
        
    </>
  )
}

export default Aside