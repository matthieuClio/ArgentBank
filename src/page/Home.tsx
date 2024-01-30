// Componant
import Features from '../componant/Features';

// Style
import './home.scss';

// For features componant
const allFeatures = {
    contact: {
        image: 'icon-chat.png',
        imageAlt: 'Discussion',
        mainText: 'You are our #1 priority',
        textSecondary: `Need to talk to a representative? 
                        You can get in touch through our 24/7 chat or through a phone 
                        call in less than 5 minutes.
                        `
    },
    savings: {
        image: 'icon-money.png',
        imageAlt: 'Money',
        mainText: 'More savings means higher rates',
        textSecondary: `The more you save with us, the higher your interest rate will be!`
    },
    security: {
        image: 'icon-security.png',
        imageAlt: 'security',
        mainText: 'Security you can trust',
        textSecondary: `We use top of the line encryption 
                        to make sure your data and money is always safe.
                        `
    }
};

export default function Home () {

    return (
        <main>
            <figure className="hero">
                <img src="./images/bank-tree.jpeg" alt="Une plante dans un verre rempli de pièce" className="hero__image" />

                {/* Hero */}
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

                    <h1 className="hero__description__catch-phrase">
                        Open a savings account with Argent Bank today!
                    </h1>
                </figcaption>
            </figure>

            <div className="features-container">
                {/* Features componant */}
                <Features 
                    imgUrl={allFeatures.contact.image}
                    imgAlt={allFeatures.contact.imageAlt}
                    mainText={allFeatures.contact.mainText} 
                    secondaryText={allFeatures.contact.textSecondary} 
                />

                <Features 
                    imgUrl={allFeatures.savings.image}
                    imgAlt={allFeatures.savings.imageAlt}
                    mainText={allFeatures.savings.mainText} 
                    secondaryText={allFeatures.savings.textSecondary} 
                />

                <Features 
                    imgUrl={allFeatures.security.image}
                    imgAlt={allFeatures.security.imageAlt}
                    mainText={allFeatures.security.mainText} 
                    secondaryText={allFeatures.security.textSecondary} 
                />
            </div>
        </main>
    );
}