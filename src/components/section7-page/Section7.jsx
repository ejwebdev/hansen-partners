import aboutImg from "../../assets/img-8.png";
import "./section7.css";

function Section7() {
    return (
        <section className="section7">
            <div className="section7-cntnr">
                <div className="section7-left">
                    <h2>The Hansen Partners Communications Tablet</h2>
                    <p>
                        We have created this as a wonderful tool so that we can
                        communicate with you daily, provide you with updates on
                        what is happening with your home. We are available at
                        the with a click of your tablet.
                    </p>
                    <p>Benefits:</p>
                    <ul>
                        <li>
                            Review all documents and sign in the comfort of your
                            home or anywhere.
                        </li>
                        <li>
                            Stay up to date on all marketing activities, review
                            materials, photos, etc. in real time.
                        </li>
                        <li>
                            Meet with us face to face on our Gotomeeting.com
                            platform to go over and discuss the events of the
                            week.
                        </li>
                        <li>
                            You have your own email assigned just for you and
                            your common space to quickly write a note, or
                            quickly send a video message to us for fast
                            communication using our Bomb bomb video messaging
                            system.
                        </li>
                    </ul>
                    <p>
                        We believe that transparency and guiding you and your
                        family through the process is key to having the best
                        experience. During these uncertain times. It is a good
                        feeling to know you have some one with a proven track
                        record you can count on. We will be here to handle your
                        needs during the Real Estate process. We think of it
                        before a need even arises. Because, that is just what we
                        do. Who you work with does matter!
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

export default Section7;
