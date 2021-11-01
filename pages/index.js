import Contact from "../components/home/Contact";
import FeaturedArticle from "../components/home/FeaturedArticle";
import FeaturedVideo from "../components/home/FeaturedVideo";
import HundredDays from "../components/home/HundredDays";
import Quote from "../components/home/Quote";

export default function Home() {
  return (
    <>
      <HundredDays />
      <Quote />
      <FeaturedArticle />
      <Quote />
      <FeaturedVideo />
      <Quote />
      <Contact />
    </>
  );
}
