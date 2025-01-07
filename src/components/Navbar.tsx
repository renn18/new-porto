import Link from 'next/link';
import { FloatingDock } from './ui/floasting-dock';

const Navbar = () => {
  return (
    <div className="absolute bottom-5 left-0 right-0  flex flex-col items-center justify-center z-50">
    <FloatingDock
            items={[
              { title: "Home", icon: <i className="bi bi-house-door text-slate-900 dark:text-slate-50"></i>, href: "/" },
              { title: "About", icon: <i className="bi bi-info-circle text-slate-900 dark:text-slate-50"></i>, href: "/about" },
              { title: "Contact", icon: <i className="bi bi-person-circle text-slate-900 dark:text-slate-50"></i>, href: "/contact" }
            ]}
            />
            </div>
  );
  
};

export default Navbar;