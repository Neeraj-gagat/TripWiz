import { Appbar } from "@/components/ui/Appbar";
import { Hero } from "@/components/ui/Hero";
import { PoweredBy } from "@/components/ui/PoweredBy";


export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
     <Appbar />
     <Hero/>
     <PoweredBy/>
    </div>
  );
}
