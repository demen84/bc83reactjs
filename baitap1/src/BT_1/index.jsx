import Header from "./header";
import Footer from "./footer";
import Navbar from "./navbar";
import Content from "./content";

function Baitap1() {
    return (
        <section>
            <Header />
            <div className="container">
                <Navbar />
                <Content />
            </div>
            <Footer />
        </section>
    );
}

export default Baitap1;