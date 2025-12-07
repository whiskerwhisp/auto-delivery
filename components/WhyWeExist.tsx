// components/WhyWeExist.tsx
import Section from "./layout/Section";
import { Clock, Gift, ShieldCheck } from "lucide-react";

export default function WhyWeExist() {
  const items = [
    {
      icon: Clock,
      title: "Express Delivery",
      desc: "We ship to 10,000+ pin codes...",
    },
    {
      icon: Gift,
      title: "Customisable Hampers",
      desc: "Mix sweets, dry fruits, notes...",
    },
    {
      icon: ShieldCheck,
      title: "Photo Confirmation",
      desc: "Get a photo before delivery...",
    },
  ];

  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl">Why We Exist</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {items.map((item, i) => (
          <div key={i} className="text-center group">
            <div className="mx-auto w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center group-hover:bg-amber-100 transition">
              <item.icon className="w-10 h-10 text-stone-400 group-hover:text-amber-700" />
            </div>

            <h3 className="font-serif text-xl mb-3">{item.title}</h3>
            <p className="text-stone-500 text-sm px-4">{item.desc}</p>
          </div>
        ))}

      </div>
    </Section>
  );
}
