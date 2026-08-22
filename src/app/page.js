import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/hero/Hero";
import ProfileGrid from "@/components/profiles/ProfileGrid";
import FooterNotice from "@/components/footer/FooterNotice";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ProfileGrid />
        <FooterNotice/>
        <Footer/>
      </main>
    </>
  );
}
