import { useState } from "react";

function NavbarPika() {
    const [navbarBurger, setNavbarBurger] = useState(false);
    const [navbarMenu, setNavbarMenu] = useState(false);

    function expandirMenu() {
        // alert('Status será alterado para: ' + !navbarBurger);
        setNavbarBurger(!navbarBurger);
        setNavbarMenu(!navbarMenu);
    }

    return (
        <div>
            {/* <title>Anheu</title> */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

            <nav className="navbar is-light" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">
                            {/* <img src="https://static.fabapp.com/113a71cdecd30fe3f73c4f59cdff0b1aa3a18326" width="28" height="28"></img> */}
                            <p>Versão 1.0.0</p>
                        </a>

                        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
                            onClick={expandirMenu} className={navbarBurger ? "navbar-burger is-active" : "navbar-burger"}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu" className={navbarMenu ? "navbar-menu is-active" : "navbar-menu"}>
                        <div className="navbar-start">
                            <a className="navbar-item" href="/">
                                Início
                            </a>

                            <a className="navbar-item" href="/chat">
                                Chat
                            </a>

                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                    Mais
                                </a>

                                <div className="navbar-dropdown">
                                    <a className="navbar-item" href="/teste">
                                        Teste
                                    </a>
                                    <a className="navbar-item">
                                        Contate-me
                                    </a>
                                    <a className="navbar-item">
                                        Reporte um problema
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a className="button is-primary">
                                        <strong>Cadastre-se</strong>
                                    </a>
                                    <a className="button is-light">
                                        Entrar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarPika;