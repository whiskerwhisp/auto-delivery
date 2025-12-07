// components/Gallery.tsx
import Section from "./layout/Section";

export default function Gallery() {
  const items = [
    {
      label: "Sweets",
      image: "/sweets.avif",
    },
    {
      label: "Flowers",
      image: "/flowers.png",
    },
    {
      label: "Hampers",
      image: "/hampers.png",
    },
  ];

  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-96">
        {items.map((item, idx) => (
          <div key={idx} className="relative group overflow-hidden bg-stone-200">
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute bottom-6 left-6 text-white font-serif text-2xl drop-shadow-lg">
              {item.label}
            </div>

            {/* Optional overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
          </div>
        ))}
      </div>
    </Section>
  );
}
