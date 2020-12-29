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
    return (
        <div>
            <title>Anheu</title>

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css" />

            <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        {/* <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28"></img> */}
                        <p>Anheu</p>
                    </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
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

            <button class="button is-dark is-outlined mt-2"
                onClick={adicionarContador}>Adicionar</button>
        </div>
    );
}

export default Home;