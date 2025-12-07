import Section from "./layout/Section";

// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400  px-6 border-t border-stone-800">
      <Section>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

        <div className="max-w-sm">
          <h4 className="text-white font-serif text-2xl mb-6">Real Emotions. <br />Delivered.</h4>
          <p className="text-sm mb-6">
            Our mission is simple: bring you closer to home.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-end w-full md:w-auto">
          <span className="uppercase text-xs tracking-widest text-stone-500">Stay Connected</span>
          <div className="flex w-full md:w-80 border-b border-stone-700 pb-2">
            <input type="email" placeholder="Email Address" className="bg-transparent w-full text-white" />
            <button className="text-white uppercase text-xs font-bold">Join</button>
          </div>
          <p className="text-[10px] uppercase tracking-widest mt-4 opacity-50">© 2025 Tyohar</p>
        </div>

      </div>
      </Section>
    </footer>
  );
}
