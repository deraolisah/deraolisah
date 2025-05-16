import React from 'react';
import { Link } from "react-router-dom";
import { DotButtons, useDotButton } from './DotButtons.jsx';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './ArrowButtons.jsx'
import useEmblaCarousel from 'embla-carousel-react';
import "./HeroCarousel.css";
import "./base-embla.css";
import { BsArrowUpRight } from 'react-icons/bs';

import ChristamelonImg from "../assets/christamelon-img.png";
import EasyTicketImg from '../assets/easy-tickets-img.png';
import EmekaOnyekaImg from "../assets/emeka-onyeka-img.png";
// import TrendMartImg from '../assets/portfolio2.jpg';
import DelightImg from "../assets/delight-img.png";

const HeroCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide cursor-grab flex flex-col md:gap-4 gap-2 group">
            <div className="overflow-hidden w-full md:max-h-80 max-h-60 md:rounded-3xl rounded-2xl">
              <img 
                className='object-cover object-center transition-all duration-400 group-hover:scale-[1.04]' 
                src={ChristamelonImg} 
                alt='Christamelon Foundation Presentation Image' 
              />
            </div>
            <div className='w-full mt-4 flex flex-col items-start gap-2'>
              <h3 className="cursor-pointer group-hover:text-primary font-semibold">
                Christamelon Foundation 
                <span className='text-dark-gray font-normal'> - Charity Organization </span>
              </h3>
              <hr className='w-full h-1 text-primary/20'/>
              <p className=''> Multi-page &nbsp; | &nbsp; 8 Weeks &nbsp; | &nbsp; 2022 </p>
              <hr className='w-full h-1 text-primary/20'/>
              <a href='https://christamelon.netlify.app/' target='_blank' className='cursor-pointer w-full flex items-center justify-between gap-1'> Visit Project <BsArrowUpRight className='text-xs'/></a>
              <hr className='w-full h-1 text-primary/20'/>
              </div>
            </div>

          <div className="embla__slide cursor-grab flex flex-col md:gap-4 gap-2 group"> 
            <div className="overflow-hidden w-full md:max-h-80 max-h-60 md:rounded-3xl rounded-2xl">
              <img 
                className='object-cover object-center transition-all duration-400 group-hover:scale-[1.04]' 
                src='https://framerusercontent.com/images/kIf7jcI0910zDbqoih3cDAAzO9Y.png'
                alt='Corty Maxwell Presentation Image'
              />
            </div>
            <div className='w-full mt-4 flex flex-col items-start gap-2'>
              <h3 className="cursor-pointer group-hover:text-primary font-semibold">
                Corty Maxwell 
              <span className='text-dark-gray font-normal'> - Creative Designer </span> 
              </h3>
              <hr className='w-full h-1 text-primary/20'/>
              <p> 1 page &nbsp; | &nbsp; Ongoing  &nbsp; | &nbsp; 2023 </p>
              <hr className='w-full h-1 text-primary/20'/>
              <a href='https://corty.netlify.app/' target='_blank' className='cursor-pointer w-full flex items-center justify-between gap-1'> Visit Project <BsArrowUpRight className='text-xs'/></a>
              <hr className='w-full h-1 text-primary/20'/>
            </div>
          </div>

          <div className="embla__slide cursor-grab flex flex-col md:gap-4 gap-2 group">
            <div className='overflow-hidden w-full md:max-h-80 max-h-60 md:rounded-3xl rounded-2xl'>
              <img 
                className='object-cover object-center transition-all duration-400 group-hover:scale-[1.04]'
                src={EasyTicketImg}
                alt='Easy Tickets Presentation Image'
              />
            </div>
            <div className='w-full mt-4 flex flex-col items-start gap-2'>
              <h3 className="cursor-pointer group-hover:text-primary font-semibold">
                Easy Tickets
                <span className='text-dark-gray font-normal'> - Events & Lifestyle </span> 
              </h3>
              <hr className='w-full h-1 text-primary/20'/>
              <p> Multi-page &nbsp; | &nbsp; Ongoing  &nbsp; | &nbsp; 2025 </p>
              <hr className='w-full h-1 text-primary/20'/>
              <a href='https://easy-tickets.netlify.app/' target='_blank' className='cursor-pointer w-full flex items-center justify-between gap-1'> Visit Project <BsArrowUpRight className='text-xs'/></a>
              <hr className='w-full h-1 text-primary/20'/>
            </div>
          </div>

          <div className="embla__slide cursor-grab flex flex-col md:gap-4 gap-2 group">
            <div className='overflow-hidden w-full md:max-h-80 max-h-60 md:rounded-3xl rounded-2xl'>
              <img 
                className='object-cover object-center transition-all duration-400 group-hover:scale-[1.04]'
                src={EmekaOnyekaImg}
                alt='Emeka Onyeka Presentation Image'
              />
            </div>
            <div className='w-full mt-4 flex flex-col items-start gap-2'>
              <h3 className="cursor-pointer group-hover:text-primary font-semibold">
                Emeka Onyeka & Co
                <span className='text-dark-gray font-normal'> - Law Firm </span> 
              </h3>
              <hr className='w-full h-1 text-primary/20'/>
              <p> 6 pages &nbsp; | &nbsp; Completed &nbsp; | &nbsp; 2025 </p>
              <hr className='w-full h-1 text-primary/20'/>
              <a href='https://emekaonyekaandco.com/' target='_blank' className='cursor-pointer w-full flex items-center justify-between gap-1'> Visit Project <BsArrowUpRight className='text-xs'/></a>
              <hr className='w-full h-1 text-primary/20'/>
            </div>
          </div>

          <div className="embla__slide cursor-grab flex flex-col md:gap-4 gap-2 group">
            <div className='overflow-hidden w-full md:max-h-80 max-h-60 md:rounded-3xl rounded-2xl'>
              <img 
                className='object-cover object-center transition-all duration-400 group-hover:scale-[1.04]'
                src={DelightImg}
                alt='Delight Weds Fredrick Presentation Image'
              />
            </div>
            <div className='w-full mt-4 flex flex-col items-start gap-2'>
              <h3 className="cursor-pointer group-hover:text-primary font-semibold">
                Delight Weds Fredrick
                <span className='text-dark-gray font-normal'> - Wedding Ceremony </span> 
              </h3>
              <hr className='w-full h-1 text-primary/20'/>
              <p> 3 pages &nbsp; | &nbsp; Completed &nbsp; | &nbsp; 2024 </p>
              <hr className='w-full h-1 text-primary/20'/>
              <a href='https://delight-weds-fredrick.netlify.app/' target='_blank' className='cursor-pointer w-full flex items-center justify-between gap-1'> Visit Project <BsArrowUpRight className='text-xs'/></a>
              <hr className='w-full h-1 text-primary/20'/>
            </div>
          </div>

          <div className="embla__slide cursor-grab flex flex-col md:gap-4 gap-2 group">
            <div className='overflow-hidden w-full md:max-h-80 max-h-60 md:rounded-3xl rounded-2xl'>
              <img 
                className='object-cover object-center transition-all duration-400 group-hover:scale-[1.04]'
                src="https://framerusercontent.com/images/0Rsj5GaTHrj7RBXZhmeqnp1DHc.jpeg?scale-down-to=1024"
                alt='TrendMart Presentation Image'
              />
            </div>
            <div className='w-full mt-4 flex flex-col items-start gap-2'>
              <h3 className="cursor-pointer group-hover:text-primary font-semibold">
                TrendMart
                <span className='text-dark-gray font-normal'> - Fashion Store </span> 
              </h3>
              <hr className='w-full h-1 text-primary/20'/>
              <p> 12 pages &nbsp; | &nbsp; Ongoing &nbsp; | &nbsp; 2024 </p>
              <hr className='w-full h-1 text-primary/20'/>
              <a href='https://trendmartng.netlify.app/' target='_blank' className='cursor-pointer w-full flex items-center justify-between gap-1'> Visit Project <BsArrowUpRight className='text-xs'/></a>
              <hr className='w-full h-1 text-primary/20'/>
            </div>
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButtons
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex ? 'bg-primary embla__dot--selected' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroCarousel;