"use client";

import { useState } from "react";
import Section from "./layout/Section";
import { motion, AnimatePresence } from "motion/react";
import { Gift, PenTool, Truck, ShoppingBag } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Choose the Occasion",
    description: "Browse curated collections for Diwali, Eid, Rakhi, or Anniversaries. Filter by relationship or religion.",
    icon: ShoppingBag,
    image: "/choose.png", 
  },
  {
    id: 2,
    title: "Curate Your Hamper",
    description: "Select a pre-designed luxury box or build your own with premium sweets, dry fruits, and decor.",
    icon: Gift,
    image: "/hampers.webp",
  },
  {
    id: 3,
    title: "Personalise & Schedule",
    description: "Add a heartfelt note or video message. Choose the exact date and time slot for the delivery.",
    icon: PenTool,
    image: "/pers.png",
  },
  {
    id: 4,
    title: "Real-Time Tracking",
    description: "Receive updates via WhatsApp and Email. Get a photo proof upon delivery.",
    icon: Truck,
    image: "/track1.png", 
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="bg-white border-t border-stone-200">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT: Vertical Timeline (Roadmap) */}
          <div className="relative pt-8">
            <h2 className="font-serif text-4xl mb-12 text-stone-900">
              The Journey <br />
              <span className="italic text-stone-400 text-2xl">of your gift.</span>
            </h2>

            <div className="absolute left-6 top-32 bottom-10 w-px bg-stone-200 hidden md:block" />

            <div className="space-y-12 relative z-10">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                
                return (
                  <div 
                    key={step.id}
                    className="group flex gap-8 cursor-pointer relative"
                    onMouseEnter={() => setActiveStep(idx)}
                    onClick={() => setActiveStep(idx)} // For mobile tap
                  >
                    {/* Number / Icon Bubble */}
                    <div className={`
                      shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 z-10 bg-white
                      ${isActive ? 'border-amber-700 bg-amber-700 text-white shadow-lg scale-110' : 'border-stone-200 text-stone-400 group-hover:border-amber-700/50'}
                    `}>
                      <step.icon className="w-5 h-5" />
                    </div>

                    {/* Text Content */}
                    <div className="pt-2">
                      <h4 className={`
                        font-serif text-xl mb-3 transition-colors duration-300
                        ${isActive ? 'text-stone-900' : 'text-stone-400 group-hover:text-stone-600'}
                      `}>
                        {step.title}
                      </h4>
                      
                      {/* Accordion-style description reveal */}
                      <motion.div
                        initial={false}
                        animate={{ 
                          height: isActive ? "auto" : "auto", 
                          opacity: isActive ? 1 : 0.6 
                        }}
                        className="overflow-hidden"
                      >
                        <p className={`text-sm leading-relaxed max-w-sm ${isActive ? 'text-stone-600' : 'text-stone-400 hidden md:block'}`}>
                          {step.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Dynamic Image Stage */}
          <div className=" h-full min-h-[500px] flex items-center sticky top-20">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-stone-100 transform rotate-2 rounded-lg -z-10" />
            
            <div className="relative w-full aspect-3/4 bg-white shadow-2xl overflow-hidden rounded-sm border-4 border-white">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Overlay Gradient for text readability if needed */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge (Updated Position) */}
            <div className="absolute -bottom-8 -right-8 bg-stone-900 text-white p-6 shadow-xl z-20">
               <div className="flex flex-col items-center">
                 <p className="font-serif text-3xl italic">100%</p>
                 <div className="h-px w-8 bg-stone-600 my-2"></div>
                 <p className="text-[10px] uppercase tracking-[0.2em]">Verified</p>
               </div>
            </div>

          </div>

        </div>
      </Section>
    </div>
  );
}