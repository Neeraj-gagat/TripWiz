import { MessageThreadFull } from "@/components/tambo/message-thread-full";
import { Appbar } from "@/components/ui/Appbar";


export default function Home() {
  return (
    <div className="bg-white min-h-screen">
     <Appbar />
     <MessageThreadFull className="bg-transparent" />
    </div>
  );
}
