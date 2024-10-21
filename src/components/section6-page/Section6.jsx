import aboutImg from "../../assets/img-7.png";
import "./section6.css";

function Section6() {
    return (
        <section className="section6">
            <div className="section6-cntnr">
                <img
                    src={aboutImg}
                    alt="Julie Hansen About Img"
                    draggable="false"
                />
                <div className="section6-right">
                    <h2>
                        We Want To Create An Unforgettable Experience For You...
                    </h2>
                    <p>
                        We combine data gained from your home&apos;s Comparative
                        Market Analysis with local market research to create a
                        marketing plan designed to help you meet your selling
                        goals. Your home&apos;s carefully designed plan will
                        include a range of online, print, and other marketing
                        tools targeted to the best-qualified pool of buyers.
                        Successfully marketing a home in today&apos;s real
                        estate environment requires a firm with experience and
                        flexibility. Hansen Partners provides both.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Section6;
