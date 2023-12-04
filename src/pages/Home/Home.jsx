import transition from "../../transition";
import Section01 from "./Sections/01/Section01";
import Section02 from "./Sections/02/Section02";
import Section03 from "./Sections/03/Section03";
import Section04 from "./Sections/04/Section04";
import Section05 from "./Sections/05/Section05";
import Section06 from "./Sections/06/Section06";
import Section07 from "./Sections/07/Section07";
import Section08 from "./Sections/08/Section08";
import Section09 from "./Sections/09/Section09";
import Footer from "./Sections/Footer/Footer";

const Home = () => {
    return (
        <>
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
        <Section07 />
        <Section08 />
        <Section09 />
        <Footer />
        </>
    )
}

export default transition(Home)