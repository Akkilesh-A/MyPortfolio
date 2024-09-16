import React from 'react'
import VortexWrapper from '../VortexWrapper';
import { badgesData } from '@/data';
import Image from 'next/image';
import { BackgroundGradient } from '../ui/BackgroundGradient';
import { Heading } from '../ui';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Badges = () => {
  return (
    <VortexWrapper>
        <section id="badges" className="text-white flex flex-col gap-16">
            <Heading text={"Badges "}/>
            <div className='flex flex-col sm:flex-row items-center justify-center flex-wrap gap-16'>
                {badgesData.map(({href,name,description,fileName},index)=>{
                    return(
                        <BackgroundGradient key={index} className="rounded-[22px] sm:max-w-[25vw] max-w-[60vw] p-4 sm:p-10 bg-white dark:bg-zinc-900">
                            <Image
                            src={`/badges/${fileName}`}
                            alt="jordans"
                            height="200"
                            width="200"
                            className="object-contain"
                            />
                            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            {name}
                            </p>
                    
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {description}
                            </p>
                            <a href={href}>
                                <button className="rounded-full pl-4 pr-1 py-1 text-white flex gap-2 items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                    <span>Verify</span>
                                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-4 py-3 text-white">
                                        <FaExternalLinkAlt />
                                    </span>
                                </button>
                            </a>
                        </BackgroundGradient>
                    )
                })}
            </div>     
        </section>   
    </VortexWrapper>
  )
}

export default Badges