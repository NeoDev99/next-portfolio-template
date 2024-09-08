"use client";

import React from "react";
import Image from "next/image";

import memojiImage from "@/public/assets/images/memoji-computer.png";
import grainImage from "@/public/assets/images/grain.jpg";
import ArrowDown from "@/public/assets/icons/arrow-down.svg";
import StarIcon from "@/public/assets/icons/star.svg";
import SparkleIcon from '@/public/assets/icons/sparkle.svg';

import { HeroOrbit } from "@/components/ui/HeroOrbit";

const Hero = () => {
  return (
    <section className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        
        <HeroOrbit size={430} rotation={-14} enableOrbit orbitDuration="30s" enableSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} enableOrbit orbitDuration="32s" enableSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} enableOrbit orbitDuration="34s" enableSpin>
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>

        <HeroOrbit size={530} rotation={178} enableOrbit orbitDuration="36s" enableSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} enableOrbit orbitDuration="38s" enableSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} enableOrbit orbitDuration="40s" enableSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300"/>
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} enableOrbit orbitDuration="42s" enableSpin>
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} enableOrbit orbitDuration="44s" enableSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} enableOrbit orbitDuration="46s" enableSpin>
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} enableOrbit orbitDuration="48s" enableSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300"/>
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Available for new projects</div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experience
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional, 
            high-performing web applications. Let&apos;s discuss your next project.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;