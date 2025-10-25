import { LightRays } from "@/components/ui/light-rays";
import Bloghome from "./blog/home";

export default function Home() {
  return (
    <div className="relative h-100vh w-full overflow-hidden">
      <LightRays />
      <Bloghome />
    </div>
  );
}
