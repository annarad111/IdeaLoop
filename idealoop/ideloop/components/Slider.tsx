
import Link from 'next/link';
import React, { useState } from 'react';
import { FullPage, Slide } from 'react-full-page';


const controlsProps = {
  style: {
    left: '95%',
    paddingTop: '10px',
    position: 'fixed',
    display: 'grid',
    top: '50%',
    transform: 'translateX(-50%)',
    text: '',
    fontsize: '0',
  },
};

const slides = [
  {
    color: '#2ECC40',
    content: 1,
  }, {
    color: '#0074D9',
    content: 2,
  }, {
    color: '#00c4ff',
    content: 3,
  }, {
    color: '#d52685',
    content: 4,
  },
];

const btnStyles = {
  position: 'fixed',
  padding: '8px',
};

export default function FullPageExample() {
  const [visibleSlides, setVisibleSlides] = useState(slides);
  const onHideSlideClick = () => {
    if (visibleSlides.length === slides.length) {
      setVisibleSlides(slides.slice(0, -1));
      return;
    }
    setVisibleSlides(slides);
  };

  return (
    <>
      <FullPage controls controlsProps={controlsProps}>
      <Slide>
          <section className='sec'>
            <div className="overlay"></div>
                <video src='/videos/homepage.mp4' autoPlay loop muted className='video2'></video>
                <div className='videoback'>
                    <h1 className='titlelogo'>IdeaLoop</h1>
                    <h2 className='titleonvideo'>Helping programmers</h2>
                    <button className='buttononvid'>
                    <Link href="/about">
                <a>Learn more</a>
                </Link></button>
            </div>
        </section>
          </Slide>
          <Slide className='slide2'>
            <div className='slide2'>

            </div>
          </Slide>  
      </FullPage>
    </>
  );
}
