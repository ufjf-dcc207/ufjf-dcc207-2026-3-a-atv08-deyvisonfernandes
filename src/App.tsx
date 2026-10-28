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
  }
]

function App() {

  return (
    <section>
    <h2>Pacotes</h2>
    <div className='pacotes'></div>
    < Pacote pacote={data[0]}/>
    </section>
  )
}

export default App
