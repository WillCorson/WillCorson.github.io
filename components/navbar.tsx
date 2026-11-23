"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Briefcase, FolderGit2 } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: User },
    { href: "/experience", label: "Experience", icon: Briefcase },
    { href: "/projects", label: "Projects", icon: FolderGit2 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-ocean-100/80 bg-white/85 shadow-[0_4px_24px_rgba(3,4,94,0.04)] backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl tracking-tight text-ocean-950">
              Will Corson
            </Link>
          </div>
          <div className="flex space-x-8">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-ocean-700"
                      : "text-slate-500 hover:text-ocean-950"
                  }`}
                >
                  <Icon size={18} />
                  <span className="hidden sm:inline">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}