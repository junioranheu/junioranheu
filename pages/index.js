import { useState } from "react";

function Home() {
    return (
        <div>
            <h1>Olá mundo</h1>
            <Contador />

            <br />
            <span>/npm run dev/</span>
        </div>
    );
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    );
}

export default Home;