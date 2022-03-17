import Link from "next/link";




export default function CreditsArea(){
    return(
        <section className="credits">
            <div className="container">
                <div className="row">
                    <div className="credits__links">
                        <h1>Abaixo os devidos créditos a todas as imagens presentes no site</h1>
                        <ul>
                            <Link href="/"><a></a></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}