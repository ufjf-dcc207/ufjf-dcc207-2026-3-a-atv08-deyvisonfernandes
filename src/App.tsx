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

  return (
    <section>
    <h2>Pacotes</h2>
    <div className='pacotes'></div>
    {data.map(p => <Pacote pacote={p} key={p.id}/>)}
    </section>
  )
}

export default App
