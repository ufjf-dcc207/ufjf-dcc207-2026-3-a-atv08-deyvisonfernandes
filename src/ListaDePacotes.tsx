import { useState } from "react";
import "./ListaDePacotes.css"
import Pacote from "./Pacote";
import type { PacoteType } from "./types"

type ListaDePacotesProps = {
    pacotes: Array<PacoteType>;
    acaoExcluir: (id: String)=>void;

}

export default function ListaDePacotes({pacotes, acaoExcluir} : ListaDePacotesProps){
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
            <dl>
                {pacotes
                .sort((x,y) =>x[ordenacao]- y[ordenacao])
                .map(p => (
                        <Pacote pacote={p} acaoExcluir={acaoExcluir} key={p.id}/>
                  )
                      )}
            </dl>
        </div>
    )
}
