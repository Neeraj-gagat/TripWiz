import { Appbar } from "@/components/ui/Appbar";
import { AutoRedirectToHotels } from "@/components/ui/AutoRedirect";
import { Features } from "@/components/ui/Features";
import Footer from "@/components/ui/Footer";
import { Hero } from "@/components/ui/Hero";
import { PoweredBy } from "@/components/ui/PoweredBy";
import { PreFooter } from "@/components/ui/PreFooter";
import { Preview } from "@/components/ui/Preview";


export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <AutoRedirectToHotels/>
     <Appbar />
     <Hero/>
     <PoweredBy/>
     <Features/>
     <Preview/>
     <PreFooter/>
     <Footer/>
    </div>
  );
}
