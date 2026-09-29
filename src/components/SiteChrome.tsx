import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Brand() {
  return <Link to="/" className="brand" aria-label="AutoElite home"><span className="brand-mark">AE</span><span>AUTO<span className="text-primary">ELITE</span></span></Link>;
}
export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="shell header-inner">
    <Brand />
    <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
      <Link to="/inventory" onClick={() => setOpen(false)} activeProps={{ className: "nav-active" }}>Inventory</Link>
      <Link to="/financing" onClick={() => setOpen(false)} activeProps={{ className: "nav-active" }}>Financing</Link>
      <Link to="/sell" onClick={() => setOpen(false)} activeProps={{ className: "nav-active" }}>Sell Your Car</Link>
      <Button asChild variant="showroom" size="sm"><Link to="/" hash="contact" onClick={() => setOpen(false)}>RESERVE NOW <ArrowUpRight size={14}/></Link></Button>
    </nav>
    <Button variant="iconGhost" size="icon" className="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button>
  </div></header>;
}
export function Footer() {
  return <footer className="site-footer"><div className="shell"><div className="footer-grid">
    <div><Brand/><p>The world's most distinguished collection of exceptional pre-owned luxury and performance cars.</p><div className="social"><Instagram size={18}/><span>IN</span><span>X</span></div></div>
    <div><span className="footer-label">DISCOVER</span><Link to="/inventory">Inventory</Link><Link to="/sell">Sell your car</Link><Link to="/financing">Financing</Link></div>
    <div><span className="footer-label">ASSISTANCE</span><Link to="/" hash="contact">Contact</Link><Link to="/" hash="process">Our process</Link><Link to="/" hash="contact">Schedule a viewing</Link></div>
    <div><span className="footer-label">THE SHOWROOM</span><strong>MONTREAL, QUEBEC</strong><p>Private viewings by appointment.<br/>All contact details shown are for demonstration only.</p></div>
  </div><div className="footer-bottom"><span>© 2026 AUTOELITE MOTORS. CONCEPT SHOWROOM.</span><span>160-POINT INSPECTION &nbsp; · &nbsp; WHITE-GLOVE DELIVERY</span></div></div></footer>;
}
export function SectionLabel({ children }: { children: React.ReactNode }) { return <span className="section-label"><span className="label-line"/>{children}</span> }
