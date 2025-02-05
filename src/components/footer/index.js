import "./Footer.css";

function Footer() {
    return (
        <footer className="container-footer">
            <div className="cards-footer">
            <section className="footer-about">
                <h5>SOBRE</h5>
                <div className="footer-locations">
                    <img className="footer-location-image"
                         src="../../images/footer_images/footer-location-icon.svg"
                         alt="" />
                    <div className="footer-locations-names">
                        <p>Florianópolis - Santa Catarina.</p>
                        <p className="loc-sj">São José - Santa Catarina.</p>
                    </div>
                </div>
                <div className="footer-phone">
                    <img className="footer-phone-image"
                         src="../../images/footer_images/footer-phone.svg"
                         alt="" />
                    <p className="footer-phone">(11) 913760370</p>
                </div>
                <div className="footer-email">
                    <img className="footer-email-image"
                         src="../../images/footer_images/footer-email.svg"
                         alt="" />
                    <p className="footer-email">rmaxbarros@gmail.com</p>
                </div>
            </section>

            <section className="navigation-access">
                <h5>ACESSO RÁPIDO</h5>
                <div className="footer-navigation">
                    <a href="/">Home</a>
                    <a href="/favorites">Favoritos</a>
                    <a href="https://www.linkedin.com/in/max-barros/">Projeto</a>
                </div>
            </section>

            <section className="social-media">
                <h5>SOCIAL MEDIA</h5>
                <div className="footer-social-media">
                    <a href="https://www.linkedin.com/in/max-barros/">LinkedIn</a>
                    <a href="https://github.com/rMaxBarros">GitHub</a>
                    <a href="https://www.figma.com/design/hPqehUMzhEFW6mQXTjd6Xv/Holiday-Hideaways?node-id=131-31&t=cpE7GGhq19oAqAqP-1">Figma do Projeto</a>
                    <a href="https://www.maxbarros.dev">MaxBarros.dev</a>
                </div>
            </section>
            </div>

            <section className="copyright">
                <p>Copyright @ 2025 Max Barros.</p>
            </section>
        </footer>
    )
}

export default Footer;
