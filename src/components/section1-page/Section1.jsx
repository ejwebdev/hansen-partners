import "./section1.css";

const section1 = [
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
        title: "Photography",
        desc: "Beautiful, high-end photography is a central part of our marketing plan for your property.",
    },
];

function Section1() {
    return (
        <section className="section1">
            <div className="section1-cntnr">
                <h2>Comprehensive Marketing Plan</h2>
                <div className="section1-grid">
                    {section1.map((section1, index) => (
                        <div key={index}>
                            <span className="material-symbols-rounded">
                                {section1.icon}
                            </span>
                            <h3>{section1.title}</h3>
                            <p>{section1.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Section1;
