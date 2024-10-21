import "./section4.css";

const section4 = [
    {
        icon: "1",
        title: "Initial Consultation & Planning",
    },
    {
        icon: "2",
        title: "Search for a Home & Get Pre-Approved",
    },
    {
        icon: "3",
        title: "Submit an Offer",
    },
    {
        icon: "4",
        title: "Complete Settlement Process",
    },
];

function Section4() {
    return (
        <section className="section4">
            <div className="section4-cntnr">
                <h2>The Buying Process</h2>
                <div className="section4-grid">
                    {section4.map((section4, index) => (
                        <div key={index}>
                            <h3>{section4.icon}</h3>
                            <h3>{section4.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Section4;
