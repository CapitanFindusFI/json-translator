import React from 'react';
import './Header.css';
import logo from '../../logo.svg';

function Header() {
    return (
        <header className="w-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img className={'w-100'} src={logo} alt={'json-translator'}/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1>JSON Translator</h1>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;