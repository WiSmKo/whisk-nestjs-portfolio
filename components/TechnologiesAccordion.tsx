"use client";

import { useState, useRef } from "react";
import type { FC, JSX } from "react";
import Image from "next/image";
import { ITechnology } from "@/models/Technology";

interface accordionProps {
  technologies: ITechnology[];
}

// An SEO-friendly accordion component including the title and a description (when clicked.)
const Item = ({ technology, isOpen, setTechnologySelected }: {
  index: number;
  technology: ITechnology;
  isOpen: boolean;
  setTechnologySelected: () => void;
}) => {
  const accordion = useRef(null);
  const { name, description } = technology;

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
        onClick={(e) => {
          e.preventDefault();
          setTechnologySelected();
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${
            isOpen ? "text-primary font-semibold" : ""
          }`}
        >
          <h3 className="inline">{name}</h3>
        </span>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{description}</div>
      </div>
    </li>
  );
};

const Media = ({ technology }: { technology : ITechnology }) => {
  const { name, description, image } = technology;
  const style = "rounded-2xl aspect-square w-full sm:w-[26rem]";
  const size = {
    width: 500,
    height: 500,
  };

    return (
      <Image
        src={image.url}
        alt={image.alt}
        className={`${style} object-cover object-center`}
        width={size.width}
        height={size.height}
      />
    );
};

// A component to display 2 to 5 features in an accordion.
// By default, the first feature is selected. When a feature is clicked, the others are closed.
const TechnologiesAccordion: FC<accordionProps> = ({ technologies }) => {
  const [technologySelected, setTechnologySelected] = useState<number>(0);

  if(!technologies || technologies.length === 0){
    return (
      <section className="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100 " id="technologies">
        <div className="px-8">
          <p className="text-lg opacity-80 leading-relaxed"> No technologies found</p>
        </div>
      </section>
    )
  } 

  return (
    <section
      className="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100 "
      id="technologies"
    >
      <div className="px-8">
        <h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-12 md:mb-24">
          My key
          <span className="bg-neutral text-neutral-content px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">
            technologies
          </span>
        </h2>
        <div className=" flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
            <ul className="w-full">
              {technologies.map((technology, i) => (
                <Item
                  key={technology.name}
                  index={i}
                  technology={technology}
                  isOpen={technologySelected === i}
                  setTechnologySelected={() => setTechnologySelected(i)}
                />
              ))}
            </ul>

            <Media technology={technologies[technologySelected]} key={technologySelected} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesAccordion;
