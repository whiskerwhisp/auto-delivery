// components/FeatureBlock.tsx
import Section from "./layout/Section";

export default function FeatureBlock() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        <div className="aspect-4/5 bg-stone-200 overflow-hidden shadow-lg group">
          <img src="/feature1.png" alt="Diwali Hamper"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div>
          <span className="text-amber-700 uppercase text-xs font-bold mb-4 block">
            The Experience
          </span>

          <h2 className="font-serif text-4xl mb-6">Festival-Ready Gifting.</h2>

          <p className="text-stone-600 mb-8">
           Whether it is the lights of Diwali or the warmth of Christmas, we curate gifts that match the tradition. 
              No mass production. Only premium, personal artifacts that feel like they came from your hands.
          </p>

          <ul className="space-y-4 text-sm font-medium">
            {["Diwali, Eid, Christmas", "Raksha Bandhan, Bhai Dooj", "Curated Regional Hampers"]
              .map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-amber-700 rounded-full"></span>
                  {item}
                </li>
            ))}
          </ul>
        </div>

      </div>
    </Section>
  );
}
