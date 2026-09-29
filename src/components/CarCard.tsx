import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Car } from "@/lib/cars";
import { formatPrice } from "@/lib/cars";
export function CarCard({ car }: { car: Car }) {
 return <Link to="/cars/$id" params={{ id: car.id }} className="car-card group">
   <div className="car-image-wrap"><img src={car.image} alt={`${car.make} ${car.model}`} loading="lazy"/><span className="year-badge">{car.year}</span><span className="car-image-arrow"><ArrowUpRight size={21}/></span></div>
   <div className="car-card-body"><span className="car-make">{car.make}</span><h3>{car.model}</h3><p className="car-meta">{car.year}<span>•</span>{car.mileage} mi<span>•</span>Automatic</p><div className="car-card-bottom"><strong>{formatPrice(car.price)}</strong><span>CERTIFIED <span className="verified-dot">●</span></span></div></div>
 </Link>
}
