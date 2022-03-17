import Link from "next/link";


export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 footer__box-credits">
                        <Link href="/creditos"><a>Créditos</a></Link>
                    </div>
                </div>
                <div className="container">
                    <div className="box-divider">
                        <p>Copyright © 2022 All Rights Reserved - Giovani Sales</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}