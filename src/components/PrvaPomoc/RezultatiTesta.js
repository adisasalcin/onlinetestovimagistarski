import React from 'react';

export default class RezultatiTesta extends React.Component {
    render() {


        let brojTacni = 0, osvojeniBodovi = 0, moguciBodovi = 0;

        this.props.rezultati.forEach((odgovor) => {
            if (!!odgovor.jeTacno) {
                brojTacni += 1;
                osvojeniBodovi += (odgovor.level || 1) ;
            }
            moguciBodovi += (odgovor.level || 1) ;
        });

        const rezultati = this.props.rezultati.map((stavka, i) => {
            let pitanjeHtml = function () { return { __html: stavka.pitanje }; };
            let odgovorTacnoNetacno =
                (stavka.jeTacno === true) ?
                    "Odgovorili ste tačno. " :
                (stavka.jeTacno === false) ?
                    `Vaš odgovor je bio: ${stavka.odgovori[stavka.value - 1]}. Tačan odgovor je: ` :
                    "Tačan odgovor je: ";

            return (
                <li className={"rezultat" + (stavka.jeTacno ? " tacno" : " netacno")} key={i}>
                    <div className="pitanje" dangerouslySetInnerHTML={pitanjeHtml()} />
                    <div className="odgovorTacnoNetacno">
                        {odgovorTacnoNetacno} <b>{stavka.odgovori[stavka.tacno - 1]}</b>
                    </div>

                </li>
            );
        });

        return (
            <section className="prikazRezultata">
                <h2>Rezultat</h2>
                <div className="bodovanje">
                    Broj tačih pitanja: <em>{brojTacni}</em> . Broj bodova <b>{osvojeniBodovi}</b> / <b>{moguciBodovi}</b>.
                </div>
                <div className="oznaka">{osvojeniBodovi}</div>
                <ol>{rezultati}</ol>
            </section>
        );
    }
}
