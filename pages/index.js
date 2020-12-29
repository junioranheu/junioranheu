import { useState } from "react";

function Home() {
    return (
        <div class="container">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>

            <h1 class="text-center mt-5">Olá mundo</h1>

            <Contador />

            <div class="mt-5">
                <div class="row">
                    <div class="col-sm" style={{backgroundColor: "pink"}}>
                        Coluna 1 de 3
                    </div>
                    <div class="col-sm" style={{backgroundColor: "blue"}}>
                        Coluna 2 de 3
                    </div>
                    <div class="col-sm" style={{backgroundColor: "yellow"}}>
                        Coluna 3 de 3
                    </div>
                </div>
            </div>

            <h6 class="text-center mt-5">/npm run dev/</h6>
        </div>
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

            <button class="btn btn-outline-primary mt-1"
                onClick={adicionarContador}>Adicionar</button>
        </div>
    );
}

export default Home;