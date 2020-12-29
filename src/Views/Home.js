import Cards from "../Components/Cards";
import ControlledCarousel from "../Components/ControlledCarousel";

function Home() {
    return (
        <div>
            <ControlledCarousel />
            <section>
                <div className="container mt-2 mb-2 card-title">
                    <p><strong>Most recent articles:</strong></p>
                </div>
            </section>
            <Cards />
        </div>
    );
}

export default Home;