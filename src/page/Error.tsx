// React router
import { useRouteError } from 'react-router-dom';

// Style
import './error.scss';

export default function Error () {
    let errorReturned = useRouteError() as { status: number, message: string, statusText: string }

    if (!errorReturned) {
        errorReturned = { status: 500, message: 'test', statusText: '' };
    }

    console.log(errorReturned);

    return (
        <section className="error-page">
            <h1 className="error-page__status">
                {errorReturned.status}
            </h1>

            <span className="error-page__text">
                Oups... une erreur à été touvé !
            </span>

            <p className="error-page__status-text">
                Message d'erreur : {errorReturned.message ? errorReturned.message : errorReturned.statusText}
            </p>
        </section>
    );
}