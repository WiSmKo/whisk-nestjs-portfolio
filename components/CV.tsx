"use client";

import { IEducation } from "@/models/Education";
import { IExperience } from "@/models/Experience";
import { useRef, useState } from "react";
import type { FC, JSX } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface CvItemProps {
  experience: IExperience[]; 
  education: IEducation[];
}

class ItemInput {
    name: string;
    description: string;

    constructor(name: string, descritpion: string) {
        this.name = name;
        this.description = descritpion;
    }
}

const CvItem = ({ item }: { item: ItemInput }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.name}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.description}</div>
      </div>
    </li>
  );
};

const CV: FC<CvItemProps> = ({ education, experience }) => {
    if(!education || !experience || education.length === 0 || experience.length === 0){
        return (
          <section className="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100 " id="cv">
            <div className="px-8">
              <p className="text-lg opacity-80 leading-relaxed">CV not found</p>
            </div>
          </section>
        )
      } 
  return (
    <section className="bg-base-200" id="cv">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="basis-1/2">
            <h2 className=" text-xl lg:text-4xl tracking-tight mb-12 md:mb-24">Work</h2>
            <ul>
            {experience.map((item, i) => (
                <CvItem key={i} item={new ItemInput(item.organisation, item.description)} />
            ))}
            </ul>
        </div>
        <div className="basis-1/2">
            <h2 className="text-xl lg:text-4xl tracking-tight mb-12 md:mb-24">Education</h2>
            <ul className="basis-1/2">
            {education.map((item, i) => (
                <CvItem key={i} item={new ItemInput(item.school, item.description)} />
            ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default CV;
