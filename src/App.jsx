
import './App.css'

import Componente
  from './Componente'
function App() {


  return (
    <>

      <div className='div-main'>
        <h1>LISTA DE TAREAS</h1>
        <div className='div-input'>
          <input className='input-tareas' type='text' placeholder='Introduce una tarea:'></input>
          <button className='button-tareas' >ADD</button>
        </div>

        <ul className='ul-lista'>
          <li className='li-tarea'>
            <div className='tarea'>
              <input type="checkbox" className='input-checkbox' />
              <p>TAREA NRO 1</p>
            </div>
            <button className='button-delete'>DELETE</button>
          </li>
        </ul>

      </div>
    </>
  )
}

export default App
