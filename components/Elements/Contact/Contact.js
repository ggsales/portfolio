import Form from "./Form";
import Link from "next/link";





export default function Contact() {
    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="contact__title">Contato</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 offset-lg-1 col-xl-5 col-md-6 offset-xl-2">
                        <div className="contact__form-area wow fadeInUp" data-wow-delay="0.5s">
                            <h6 className="contact__form-title">Envie uma mensagem preenchendo o formulário abaixo.</h6>
                            <Form />
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-md-6 contact__links-btn-wrapper">
                        <div className="contact__btn-box wow fadeInLeft" data-wow-delay="0.8s">
                            <h2 className="contact__btn-box__title">Ou se preferir...</h2>
                            <h3 className="contact__btn-box__subtitle">Entre em contato clicando nos links abaixo.</h3>
                            <Link href="https://api.whatsapp.com/send?phone=5511942729775&text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio!%20Poder%C3%ADamos%20conversar%20%3F"><button className="fab fa-whatsapp btn-contact" /></Link>
                            <Link href="https://github.com/ggsales"><button className="fab fa-github btn-contact" /></Link>
                            <Link href="https://www.linkedin.com/in/giovanisales/"><button className="fab fa-linkedin btn-contact" /></Link>
                            <Link href="mailto:giovanisales14@gmail.com"><button className="fas fa-envelope btn-contact "></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}