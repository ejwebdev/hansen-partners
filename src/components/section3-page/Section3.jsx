import "./section3.css";

const section3 = [
    {
        icon: "1",
        title: "Initial Consultation & Planning",
    },
    {
        icon: "2",
        title: "Devise & Execute Marketing Plan",
    },
    {
        icon: "3",
        title: "Review Offers & Reach Agreement with Buyer",
    },
    {
        icon: "4",
        title: "Complete Transaction Process",
    },
    {
        icon: "5",
        title: "After - Sale Service",
    },
];

function Section3() {
    return (
        <section className="section3">
            <div className="section3-cntnr">
                <h2>The Selling Process</h2>
                <div className="section3-grid">
                    {section3.map((section3, index) => (
                        <div key={index}>
                            <h3>{section3.icon}</h3>
                            <h3>{section3.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Section3;
