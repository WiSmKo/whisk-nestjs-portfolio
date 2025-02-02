import Image from "next/image";
import williamProfile from "@/app/william.jpg";
import config from "@/config";
import linkedinsvg from "@/app/linkedin.svg";
import githubsvg from "@/app/github.svg";
import { link } from "fs";

interface HeroContactLinkProps {
  svg: string;
  url: string;
}

const contactLinks: HeroContactLinkProps[] = [
  {
    svg: githubsvg.src,
    url: "https://github.com/yourusername",
  },
  {
    svg: linkedinsvg.src,
    url: "https://www.linkedin.com/in/yourprofile",
  },
];

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">

        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Hello, world
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          My name is William.
        </p>

      </div>
      <div className="lg:w-full">
        <Image
          src={williamProfile}
          alt="William on a mountain, but not in South America."
          className="w-60 aspect-square rounded-full object-cover"
          priority={true}
          //style={{ borderRadius: "50%" }} // border-radius="50%"
        />
      </div>
      <div className="flex gap-4">
        {contactLinks.map(({ svg, url }, index) => (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer">
            <img src={svg} alt="Contact link" className="w-8 h-8" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
