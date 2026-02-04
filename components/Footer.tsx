import Link from 'next/link';
import { content } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🚀</span>
              <h3 className="text-xl font-bold gradient-text">
                Space Credits
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              The cryptocurrency that&apos;s not affected by gravity. 
              Going to Mars with style. 🔴
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-secondary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/mission" className="text-gray-400 hover:text-secondary transition-colors">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/whitepaper" className="text-gray-400 hover:text-secondary transition-colors">
                  Whitepaper
                </Link>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h4 className="text-white font-bold mb-4">Join the Community</h4>
            <div className="flex flex-wrap gap-4">
              {content.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-secondary transition-colors hover:scale-110 transform"
                >
                  <span className="text-2xl">{social.icon}</span>
                  <span className="text-sm">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {content.copyright}
            </p>
            <p className="text-gray-500 text-xs text-center md:text-right">
              Built with Next.js • Powered by Solana • Made with 🚀
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
