import React from 'react'
import ProjectCard from '../components/Project/ProjectCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

const Project = () => {
  const Images = [
    {
      cardImg1: 'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022',
      cardImg2: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b'
    },
    {
      cardImg1: 'https://k72.ca/images/caseStudies/BEST/BEST_site_menu_Thumbnail.jpg?w=1280&h=960&s=d3b20d81946c6a7f4a6cd7ce1cfbb0fd',
      cardImg2: 'https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c'
    },
    {
      cardImg1: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
      cardImg2: 'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda'
    }
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from('.hero', {
      height: '100px',
      stagger: { amount: 0.6 },
      scrollTrigger: {
        trigger: '.mainDiv',
        start: 'top 70%',
        end: 'top -120%',
        scrub: true,
      }
    });
  });

  return (
    <div className="lg:p-4 overflow-x-hidden">
      <div className="lg:pt-[20vw] pt-[40vw]">
        <h2 className="font-[font2] uppercase text-4xl sm:text-6xl lg:text-[13vw] font-bold text-black">
          Projects
        </h2>
      </div>
      <div className="mainDiv space-y-6 lg:space-y-0 overflow-hidden lg:space-x-4">
        {Images.map((elem, idx) => (
          <div
            key={idx}
            className="hero flex flex-col lg:flex-row gap-4 pb-4"
          >
            <ProjectCard image1={elem.cardImg1} image2={elem.cardImg2} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
