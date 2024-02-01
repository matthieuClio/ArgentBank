// Style
import './transaction.scss'

export default function Transaction(props: {
    informationsText: { operationText: string, amountText: string, balanceText: string } 
}) {

    const { informationsText } = props;

    return (
        <section className="operation">
            <div className="operation__informations">
                <h2 className="operation__informations__h2">
                    {informationsText.operationText}
                </h2>
                <span className="operation__informations__price">{informationsText.amountText}</span>
                <span>{informationsText.balanceText}</span>
            </div>

            <div className="operation__transaction">
                <button className="operation__transaction__button">
                    View transactions
                </button>
            </div>
        </section>
    )
}