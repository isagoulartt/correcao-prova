
import './App.css'
import Evento from './Componentes/Evento'
import './Componentes/Galeria'
import Galeria from './Componentes/Galeria'
import Cabecalho from './Componentes/Cabecalho'
import Rodape from './Componentes/Rodape'



function App() {

  return (
    <>
    <Cabecalho>

    </Cabecalho>
      <Evento
      titulo={"evento do senai"}
      descricao={"descrição do evento"}
      horario={"29/04/2024 as 11h"}
      local={"senai sao jose"}
      />
      <Galeria>

      </Galeria>

      <Rodape>
        
      </Rodape>
    </>
  )
}

export default App
