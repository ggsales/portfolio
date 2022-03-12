
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



export default function Ability() {
    const percentageApp = 66;
    const percentageSite = 90;
    return (
        <>
            <div className="row">
                <div className="col-lg-6 mobile-border">
                    <div className="skills__ability-box">
                        <img src="./img/skills/webapp.png" alt="" className="skills__img-ability" />
                        <h3 className="skills__text-ability"> Web Aplicações</h3>
                    </div>
                    <div className="skills__progressbar-wrapper">
                        <p className="skills__performance-title">Desempenho</p>
                        <div className="circle-progress-box">
                            <CircularProgressbar
                                value={percentageApp}
                                strokeWidth={50}
                                styles={buildStyles({
                                    strokeLinecap: "butt"
                                })}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="skills__ability-box">
                        <img src="./img/skills/website-developer.png" alt="" className="skills__img-ability" />
                        <h3 className="skills__text-ability"> Websites</h3>

                    </div>
                    <div className="skills__progressbar-wrapper">
                        <p className="skills__performance-title">Desempenho</p>
                        <div className="circle-progress-box">
                            <CircularProgressbar
                                value={percentageSite}
                                strokeWidth={50}
                                styles={buildStyles({
                                    strokeLinecap: "butt"
                                })}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}