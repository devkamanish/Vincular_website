import Achievements from "@/src/components/Homepage/Achievements";
import AuditParticipants from "@/src/components/Homepage/AuditParticipants";
import CallBack from "@/src/components/Homepage/CallBack";
import ConsultationCard from "@/src/components/Homepage/ConsultationCard";
import Faq from "@/src/components/Homepage/Faq";
import Footer from "@/src/components/Homepage/Footer";
import Hero from "@/src/components/Homepage/Hero";
import LatestNews from "@/src/components/Homepage/LastestNews";
import MarketShare from "@/src/components/Homepage/MarketShare";
import Navbar from "@/src/components/Homepage/Navbar";
import Newsletter from "@/src/components/Homepage/Newsletter";
import ProductCarousel from "@/src/components/Homepage/Products";
import ServiceCards from "@/src/components/Homepage/ServiceCards";
import Testimonials from "@/src/components/Homepage/Testimonials";




export default function Home() {
  return (
 <div>
  <Navbar/>
  <Hero/>
  <Achievements/>
  <ServiceCards/>
  <ConsultationCard/>
  <AuditParticipants/>
  <MarketShare/>
  <ProductCarousel/>
  <Newsletter/>
  <LatestNews/>
  <Testimonials/>
  <Faq/>
  <CallBack/>
    <Footer/>
 </div>
  );  
}



