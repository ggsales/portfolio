import Typist from "react-typist"


export default function HomeHero() {
    return (
        <section className="hero__area hero__height p-relative d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-1 col-xl-5 offset-xl-2 col-md-12 text-hero-wrapper">
                        <h2 className="wow fadeInLeft" data-wow-delay=".6s">Olá, eu sou</h2>
                        <h1 className="wow fadeInUp" data-wow-delay=".8s">Giovani Sales</h1>
                        <Typist className="text-typist">
                            <Typist.Delay ms={900} />
                            <span> Desenvolvedor Front-end </span>
                        </Typist>

                    </div>
                    <div className="col-lg-4 col-xl-5 wow fadeInLeft col-md-12" data-wow-delay="1.2s">
                        <div className="hero__thumb-shape shape-2 hero-img-right">
                            <img src="./img/hero/hero-img.png" alt="ilustrator-developer-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}