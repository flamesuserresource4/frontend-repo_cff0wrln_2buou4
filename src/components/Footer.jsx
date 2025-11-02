import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} M Arham Rafique. All rights reserved.</p>
        <p className="text-gray-500">Built with a minimalist black & white aesthetic.</p>
      </div>
    </footer>
  );
}
