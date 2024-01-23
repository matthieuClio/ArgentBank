import './features.scss'

export default function Features (props: { imgUrl: string, imgAlt: string, mainText: string, secondaryText: string }) {
    const { imgUrl, imgAlt, mainText, secondaryText } = props
    
    return (
        <article className="features">
            {/* Icon */}
            <img src={`images/${imgUrl}`} alt={imgAlt} className="features__image" />

            {/* Main text */}
            <h2 className="features__main-text">{mainText}</h2>

            {/* Secondary text */}
            <p className="features__secondary-text">{secondaryText}</p>
        </article>
    )
}