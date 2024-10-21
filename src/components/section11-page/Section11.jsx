import "./section11.css";

const section11 = [
    {
        icon: "mail",
        title: "Responsive",
        desc: "I am always available via phone, text, or email for inquiries.",
    },
    {
        icon: "flag",
        title: "Syndication",
        desc: "I market your property locally, nationally, and internationally, effectively.",
    },
    {
        icon: "pin_drop",
        title: "Virtual Tour",
        desc: "Let's make your home stand out with a high quality virtual tour.",
    },
    {
        icon: "photo_camera",
        title: "Drone Photography",
        desc: "Beautiful, high-end photography is a central part of our marketing plan for your property.",
    },
];

function Section11() {
    return (
        <section className="section11">
            <div className="section11-cntnr">
                <div className="section11-grid">
                    {section11.map((section11, index) => (
                        <div key={index}>
                            <span className="material-symbols-rounded">
                                {section11.icon}
                            </span>
                            <h3>{section11.title}</h3>
                            <p>{section11.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Section11;
