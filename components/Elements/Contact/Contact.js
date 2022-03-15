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
                    <div className="col-lg-6 offset-lg-1">
                        <div className="contact__form-area">
                            <Form />
                        </div>
                    </div>
                    <div className="col-lg-5 contact__links-btn-wrapper">
                        <div className="contact__btn-box">
                            <Link href="https://github.com/ggsales"><button className="fab fa-github btn-contact" /></Link>
                            <Link href="https://www.linkedin.com/in/giovanisales/"><button className="fab fa-linkedin btn-contact" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}