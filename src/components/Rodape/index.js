import "./styles.css"
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

function Rodape({ classeRodape }) {
    return (
        <footer className={classeRodape}>
            <h2>Desenvolvido por Sidney Rodrigues Magalhães</h2>
            <div className='social-media'>
                <a href="https://github.com/sidneygyne" target="_blank" rel="noopener noreferrer" >
                    <IoLogoGithub className='icon' alt="imagem github" />
                </a>
                <a href="https://www.linkedin.com/in/sidneygyn" target="_blank" rel="noopener noreferrer" >
                    <IoLogoLinkedin className='icon' alt="imagem linkedin" />
                </a>
                <a href="https://instragram.com/sidneygyn" target="_blank" rel="noopener noreferrer" >
                    <IoLogoInstagram className='icon' alt="imagem instragram" />
                </a>
            </div>
        </footer>
    )
}

export default Rodape