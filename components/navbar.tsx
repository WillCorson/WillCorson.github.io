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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl text-gray-900">
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
                      ? "text-blue-600"
                      : "text-gray-500 hover:text-gray-900"
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