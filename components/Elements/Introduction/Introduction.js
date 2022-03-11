


export default function Introduction() {
    return (
        <section className="introduction__area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="introduction__title">Introdução</h3>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-4 offset-lg-2 col-xl-3  offset-xl-2 col-xxl-3 offset-xxl-2 col-sm-6 wow fadeInUp" data-wow-delay="1.1s">
                    <img src="./img/introduction/about-2.png" alt="" className="introduction__img" />
                </div>
                <div className="col-lg-4 col-xs-12 col-sm-5 wow fadeInLeft" data-wow-delay="1.5s">
                    <div className="introduction__box-contents">
                        <h1 className="introduction__content-title">Sobre mim</h1>
                        <p className="introduction__content-text">Me chamo Giovani Sales, tenho 21 anos, nasci e cresci no Brasil, no estado de São Paulo.</p>
                    </div>
                </div>
            </div>
            <div className="row align-items-center introduction__flex-reverse-mobile">
                <div className="col-lg-5 offset-lg-3 col-xl-4  offset-xl-4 col-xxl-3 offset-xxl-5 col-sm-6 col-md-6 offset-md-1">
                    <div className="introduction__box-contents wow fadeInLeft" data-wow-delay="1.5s">
                        <h1 className="introduction__content-title_2">Formação</h1>
                        <p className="introduction__content-text">Sou formado em Análise e Desenvolvimento de sistemas desde dezembro de 2020, pela Universidade Nove de Julho.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-xs-12 col-sm-5 introduction__mobile-flex-img wow fadeInUp" data-wow-delay="1.2s">
                    <img src="./img/introduction/study-progress.png" alt="" className="introduction__img" />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-4 offset-lg-2 col-xl-3  offset-xl-2 col-xxl-3 offset-xxl-2 col-sm-6 wow fadeInUp" data-wow-delay="1.2s">
                    <img src="./img/introduction/code-progress.png" alt="" className="introduction__img" />
                </div>
                <div className="col-lg-5 col-xs-12 col-sm-6">
                    <div className="introduction__box-contents wow fadeInLeft" data-wow-delay="1.5s">
                        <h1 className="introduction__content-title">Jornada como desenvolvedor</h1>
                        <p className="introduction__content-text">Ainda como aspirante no mundo da programação, me identifiquei com o Front-end no último ano de faculdade. Desde então foquei em estudar e praticar diariamente as mais atuais tecnologias de mercado. Minhas principais atuações foram como freelancer em uma unica empresa, e também como colaborador em projetos de terceiros. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
