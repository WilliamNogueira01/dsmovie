
import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';


export default function Navbar() {
    
    return (<header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>DSMovie</h1>
                <a href="https://github.com/WilliamNogueira01">
                    <div className="dsmovie-contact-container">
                        <GithubIcon />
                        <p className="dsmovie-contact-link">/William Nogueira</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    );
}
