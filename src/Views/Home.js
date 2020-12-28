import Cards from "../Components/Cards";
import ControlledCarousel from "../Components/ControlledCarousel";

function Home() {
    return (
        <div className="mt-2">
            <ControlledCarousel />
            <section>
                <div className="container mt-2 mb-2 card-title">
                    <p>Most recent articles:</p>
                </div>
            </section>
            <Cards />
        </div>
    );
}

export default Home;