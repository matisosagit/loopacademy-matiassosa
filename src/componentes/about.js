import './about.css';
import { FileJs } from '@phosphor-icons/react';
import { FileCpp } from '@phosphor-icons/react';
import { Database } from '@phosphor-icons/react';

import { LinkedinLogo } from '@phosphor-icons/react';
import { ReadCvLogo } from '@phosphor-icons/react';
import { GithubLogo  } from '@phosphor-icons/react';
import { ArrowLineUpRight  } from '@phosphor-icons/react';


const About = () =>{

    return(
        <div className='loop'>
            <h1>Sobre mí 
            </h1>
            <ul className='listaBotones'>

                <li>
                    <a href="https://www.linkedin.com/in/matias-sosa-330488293/" target="_blank" rel="noopener noreferrer">
                        <LinkedinLogo size={32} color='#CB1E52'/>
                        <ArrowLineUpRight size={20} color='#fff'/>
                    </a>
                </li>

                <li>
                    <a href="https://drive.google.com/file/d/1HDBgi2SdMdLiEXn8dNr4_4ddsYbZw4tL/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <ReadCvLogo size={32} color='#CB1E52'/>
                        <ArrowLineUpRight size={20} color='#fff'/>
                    </a>
                </li>

            </ul>
            <p>Me llamo Matias Sosa, me apasiona la <span className='textorosa'>programación</span> y soy estudiante de Ingeniería en Computación en UdelaR.
                <br></br>
                En la universidad aprendí mucha lógica de programación en <span className='textorosa'>C++</span>, pero mediante cursos y proyectos personales
                he aprendido a utilizar tecnologías como <span className='textorosa'>React</span>,  
                <span className='textorosa'>Express</span> y <span className='textorosa'>SQL</span> entre otras.
            </p>

            <ul className='listaBotones'>
                <li><FileJs size={32} color='#CB1E52'/></li>
                <li><FileCpp size={32} color='#CB1E52'/></li>
                <li><Database size={32} color='#CB1E52'/></li>
            </ul>

            <h2>Proyecto destacado</h2>
            <p>Para aplicar y expandir mis conocimientos en <span className='textorosa'>programación</span>, desarrollé una APP para <br></br>
            <span className='textorosa'>gestionar servicios técnicos</span>, por ejemplo, reparacion de celulares, etc.
                <br></br>
                Utilicé principalmente  <span className='textorosa'>React.Js</span>,  
                <span className='textorosa'>Express.Js</span> y <span className='textorosa'>MySQL</span>. <br></br>
                Esta misma permite Loguearse, registrar informacion de las reparaciones a clientes, cambiar el estado de las reparaciones para que los usuarios puedan verla en tiempo real, descargar
                comprobantes, y más opciones.
            </p>

            <ul className='listaBotones'>

                <li>
                    <a className='linkk' href="https://matisosagit.github.io/appservicefront/" target="_blank" rel="noopener noreferrer">
                        Demo visual
                    </a>
                </li>

                <li>
                    <a className='linkk' href="https://github.com/matisosagit/appservices/tree/dev" target="_blank" rel="noopener noreferrer">
                        <GithubLogo />
                    </a>
                </li>

            </ul>
            
        </div>
    )
}

export default About;