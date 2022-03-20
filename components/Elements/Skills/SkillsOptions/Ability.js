import "react-circular-progressbar/dist/styles.css";
import ProgressBar from 'react-bootstrap/ProgressBar'



export default function Ability() {
    return (
        <>
            <div className="row">
            <p className="skills__subtitle">Como programador Front-end, atuo nos modelos de desenvolvimento Web. Abaixo, é possivel visualizar quais são, e também qual o meu atual desempenho na produção de cada um.</p>
                <div className="col-lg-6 mobile-border">
                    <div className="skills__ability-box wow fadeInLeft" data-wow-delay=".5s">
                        <img src="./img/skills/webapp.png" alt="imagem ilustrativa de web aplicações" className="skills__img-ability" />
                        <h3 className="skills__text-ability"> Web Aplicações</h3>
                    </div>
                    <div className="skills__progressbar-wrapper wow fadeInUp" data-wow-delay=".7s">
                        <p className="skills__performance-title">Desempenho</p>
                        <div className="circle-progress-box">
                        <ProgressBar   variant="danger" animated now={55} />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="skills__ability-box wow fadeInLeft" data-wow-delay=".5s">
                        <img src="./img/skills/website-developer.png" alt="imagem ilustrativa de websites" className="skills__img-ability" />
                        <h3 className="skills__text-ability"> Websites</h3>
                    </div>
                    <div className="skills__progressbar-wrapper wow fadeInUp" data-wow-delay=".7s">
                        <p className="skills__performance-title">Desempenho</p>
                        <div className="circle-progress-box">
                            <ProgressBar  variant="danger" animated now={85} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}