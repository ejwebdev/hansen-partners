import facebook from "../../assets/facebook.svg";
import linkedIn from "../../assets/linkedin.svg";
import brand3 from "../../assets/brand-3.png";
import brand4 from "../../assets/brand-4.png";
import brand5 from "../../assets/brand-5.png";
import "./footer.css";

function Footer() {
    const facebookLink = () => {
        window.open("https://www.facebook.com/", "_blank");
    };
    const linkedinLink = () => {
        window.open("https://www.linkedin.com/", "_blank");
    };

    return (
        <section className="footer">
            <div className="footer-cntnr">
                <div className="footer-top">
                    <div className="footer-top-left">
                        <h3>Julie Hansen Partnership</h3>
                        <p>
                            An elite group of the East Bay&apos;s most talented
                            and visionary real estate professionals believed
                            buyers and sellers deserved more from their real
                            estate company. More service. More resources. More
                            integrity. More global reach. In a word, more of
                            everything people should expect when they buy or
                            sell their homes.
                        </p>
                        <h3>Our Address</h3>
                        <p>
                            4733 Chabot Drive #100
                            <br />
                            Pleasanton, CA 94588
                            <br />
                            Julie Hansen-Orvis | CA DRE# 00934447
                        </p>
                        <h3>Contact Information</h3>
                        <p>
                            <a href="">(925) 553-6707</a>
                            luxuryhomesinwc@icloud.com
                        </p>
                        <div className="footer-socials">
                            <img
                                src={facebook}
                                alt="Julie Hansen Facebook"
                                draggable="false"
                                rel="noopener noreferrer"
                                onClick={facebookLink}
                            />
                            <img
                                src={linkedIn}
                                alt="Julie Hansen LinkedIn"
                                draggable="false"
                                rel="noopener noreferrer"
                                onClick={linkedinLink}
                            />
                        </div>
                    </div>
                    <div className="footer-top-right">
                        <h3>Newsletter</h3>
                        <p>
                            Subscribe to our Newsletter for latest news and
                            updates. Stay tuned!
                        </p>
                        <form>
                            <input
                                type="text"
                                placeholder="Email Address"
                                required
                            />
                            <div>
                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="terms"
                                    required
                                />
                                <label htmlFor="terms">
                                    By providing your contact information, you
                                    consent to receiving marketing
                                    communications and agree to our Privacy
                                    Policy. Message and data rates may apply.
                                </label>
                            </div>
                            <button type="submit">Subscribe</button>
                        </form>
                        <div>
                            <img
                                src={brand3}
                                alt="Julie Hansen Partners Img"
                                draggable="false"
                            />
                            <img
                                src={brand4}
                                alt="Julie Hansen Partners Img"
                                draggable="false"
                            />
                            <img
                                src={brand5}
                                alt="Julie Hansen Partners Img"
                                draggable="false"
                            />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-bottom">
                    <p>
                        Designed & Developed by
                        <a
                            href="https://ejwebdev.github.io/my-portfolio/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Enrico Jay
                        </a>
                        |<a href="">Luxury Presence</a>
                    </p>
                    <p>
                        &copy; 2024 |<a href="">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Footer;
