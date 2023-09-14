// components
import { StickyNavbar } from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ExpectedOutcomes from "./components/ExpectedOutcomes";
import Objective from "./components/Objective";
import Schedule from "./components/Schedule";
import Sponsors from "./components/Sponsors";
import ContactForm from "./components/ContactForm";
import Speakers from "./components/Speakers";

export default function App() {
  return (
    <>
      <StickyNavbar />
      <Hero />
      <About />
      <ExpectedOutcomes />
      <Objective />
      <Schedule />
      <Speakers />
      <Sponsors />
      <ContactForm />
    </>
  );
}
