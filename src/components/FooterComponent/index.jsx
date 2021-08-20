import {memo} from 'react';
import './Newsletter.css';

const FooterComponent = () => {
    console.log('Render de newsletter');
    return (
        <section className="newsletter">
            <div className="container">
                <h2>¡Suscribete!</h2>
                <p>Dejanos tu e-mail y recibe las mejores ofertas</p>

                <form>
                    <input type="text" placeholder="E-mail" />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </section>
    )
}

export default memo(FooterComponent);

