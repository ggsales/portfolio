import Link from "next/link";




export default function CreditsArea(){
    return(
        <section className="credits">
            <div className="container">
                <div className="row">
                    <a href="/" className="fas fa-angle-left arrow-back"><span>Voltar</span></a>
                    <div className="credits__links">
                        <h1 className="wow fadeInDown">Abaixo os devidos créditos a todas as imagens presentes no site</h1>
                        <ul className="wow fadeInLeft" data-wow-delay=".5s">
                            <li><Link href="https://storyset.com/illustration/hand-coding/bro"><a>Imagem - Hero</a></Link></li>
                            <li><Link href="https://storyset.com/illustration/account/pana"><a>Imagem 1 - Introdução</a></Link></li>
                            <li><Link href="https://storyset.com/illustration/coding-workshop/amico"><a>Imagem 2 - Introdução</a></Link></li>
                            <li><Link href="https://storyset.com/illustration/code-typing/bro"><a>Imagem 3 - Introdução</a></Link></li>
                            <li><Link href="https://storyset.com/illustration/site-stats/rafiki"><a>Imagem 1 - Conhecimentos</a></Link></li>
                            <li><Link href="https://storyset.com/illustration/website-designer/amico"><a>Imagem 2 - Conhecimentos</a></Link></li>
                            <li><Link href="https://www.flaticon.com/br/icone-gratis/html_1051277?term=html&page=1&position=4&page=1&position=4&related_id=1051277&origin=tag"><a>Icon - HTML</a></Link></li>
                            <li><Link href="https://www.flaticon.com/br/icone-gratis/css-3_732190?term=css&page=1&position=1&page=1&position=1&related_id=732190&origin=search"><a>Icon - CSS</a></Link></li>
                            <li><Link href="https://www.flaticon.com/br/icone-gratis/sass_5968358?term=sass&page=1&position=2&page=1&position=2&related_id=5968358&origin=search"><a>Icon - SASS</a></Link></li>
                            <li><Link href="https://www.flaticon.com/br/icone-gratis/js_5968292?term=javascript&page=1&position=5&page=1&position=5&related_id=5968292&origin=search"><a>Icon - Javascript</a></Link></li>
                            <li><Link href="https://icon-icons.com/icon/react-original-logo/146374"><a>Icon - React</a></Link></li>
                            <li><Link href="https://icon-icons.com/icon/NextJS/132160"><a>Icon - NextJs</a></Link></li>
                            <li><Link href="https://www.flaticon.com/free-icon/bootstrap_5968672?term=bootstrap&page=1&position=3&page=1&position=3&related_id=5968672&origin=search"><a>Icon - Bootstrap</a></Link></li>
                            <li><Link href="https://www.flaticon.com/download/icon/landing/2282188?format=png&size=64&type=standard"><a>Icon - Front-end</a></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}