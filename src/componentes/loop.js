import './loop.css';
import { Link } from 'react-router-dom';
import { Code } from '@phosphor-icons/react';
import { RocketLaunch } from '@phosphor-icons/react';
import { HeadCircuit } from '@phosphor-icons/react';

const Loop = () =>{

    return(
        <div className='loop'>
            <h1>¿Por qué 
                <br></br>
                <span className='textorosa'>LoopStudio?</span>
            </h1>
            <p>Son una empresa TOP de desarrollo de software.
                <br></br>
                Con el lanzamiento de <span className='textorosa'>LoopAcademy</span> demostraron verdadero interés por los perfiles con menos experiencia y su crecimiento profesional.
                <br></br>
                Por estas y más razones, siento que su empresa es un lugar ideal para crecer, aprender de los más expertos y aportar todo lo posible.
            </p>
            <ul className='listaBotones'>
                <li><Link to='/' className='linkk'>Volver</Link> </li>
                <li><Link to='/Sobre-mi' className='linkk'>Sobre mí / proyectos</Link> </li>
            </ul>
            <ul className='listaBotones'>
                <li> <Code size={32} color='#CB1E52'/> </li>
                <li> <RocketLaunch size={32} color='#CB1E52'/> </li>
                <li> <HeadCircuit size={32} color='#CB1E52'/> </li>
            </ul>
        </div>
    )
}

export default Loop;