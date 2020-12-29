import { Fragment, useState } from "react";

function Home() {
    return (
        <Fragment>
            <Navbar />
            <Body />
        </Fragment>
    );
}

function Navbar() {
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
                            <img src="https://static.fabapp.com/113a71cdecd30fe3f73c4f59cdff0b1aa3a18326" width="28" height="28"></img>
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
                            <a class="navbar-item">
                                Início
                            </a>

                            <a class="navbar-item">
                                <a href="/sobre">Sobre</a>
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

function Body() {
    return (
        <section class="section">
            <div class="container has-text-centered">
                <div class="mt-4">
                    <h1 class="title">
                        Olá, mundo
                    </h1>
                    <p class="subtitle">
                        Esse é meu primeiro site com <strong>React JS</strong>
                    </p>
                </div>

                <div>
                    <Contador />
                </div>

                <div class="mt-6">
                    <div class="columns">
                        <div class="column" style={{ backgroundColor: "pink" }}>
                            Coluna 1 de 3
                        </div>
                        <div class="column" style={{ backgroundColor: "lightBlue" }}>
                            Coluna 2 de 3
                        </div>
                        <div class="column" style={{ backgroundColor: "yellow" }}>
                            Coluna 3 de 3
                        </div>
                    </div>
                </div>

                <p class="subtitle mt-6">
                    /npm run dev/
                </p>

                <div class="field is-grouped">
                    <p class="control is-expanded">
                        <input class="input is-primary" type="text" placeholder="Digite sua mensagem aqui..."></input>
                    </p>
                    <p class="control">
                        <a class="button is-primary">
                            Enviar
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <hr />

            <div>
                <p class="has-text-weight-bold">{contador}</p>
            </div>

            <button class="button is-primary is-outlined mt-2"
                onClick={adicionarContador}>Adicionar</button>
        </div>
    );
}

export default Home;