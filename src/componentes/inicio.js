import './inicio.css';
import { Link } from 'react-router-dom';

const PantallaInicio = () =>{

    return(
        <div className='home'>
            <h1>¡Hola,
                <br></br>
                <span className='textorosa'>LoopStudio!</span>
            </h1>
            <p>Soy Matias Sosa,
                <br></br>
                Desarrollador full-stack <br></br>
                con interés en <span className='textorosa'>LoopAcademy</span>
            </p>
            <ul className='listaBotones'>
                <li><Link to='/Por-Que-LoopStudio' className='linkk'>¿Por qué <span className='textorosa2'>LoopStudio</span>?</Link> </li>
                <li><Link to='/Sobre-mi' className='linkk'>Sobre mí / proyectos</Link> </li>
            </ul>
        </div>
    )
}

export default PantallaInicio;