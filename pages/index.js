import { useState } from "react";

function Home() {
    return (
        <section>
            <title>Anheu</title>
            
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossOrigin="anonymous"
            />

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="">Anheu</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="">Início</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Teste 1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Teste 2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Teste 3</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="container">
                <h1 class="text-center mt-5">Olá mundo</h1>

                <Contador />

                <div class="mt-5 text-center">
                    <div class="row">
                        <div class="col-sm" style={{ backgroundColor: "pink" }}>
                            Coluna 1 de 3
                        </div>
                        <div class="col-sm" style={{ backgroundColor: "lightBlue" }}>
                            Coluna 2 de 3
                        </div>
                        <div class="col-sm" style={{ backgroundColor: "yellow" }}>
                            Coluna 3 de 3
                        </div>
                    </div>
                </div>

                <h6 class="text-center mt-5">/npm run dev/</h6>
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
        <div class="mt-5 text-center">
            <div>
                <p class="font-weight-bold">{contador}</p>
            </div>

            <button class="btn btn-outline-dark mt-1"
                onClick={adicionarContador}>Adicionar</button>
        </div>
    );
}

export default Home;