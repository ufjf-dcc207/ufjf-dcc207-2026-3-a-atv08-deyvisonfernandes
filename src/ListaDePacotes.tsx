import { useState } from "react";
import "./ListaDePacotes.css"
import Pacote from "./Pacote";
import type { PacoteType } from "./types"
import type { AcaoPacote, AcaoPacoteExcluir } from "./pacoteReducer";

type ListaDePacotesProps = {
    pacotes: Array<PacoteType>;
    dispacher: React.ActionDispatch<[action: AcaoPacote]>;

}

export default function ListaDePacotes({pacotes, dispacher} : ListaDePacotesProps){
    const[ordenacao, setOrdenacao] = useState("peso");

    function mudaOrdenacao (evento){
        setOrdenacao(evento.target.value);
    }

    return(
        <div>
            <div>Ordernar por: {ordenacao} <br></br>
                <select onChange={mudaOrdenacao}>
                    <option value="altura">ALTURA</option>
                    <option value="largura">LARGURA</option>
                    <option value="profundidade">PROFUNDIDADE</option>
                    <option value="peso">PESO</option>
                    <option value="cubagem">CUBAGEM</option>

                </select>
            </div>
            <dl className="pacotes">
                {pacotes
                .sort((x,y) =>x[ordenacao] - y[ordenacao])
                .map(p => (
                        <Pacote pacote={p} dispacher={dispacher} key={p.id}/>
                  )
                      )}
            </dl>
        </div>
    )
}
