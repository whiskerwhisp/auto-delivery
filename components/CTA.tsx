// components/CTA.tsx
import { ChevronDown } from "lucide-react";
import Section from "./layout/Section";

export default function CTA() {
  return (
    <div className="bg-[#2D2D2D] w-full py-3 px-6 border-t border-stone-700">
      <Section>
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-8">

          <div className="text-white max-w-md text-center xl:text-left">
            <h3 className="font-serif text-2xl mb-1">Join the Waitlist</h3>
            <p className="text-stone-400 text-sm">
              We're launching soon. Join the waitlist and be the first to get notified!
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-3 w-full xl:w-auto items-stretch">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white px-4 py-3 min-w-[220px] text-sm"
            />

            <div className="relative pb-6">
              <div className="flex bg-white">
                <div className="relative border-r border-gray-200">
                  <select className="appearance-none pl-4 pr-8 py-3 text-sm font-bold">
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+1">🇨🇦 +1</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+966">🇸🇦 +966</option>
                    <option value="+65">🇸🇬 +65</option>
                    <option value="+60">🇲🇾 +60</option>
                    <option value="+965">🇰🇼 +965</option>
                    <option value="+974">🇶🇦 +974</option>
                    <option value="+968">🇴🇲 +968</option>
                    <option value="+973">🇧🇭 +973</option>
                  </select>
                  <ChevronDown className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 text-stone-500" />
                </div>

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="px-4 py-3 w-full text-sm"
                />
              </div>
              <span className="absolute bottom-0 left-0 right-0 text-stone-400 text-xs text-center">(Optional)</span>
            </div>

            <button className="bg-[#F3EDE7] text-[#2D2D2D] px-8 py-3 uppercase text-xs font-bold tracking-widest hover:bg-amber-100 transition-colors whitespace-nowrap shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5">
              Join Waitlist
            </button>
          </div>

        </div>
      </Section>
    </div>
  );
}
