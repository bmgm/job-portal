import Filters from "../filters/Filters";
import JobCards from "../jobCards/JobCards";
import Nav from "../navbar/Nav";
import s from "./Hero.module.css";

const Hero = () => {
  return (
    <section id={s.hero}>
      <Nav />
      <div className={s.heroMain}>
        <h1>Discover Your Dream Job: Start the Search Today!</h1>
        <h3>Get the latest job opening</h3>
        <Filters />
        <JobCards />
      </div>
    </section>
  );
};

export default Hero;
