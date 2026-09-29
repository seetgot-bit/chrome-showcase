import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, BadgeCheck, ShieldCheck, Truck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CarCard } from "@/components/CarCard";
import { DemoForm } from "@/components/DemoForm";
import { SectionLabel } from "@/components/SiteChrome";
import { cars } from "@/lib/cars";
import porsche from "@/assets/porsche-911-carrera-gts.jpg.asset.json";
import bentley from "@/assets/bentley-continental-gt.jpg.asset.json";

export const Route = createFileRoute("/")({
 head: () => ({ meta: [{ title: "AutoElite Motors | Drive the Extraordinary" }, { name: "description", content: "Explore an exceptional collection of certified pre-owned luxury and performance vehicles at AutoElite Motors." }, { property: "og:title", content: "AutoElite Motors | Drive the Extraordinary" }, { property: "og:description", content: "A curated collection of luxury and performance cars." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
 component: Home,
});
function Home() {
 return <main>
   <section className="hero"><img className="hero-image" src={porsche.url} alt="Red Porsche 911 Carrera GTS on a woodland road"/><div className="shell hero-content"><SectionLabel>PRESTIGE SELECTION / 2026</SectionLabel><h1 className="display hero-title reveal"><span>DRIVE THE</span><em>EXTRAORDINARY.</em></h1><p className="hero-sub reveal-delay">An exceptional collection for those who believe the journey should be as remarkable as the destination.</p><div className="hero-actions reveal-delay"><Button variant="showroom" size="lg" asChild><Link to="/inventory">EXPLORE SHOWROOM <ArrowUpRight/></Link></Button><Button variant="showroomOutline" size="lg" asChild><a href="#process">OUR APPROACH <ArrowRight/></a></Button></div><div className="hero-index"><strong>01</strong> / 05 &nbsp; — &nbsp; THE ART OF DRIVING</div></div></section>
   <div className="shell trust-strip"><span><ShieldCheck size={19}/> 160-POINT INSPECTION</span><span><BadgeCheck size={19}/> CERTIFIED COLLECTION</span><span><Truck size={19}/> WHITE-GLOVE DELIVERY</span><span><Sparkles size={19}/> UNCOMPROMISING QUALITY</span></div>
   <section className="shell section-space"><div className="section-heading"><div><SectionLabel>THE COLLECTION</SectionLabel><h2 className="display">SHOWROOM <em>ELITE.</em></h2></div><Link to="/inventory" className="text-link">VIEW FULL COLLECTION <ArrowUpRight size={18}/></Link></div><div className="car-grid">{cars.slice(0,6).map(car => <CarCard key={car.id} car={car}/>)}</div></section>
   <section className="legacy"><div className="legacy-image"><img src={bentley.url} alt="Bentley Continental GT" loading="lazy"/></div><div className="legacy-copy"><SectionLabel>THE LEGACY / EST. 1999</SectionLabel><h2 className="display">BEYOND THE <em>ORDINARY.</em></h2><blockquote>“The right car isn't just a purchase. It's a feeling you carry with you.”</blockquote><p>AutoElite began with one simple belief: extraordinary cars deserve an extraordinary experience. Our hand-selected collection brings together timeless design, exhilarating performance, and attention to every detail.</p></div></section>
   <section id="process" className="shell section-space"><div className="section-heading"><div><SectionLabel>THE AUTOELITE STANDARD</SectionLabel><h2 className="display">EVERY DETAIL <em>MATTERS.</em></h2></div><p>From first discovery to the open road, every step is considered.</p></div><div className="process-grid">{[
     ["01","CURATION","Only exceptional vehicles make the cut. Every car is selected for its condition, character, and provenance."],
     ["02","VERIFICATION","A thorough inspection gives you confidence in every curve, finish, and mile ahead."],
     ["03","PERSONALIZATION","Explore the right car at your pace, with an experience shaped around what matters to you."],
     ["04","HANDOVER","From showroom to driveway, the final moment should feel just as special as the first."],
   ].map(([n,title,text]) => <div className="process-item" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>
   <section className="cta-band"><img src={porsche.url} alt="Porsche 911 ready for the open road" loading="lazy"/><div className="shell"><SectionLabel>YOUR NEXT CHAPTER</SectionLabel><h2 className="display">OWN THE <em>MOMENT.</em></h2><p>Your next extraordinary drive starts with the right car.</p><Button variant="showroom" size="lg" asChild><Link to="/inventory">DISCOVER THE COLLECTION <ArrowUpRight/></Link></Button></div></section>
   <section id="contact" className="shell section-space contact-layout"><div><SectionLabel>PRIVATE CONSULTATION</SectionLabel><h2 className="display">LET'S <em>TALK CARS.</em></h2><p>Have your eye on something? Tell us what inspires you and we'll help you discover your next drive.</p><div className="contact-facts"><div><span>LOCATION</span><strong>MONTRÉAL, QUÉBEC</strong></div><div><span>VIEWINGS</span><strong>BY APPOINTMENT</strong></div><div><span>PLEASE NOTE</span><strong>DEMONSTRATION SHOWROOM</strong></div></div></div><DemoForm/></section>
 </main>
}
