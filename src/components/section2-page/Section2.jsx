import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.jpg";
import img3 from "../../assets/img-3.jpg";
import img4 from "../../assets/img-4.jpg";
import img5 from "../../assets/img-5.jpg";
import "./section2.css";

function Section2() {
    return (
        <section className="section2">
            <div className="section2-cntnr">
                <div className="section2-desc">
                    <div>
                        <h2>Design Strategy</h2>
                        <ul>
                            <li>Decor guidance</li>
                            <li>Intentional layout</li>
                        </ul>
                    </div>
                </div>
                <div className="section2-grid">
                    <img src={img1} alt="Julie Hansen Img" draggable="false" />
                </div>
            </div>
            <div className="section2-cntnr">
                <div className="section2-grid">
                    <img src={img2} alt="Julie Hansen Img" draggable="false" />
                    <img src={img3} alt="Julie Hansen Img" draggable="false" />
                    <img src={img4} alt="Julie Hansen Img" draggable="false" />
                    <img src={img5} alt="Julie Hansen Img" draggable="false" />
                </div>
                <div className="section2-desc">
                    <div>
                        <h2>My Staging Expertise</h2>
                        <ul>
                            <li>Unclutter and organize your home</li>
                            <li>Neatly arrange drawers and cabinets</li>
                            <li>Keep pets outdoors or off the premises</li>
                            <li>Play soft music</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section2;
