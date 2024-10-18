import FaqSection from "./components/FAQ's/faq";
import Feedback from "./components/Feedback/Feedback";
import Hero from "./components/Hero/HeroSection";
import MemorablePlace from "./components/MemorablePlace/MemorablePlace";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <MemorablePlace />
      <Feedback />
      <FaqSection />
    </div>
  );
}
