import { FloatingDock } from "@/components/ui/floasting-dock";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <FloatingDock
        items={[
          { title: "Home", icon: <Image src="/home-icon.png" alt="Home" width={10} height={10}/>, href: "/" },
          { title: "About", icon: <Image src="/about-icon.png" alt="About" width={10} height={10}/>, href: "/about" },
          { title: "Contact", icon: <Image src="/contact-icon.png" alt="Contact" width={10} height={10}/>, href: "/contact" }
        ]}
      />
    </div>
  );
}
