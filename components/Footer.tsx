import Link from 'next/link';
import { content } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-[#0a0e1a]/90 border-t border-[#00f0ff]/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-6 h-6 border border-[#00f0ff]/40 flex items-center justify-center">
                <span className="text-[#00f0ff] font-mono text-[10px] font-bold">{'/>'}</span>
              </div>
              <h3 className="font-mono font-bold tracking-wider gradient-text">
                SPACE CREDITS
              </h3>
            </div>
            <p className="text-gray-500 text-sm font-mono">
              {'>'} The cryptocurrency not affected by gravity.
              <br />
              {'>'} Going to Mars with style.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[#00f0ff]/60 font-mono text-xs tracking-widest uppercase mb-4">
              // Navigation
            </h4>
            <ul className="space-y-2">
              {['/', '/about', '/mission', '/whitepaper'].map((href) => (
                <li key={href}>
                  <Link href={href} className="text-gray-500 hover:text-[#00f0ff] transition-colors font-mono text-sm flex items-center gap-2">
                    <span className="text-[#00f0ff]/30">{'>'}</span>
                    {href === '/' ? 'Home' : href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h4 className="text-[#00f0ff]/60 font-mono text-xs tracking-widest uppercase mb-4">
              // Comms Channel
            </h4>
            <div className="flex flex-wrap gap-3">
              {content.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-500 hover:text-[#00f0ff] transition-colors border border-[#00f0ff]/10 px-3 py-2 hover:border-[#00f0ff]/30"
                >
                  <span className="font-mono text-sm">{social.icon}</span>
                  <span className="font-mono text-xs">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Status bar bottom */}
        <div className="pt-6 border-t border-[#00f0ff]/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 font-mono text-xs">
            <div className="flex items-center gap-4 text-gray-600">
              <span className="flex items-center gap-2">
                <span className="status-dot" />
                SYS: ONLINE
              </span>
              <span className="text-[#00f0ff]/20">|</span>
              <span className="flex items-center gap-2">
                <span className="status-dot-amber w-[6px] h-[6px] rounded-full bg-[#ff9500] shadow-[0_0_6px_#ff9500]" />
                NET: SOLANA
              </span>
              <span className="text-[#00f0ff]/20">|</span>
              <span>BLK: NOMINAL</span>
            </div>
            <p className="text-gray-600 text-center md:text-right">
              {content.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
