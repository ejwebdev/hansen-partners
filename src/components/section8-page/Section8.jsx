import brandImg from "../../assets/brand-1.png";
import "./section8.css";

function Section8() {
    return (
        <section className="section8">
            <div className="section8-cntnr">
                <h2>We Market Your Home to The World</h2>
                <h3>Our Online Marketing Strategy</h3>
                <p>
                    The Bay Area remains one of the world&apos;s most
                    sought-after regions to live in, and when looking to sell,
                    it is vital that your home be marketed online to audiences
                    locally, nationally, and internationally.
                </p>
                <div className="section8-grid">
                    <div>
                        <h3>Local Exposure</h3>
                        <p>
                            Through our partnership with Nextdoor, the private
                            online social network now used in over 80% of U.S.
                            neighborhoods and virtually all Bay Area
                            neighborhoods, we make sure your home receives
                            targeted local exposure. When you list your home
                            with Hansen Partners it will automatically appear on
                            Nextdoor in your neighborhood.
                        </p>
                    </div>
                    <div>
                        <h3>National Exposure</h3>
                        <p>
                            We secure strategic positioning and enhancement on
                            Realtor.com, Trulia, and Zillow, driving more
                            consumers to your home and increasing exposure. We
                            will receive every inquiry about your property
                            directly.
                        </p>
                        <img
                            src={brandImg}
                            alt="Julie Hansen Brand Img"
                            draggable="false"
                        />
                    </div>
                    <div>
                        <h3>International Exposure</h3>
                        <p>
                            To expose your luxury listing to millions of
                            potential homebuyers worldwide, we promote on
                            prominent international real estate portals,
                            including:
                        </p>
                        <ul>
                            <li>Wall Street Journal</li>
                            <li>LuxuryPortfolio.com</li>
                            <li>LuxuryRealEstate.com</li>
                            <li>LeadingRE.com</li>
                            <li>UniqueHomes.com</li>
                            <li>China.apr.com</li>
                            <li>Caimeiju</li>
                            <li>Juwai</li>
                            <li>Country Life UK</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section8;
