export default function Footer() {
  return (
    <footer className="bg-[#050914] border-t border-offwhite/5 py-16 px-6 md:px-12 text-offwhite/70">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-2xl font-bold tracking-tighter text-offwhite uppercase">
          Astra Ventures
        </div>

        <div className="flex items-center space-x-8 text-sm font-bold tracking-widest uppercase">
          <a href="#thesis" className="hover:text-copper transition-colors">Thesis</a>
          <a href="#team" className="hover:text-copper transition-colors">Team</a>
          <a href="#contact" className="hover:text-copper transition-colors">Contact</a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-offwhite/10 text-sm text-offwhite/40 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-medium tracking-wide">© 2026 Astra Ventures. All rights reserved.</p>
        <p className="text-xs font-medium tracking-wider uppercase">
          Legal entity: HSV Fund I, L.P. | Informational purposes only
        </p>
      </div>
    </footer>
  )
}
