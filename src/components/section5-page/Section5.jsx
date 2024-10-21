import aboutImg from "../../assets/img-6.png";
import "./section5.css";

function Section5() {
    return (
        <section className="section5">
            <div className="section5-cntnr">
                <div className="section5-left">
                    <h2>Over 33 Years of Real Estate Success</h2>
                    <p>
                        We provide each of our clients with a level of service
                        they won&apos;t find anywhere else. We offer them what
                        they need, often before they even realize they need it.
                        In real estate, nearly everything is negotiable, but
                        when you choose Hansen Partners, our experience is 100%
                        nonnegotiable. And it&apos;s an unparalleled experience
                        like no other.
                    </p>
                </div>
                <img
                    src={aboutImg}
                    alt="Julie Hansen About Img"
                    draggable="false"
                />
            </div>
        </section>
    );
}

export default Section5;
