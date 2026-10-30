import { useState } from 'react'
import './App.css'
import Pacote from './Pacote'
import type { PacoteType } from './types'



const data:Array<PacoteType> =[
  {
    id:"916bbf3e-35e8-46d9-8c9e-fd12329b2342",
    largura: 20.0,
    altura: 30.0,
    profundidade: 40.0,
    peso: 2.34
  },
  {
    id:"a3a48a3c-32c0-4bbb-9744-682a3fdfa5b5",
    largura: 21.0,
    altura: 10.0,
    profundidade: 40.0,
    peso: 1.63
  }
]

function App() {
  const [pacotes, setPacotes] = useState(data);
  function excluirPacotes (id){
    const novoPacote = pacotes.filter(p => p.id !==id);
    setPacotes(novoPacote);

  }

  return (
    <section>
    <h2>Pacotes</h2>
    <div className='pacotes'>
      {pacotes.map(p => (
        <Pacote pacote={p} acaoExcluir={excluirPacotes} key={p.id}/>
  )
      )}
      </div>
    
    </section>
  )
}

export default App
