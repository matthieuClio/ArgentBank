// Style
import './home.scss';

export default function Home () {
    return (
        <figure className="hero">
            <img src="./images/bank-tree.jpeg" alt="Une plante dans un verre rempli de pièce" className="hero__image" />

            <figcaption className="hero__description">
                <div className="hero__description__informations">
                    <span className="hero__description__informations__line-break">
                        No fees.
                    </span>

                    <span className="hero__description__informations__line-break">
                        No minimum deposit.
                    </span>
                    
                    <span className="hero__description__informations__line-break">
                        High interest rates.
                    </span>
                </div>

                <div className="hero__description__catch-phrase">
                    Open a savings account with Argent Bank today!
                </div>
            </figcaption>
        </figure>
    )
}