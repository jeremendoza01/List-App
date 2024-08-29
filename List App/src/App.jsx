
import './App.css'

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
              <span>TAREA NRO 1</span>
            </div>
            <button className='button-delete'>DELETE</button>
          </li>
        </ul>

      </div>
    </>
  )
}

export default App
