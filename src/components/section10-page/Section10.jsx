import aboutImg from "../../assets/img-10.png";
import brandImg from "../../assets/brand-2.png";
import "./section10.css";

function Section10() {
    return (
        <section className="section10">
            <div className="section10-cntnr">
                <img
                    src={aboutImg}
                    alt="Julie Hansen Partners Img"
                    draggable="false"
                />
                <div className="section10-right">
                    <h2>Global Exposure</h2>
                    <p>
                        Through our international affiliations, we have a strong
                        presence in over 50 countries. Our luxury listings are
                        sent to prominent international real estate sites,
                        reaching over 70 million potential buyers and investors
                        worldwide through our relationships with:
                    </p>
                    <img
                        src={brandImg}
                        alt="Julie Hansen Brand Img"
                        draggable="false"
                    />
                    <p>
                        In addition, we have several well-positioned affiliate
                        offices in China, providing our clients with access to
                        buyers in Hong Kong, Shanghai, and Beijing.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Section10;
