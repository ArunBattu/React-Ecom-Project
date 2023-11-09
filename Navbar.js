import React from 'react';
import './App.css'

function Navbar() {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid"style={{color:"black"}}>
                    <p className="navbar-brand">Jio Digital</p>
                    <form className="d-flex" role="search">
                            <button className="btn btn-outline-success" type="submit">Cart</button>
                    </form>

                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar