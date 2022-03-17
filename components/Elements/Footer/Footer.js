import Link from "next/link";


export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 footer__box-credits wow fadeInUp" data-wow-delay=".5s">
                        <Link href="/creditos"><a>Créditos</a></Link>
                    </div>
                </div>
                <div className="container">
                    <div className="box-divider wow fadeInUp" data-wow-delay=".5s">
                        <p>Copyright © 2022 All Rights Reserved - Giovani Sales</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}