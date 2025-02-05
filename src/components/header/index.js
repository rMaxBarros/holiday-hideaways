import './Header.css';

function Header() {
    return (
        <header>
            <div className='container-content-header'>
                <img className='background-image' src="../../images/buildings-background-header.svg" alt="" />
                <div className="header-texts-buttons">
                    <h2>Aqui,<br />
                        você encontra a<br />
                        melhor opção para <br />
                        as suas férias.
                    </h2>
                    <h5>Procure pela acomodação ideal para você e sua família.</h5>
                    <div className='header-buttons'>
                        <a className='accommodations-button'>Nossas acomodações</a>
                        <a className='contact-button'>Entre em contato</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
