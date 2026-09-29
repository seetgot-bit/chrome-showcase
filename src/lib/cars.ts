import porsche from "@/assets/porsche-911-carrera-gts.jpg.asset.json";
import bentley from "@/assets/bentley-continental-gt.jpg.asset.json";
import bmw from "@/assets/bmw-x7-m60i.jpg.asset.json";
import mercedes from "@/assets/mercedes-benz-g-63-amg.jpg.asset.json";
import tesla from "@/assets/tesla-model-s-plaid.jpg.asset.json";

export type Car = { id: string; make: string; model: string; year: number; mileage: string; price: number; type: string; image: string; engine: string; color: string; description: string; features: string[] };
export const cars: Car[] = [
  { id: "bentley-continental", make: "Bentley", model: "Continental GT", year: 2021, mileage: "6,500", price: 220000, type: "Coupe", image: bentley.url, engine: "6.0L W12", color: "Glacier White", description: "Grand touring at its most refined. A beautifully appointed cabin and effortless performance define this exceptional Continental GT.", features: ["Mulliner specification", "Naim audio", "Touring specification", "Heated leather seats"] },
  { id: "bmw-x7", make: "BMW", model: "X7 M60i", year: 2023, mileage: "1,200", price: 110000, type: "SUV", image: bmw.url, engine: "4.4L V8", color: "Alpine White", description: "Commanding presence meets remarkable comfort in BMW's flagship performance SUV.", features: ["M Sport package", "Panoramic roof", "Harman Kardon audio", "Head-up display"] },
  { id: "mercedes-g63", make: "Mercedes-Benz", model: "G 63 AMG", year: 2021, mileage: "12,000", price: 185000, type: "SUV", image: mercedes.url, engine: "4.0L V8", color: "Deep Blue", description: "An unmistakable icon with handcrafted performance and a commanding road presence.", features: ["AMG performance exhaust", "Burmester audio", "360° camera", "Nappa leather"] },
  { id: "tesla-model-s", make: "Tesla", model: "Model S Plaid", year: 2023, mileage: "2,400", price: 105000, type: "Sedan", image: tesla.url, engine: "Tri-motor electric", color: "Pearl White", description: "A new benchmark in electric performance, pairing breathtaking acceleration with everyday usability.", features: ["Plaid powertrain", "Glass roof", "Premium connectivity", "Autopilot"] },
  { id: "porsche-911", make: "Porsche", model: "911 Carrera GTS", year: 2022, mileage: "5,200", price: 145000, type: "Coupe", image: porsche.url, engine: "3.0L flat-six", color: "Guards Red", description: "The Porsche 911 Carrera GTS offers a perfect blend of performance and everyday usability, powered by a twin-turbocharged flat-six.", features: ["Sport Chrono package", "BOSE sound system", "Adaptive sport seats", "Sport exhaust"] },
  { id: "porsche-911-gts", make: "Porsche", model: "911 GTS Heritage", year: 2022, mileage: "3,800", price: 159000, type: "Coupe", image: porsche.url, engine: "3.0L flat-six", color: "Guards Red", description: "An iconic silhouette, meticulous engineering, and a drive that stays with you long after the road ends.", features: ["Sport Chrono package", "Premium leather", "Sport exhaust", "LED matrix headlights"] },
];
export const formatPrice = (price: number) => "$" + price.toLocaleString("en-US");
