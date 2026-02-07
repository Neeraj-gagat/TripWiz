import { Appbar } from "@/components/ui/Appbar";
import { Features } from "@/components/ui/Features";
import Footer from "@/components/ui/Footer";
import { Hero } from "@/components/ui/Hero";
import { PoweredBy } from "@/components/ui/PoweredBy";
import { PreFooter } from "@/components/ui/PreFooter";


export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
     <Appbar />
     <Hero/>
     <PoweredBy/>
     <Features/>
     <PreFooter/>
     <Footer/>
    </div>
  );
}
