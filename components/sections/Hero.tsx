import React from 'react';
import Image from 'next/image';

import memojiImage from '@/public/assets/images/memoji-computer.png';
import ArrowDown from '@/public/assets/icons/arrow-down.svg';

const Hero = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">Available for new projects</div>
          </div>
        </div>

        <h1 className="font-serif text-3xl text-center mt-8 tracking-wide">
          Building Exceptional User Experience
        </h1>
        <p className="mt-4 text-center text-white/60">
          I specialize in transforming designs into functional, 
          high-performing web applications. Let&apos;s discuss your next project.
        </p>

        <div className="flex flex-col items-center mt-8 gap-4">
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