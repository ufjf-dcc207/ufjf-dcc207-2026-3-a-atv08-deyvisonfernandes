
import type { PacoteType } from "./types";


export type AcaoPacote = AcaoPacoteExcluir | AcaoPacoteRepetir | AcaoPesoIncrementar

export type AcaoPacoteExcluir = {
    type: "excluir",
    id: string
}

export type AcaoPacoteRepetir= {
    type: "repetir",
    dimensao: string
    id: string
}

export type AcaoPesoIncrementar= {
    type: "incrementar",
    dimensao: string
    id: string
}

export default function pacoteReducer(state: Array<PacoteType>, action: AcaoPacote): Array<PacoteType>{
    switch(action.type){
        case "excluir":
            return state.filter(p => p.id !== action.id);
        case "repetir":
           return acaoRepetir(state, action);
            break;
        case "incrementar":
            

        default:
             return state;
    }

}


function acaoRepetir(state: Array<PacoteType>,action: AcaoPacoteRepetir){
 if(action.dimensao === "altura"){
                return state.map(p=> {
                    if (p.id === action.id){
                        return {...p, profundidade: p.altura, largura: p.altura};
                    } else return p
                })  
            } 
}