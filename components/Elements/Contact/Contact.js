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
                    <div className="col-lg-6 offset-lg-1 col-xl-5 offset-xl-2">
                        <div className="contact__form-area">
                            <h6 className="contact__form-title">Envie uma mensagem diretamente do site preechendo o formulário abaixo.</h6>
                            <Form />
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-4 contact__links-btn-wrapper">
                        <div className="contact__btn-box">
                            <h2 className="contact__btn-box__title">Ou se preferir...</h2>
                            <h3 className="contact__btn-box__subtitle">Entre em contato clicando nos links abaixo.</h3>
                            <Link href="https://github.com/ggsales"><button className="fab fa-github btn-contact" /></Link>
                            <Link href="https://www.linkedin.com/in/giovanisales/"><button className="fab fa-linkedin btn-contact" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}