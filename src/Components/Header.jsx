import { Logo, PageLinks} from "./Components";
import { contacts, navLinks } from "../Data/ComponentData";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    let [toggleValue, setToggle] = useState(false);
    
    const handleToggle = () => setToggle(toggleValue =! toggleValue)

    return (
       <>
            <header className='navbar container bg-light visible d-sm-flex d-none'>
                    {contacts.map((contact, index) => 
                        (index < 2) 
                            ? <a href={contact.href} className='consult tel mb-2 mt-3'>
                            <div className='glow-icon alert-success'>
                                <i className='fa fa-phone text-success'></i>
                            </div>
                            <div className='content'>
                                <p> {contact.title} </p>
                                <p> {contact.content} </p>
                            </div>
                        </a>: null
                    )}

                <a href='tel' className='rounded-button alert-success position-absolute invisible  md-visible'>
                    Free Consultation
                </a>
              
            </header>

            <nav className='navbar container sticky-top app-nav border-top bg-white justify-content-between p-2 pt-3 pb-3'>
                <Logo />

                <aside 
                    className='toggle-nav' 
                    style={{
                        animationName: (toggleValue ? 'slide-in': 'slide-out'),
                        animationFillMode: 'forwards'
                    }} 
                    id="header">
                    <>
                    <button 
                            className="btn toggle-btn p-3"
                            onClick={handleToggle}>
                            <i className={"fa-lg btn-close"}></i>
                        </button>
                        <PageLinks 
                            links = {navLinks} 
                            onClick={handleToggle} />
                   </>

                    {window.screen.width < 600 && <div className='d-flex flex-column justify-content-end h-100'>
                        {contacts.map((contact, index) => 
                                (index < 2) 
                                    ? <a href={contact.href} className='consult tel mb-2 mt-3'>
                                    <div className='glow-icon alert-success'>
                                        <i className='fa fa-phone text-success'></i>
                                    </div>
                                    <div className='content'>
                                        <p> {contact.title} </p>
                                        <p> {contact.content} </p>
                                    </div>
                                </a>: null
                            )}

                        <Link href='/' className='rounded-button alert-success position-absolut mt-3'>
                            Free Consultation
                        </Link>
                    </div>}
                </aside>

                <button 
                    className="btn toggle-btn"
                    onClick={handleToggle}
                >
                    <i className={"fa fa-lg fa-bars"}></i> 
                </button>
            </nav>

       </>
    ); 
}


export default Header;

