import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cars } from "@/lib/cars";
export function DemoForm({ mode = "contact", selected }: { mode?: "contact" | "sell"; selected?: string }) {
 const [sent, setSent] = useState(false);
 function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); }
 return <form className="demo-form" onSubmit={submit}>
   {mode === "sell" && <div className="form-grid form-grid-3"><input required aria-label="Vehicle make" placeholder="Vehicle make"/><input required aria-label="Vehicle model" placeholder="Vehicle model"/><input required aria-label="Year" placeholder="Year" type="number" min="1950" max="2026"/></div>}
   {mode === "sell" && <div className="form-grid"><input required aria-label="Mileage" placeholder="Mileage"/><input aria-label="Expected price" placeholder="Expected price"/></div>}
   <div className="form-grid"><label>FULL NAME<input required placeholder="Your name"/></label><label>EMAIL ADDRESS<input required type="email" placeholder="you@example.com"/></label></div>
   <div className="form-grid"><label>PHONE NUMBER<input placeholder="(555) 000-0000"/></label>{mode === "contact" ? <label>INTERESTS<select defaultValue="Acquisition inquiry"><option>Acquisition inquiry</option><option>Financing</option><option>Private consignment</option><option>General enquiry</option></select></label> : <label>VEHICLE CONDITION<select defaultValue="Excellent"><option>Excellent</option><option>Good</option><option>Fair</option></select></label>}</div>
   {mode === "contact" && <label>VEHICLE (OPTIONAL)<select defaultValue={selected || ""}><option value="">Select a vehicle</option>{cars.map(car => <option value={car.id} key={car.id}>{car.make} {car.model}</option>)}</select></label>}
   <label>MESSAGE (OPTIONAL)<textarea rows={4} placeholder={mode === "sell" ? "Tell us about your vehicle..." : "Tell us what you're looking for..."}/></label>
   <Button variant="showroom" size="lg" type="submit" className="w-full">{mode === "sell" ? "SUBMIT APPRAISAL REQUEST" : "SEND ENQUIRY"}<ArrowUpRight size={18}/></Button>
   {sent && <p className="form-note" role="status">This is a showroom demo. Your details were not sent or saved.</p>}
 </form>
}
