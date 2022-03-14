import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/dist/client/link";



export default function Cases() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },

                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (
        <section className="cases">
            <h1 className="cases__title">Cases</h1>
            <p className="cases__subtitle">Abaixo estão todos os meus cases desenvolvidos até hoje.</p>
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 col-lg-8 offset-lg-2 offset-sm-1">
                        <Slider {...settings} className="carousel-cases">
                            <div className="case case-mobile-1">
                                <img src="./img/cases/fluabit-site.png" alt="fluabit-site" />
                                <div className="cases__full-overlay">
                                    <div className="cases__content-box-cases">
                                        <h3>Website - Fluabit</h3>
                                        <Link href="https://old.fluabit.com/"><button>Acessar</button></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="case case-mobile-2">
                                <img src="./img/cases/buffet-lavida.png" alt="Buffet-laVida-site" />
                                <div className="cases__full-overlay">
                                <div className="cases__content-box-cases">
                                        <h3>Website - Buffet La Vida</h3>
                                        <Link href="https://buffetlavida.com.br/"><button>Acessar</button></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="case case-mobile-3">
                                <img src="./img/cases/alurakut.png" alt="projeto-alurakut" />
                                <div className="cases__full-overlay">
                                <div className="cases__content-box-cases">
                                        <h3>Alurakut - Imersão React Alura 2021</h3>
                                        <Link href="https://alurakut-ggsales.vercel.app/login"><button>Acessar</button></Link>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

        </section>
    )
}