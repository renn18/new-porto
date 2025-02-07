import Link from 'next/link';
import { FloatingDock } from './ui/floasting-dock';

const Navbar = () => {
  return (
    <div className="fixed bottom-5 left-0 right-0  flex flex-col items-center justify-center z-50">
      <FloatingDock
        items={[
          { title: "Home", icon: <i className="bi bi-house-door text-slate-900 dark:text-slate-50"></i>, href: "/" },
          { title: "Services", icon: <i className="bi bi-info-circle text-slate-900 dark:text-slate-50"></i>, href: "/services" },
          { title: "Projects", icon: <i className="bi bi-cast text-slate-900 dark:text-slate-50"></i>, href: "/projects" },
          { title: "Designs", icon: <i className="bi bi-collection-play text-slate-900 dark:text-slate-50"></i>, href: "/designs" },
          { title: "About Me", icon: <i className="bi bi-person-circle text-slate-900 dark:text-slate-50"></i>, href: "/about-me" }
        ]}
      />
    </div>
  );

};

export default Navbar;