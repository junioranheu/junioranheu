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
            <title>Anheu</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css" />

            <nav class="navbar is-light" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/">
                            {/* <img src="https://static.fabapp.com/113a71cdecd30fe3f73c4f59cdff0b1aa3a18326" width="28" height="28"></img> */}
                            <p>Versão 1.0.0</p>
                        </a>

                        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
                            onClick={expandirMenu} className={navbarBurger ? "navbar-burger is-active" : "navbar-burger"}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu" className={navbarMenu ? "navbar-menu is-active" : "navbar-menu"}>
                        <div class="navbar-start">
                            <a class="navbar-item" href="/">
                                Início
                            </a>

                            <a class="navbar-item" href="/sobre">
                                Sobre
                            </a>

                            <div class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-link">
                                    Mais
                                </a>

                                <div class="navbar-dropdown">
                                    <a class="navbar-item">
                                        Documentação
                                    </a>
                                    <a class="navbar-item">
                                        Contate-me
                                    </a>
                                    <a class="navbar-item">
                                        Reporte um problema
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="buttons">
                                    <a class="button is-primary">
                                        <strong>Cadastre-se</strong>
                                    </a>
                                    <a class="button is-light">
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