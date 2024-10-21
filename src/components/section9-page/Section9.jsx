import aboutImg from "../../assets/img-9.png";
import "./section9.css";

function Section9() {
    return (
        <section className="section9">
            <div className="section9-cntnr">
                <div className="section9-left">
                    <h2>Our Partners</h2>
                    <h3>
                        Leading Real Estate Companies of The World® & Luxury
                        Portfolio International
                    </h3>
                    <p>
                        JRockcliff is a founding member of Luxury Portfolio
                        International®, the luxury division of Leading Real
                        Estate Companies of the World®. With more than 500
                        member firms around the world, Our luxury listings are
                        exposed to a vast global audience and reach potential
                        buyers and investors in over 50 countries.
                    </p>
                    <h3>Who&apos;s Who in Luxury Real Estate</h3>
                    <p>
                        Who&apos;s Who in Luxury Real Estate is a prestigious
                        global network of elite real estate professionals,
                        connecting top brokers and luxury buyers across 62
                        countries, specializing in marketing the world&apos;s
                        most exquisite properties.
                    </p>
                </div>
                <img
                    src={aboutImg}
                    alt="Julie Hansen Partners Img"
                    draggable="false"
                />
            </div>
        </section>
    );
}

export default Section9;
