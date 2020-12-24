import Cards from "../Components/Cards";
import ControlledCarousel from "../Components/ControlledCarousel";

function Home() {
    return (
        <div>
            <ControlledCarousel />
            <section>
                <div className="container mt-2 mb-2 text-left">
                    <p>Most recent articles:</p>
                </div>
            </section>
            <Cards />
        </div>
    );
}

export default Home;