import Section from "./layout/Section";
import { ArrowRight } from "lucide-react";
import WorldMap from "@/components/ui/world-map"; // Ensure path is correct

export default function FeatureReverse() {
  return (
    <div className="bg-stone-100">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <span className="text-amber-700 uppercase tracking-widest text-xs font-bold mb-4 block">
              Global Access
            </span>
            <h2 className="font-serif text-4xl mb-6">For the Global Citizen.</h2>
            <p className="text-stone-600 leading-relaxed mb-8">
              You miss celebrating with family. You want to surprise someone on
              their big day. But you demand reliability. We bridge the gap
              between New York, London, Dubai, and your home in India. Pay
              securely from any country.
            </p>

            <a
              href="#"
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest border-b border-stone-900 pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors"
            >
              View Collections <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Right: World Map Animation */}
          <div className="order-1 lg:order-2 w-full">
            <WorldMap
              lineColor="#b45309" // Amber-700
              dots={[
                {
                  start: { lat: 40.7128, lng: -74.0060 }, // New York
                  end: { lat: 28.6139, lng: 77.2090 },   // New Delhi
                },
                {
                  start: { lat: 51.5074, lng: -0.1278 }, // London
                  end: { lat: 28.6139, lng: 77.2090 },   // New Delhi
                },
                {
                  start: { lat: 25.2048, lng: 55.2708 }, // Dubai
                  end: { lat: 19.0760, lng: 72.8777 },   // Mumbai
                },
                {
                  start: { lat: -33.8688, lng: 151.2093 }, // Sydney
                  end: { lat: 12.9716, lng: 77.5946 },    // Bangalore
                },
              ]}
            />
          </div>
        </div>
      </Section>
    </div>
  );
}