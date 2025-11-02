import React from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-gray-200/60 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <nav className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-wide text-gray-900 hover:opacity-80 transition" aria-label="M Arham Rafique">
          M ARHAM RAFIQUE
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-black transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden inline-flex items-center justify-center rounded border border-gray-300 px-3 py-1 text-gray-700 hover:bg-gray-50"
          onClick={() => {
            const menu = document.getElementById('mobile-menu');
            if (menu) menu.classList.toggle('hidden');
          }}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </nav>
      <div id="mobile-menu" className="md:hidden hidden border-t border-gray-200 bg-white">
        <ul className="px-4 py-3 space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block px-2 py-2 rounded text-gray-800 hover:bg-gray-50"
                onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  if (menu) menu.classList.add('hidden');
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
