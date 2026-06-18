import React from 'react'
import { TypeAnimation } from "react-type-animation";
import Tilt from 'react-parallax-tilt'
import ProfileImg from '../../assets/profile2.jpeg'



const About = () => {
  return (
    <section
      id='about'
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>

        {/* Left Side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>

          {/* Greeting */}
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
            Hi, I'm
          </h1>

          {/* Name */}
          <h2 className='text-4xl sm:text-5xl md:text-7xl font-bold text-purple-500 mb-4 leading-tight'>
            Hooria Hoor
          </h2>

          {/* Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
  I am a{" "}
  <TypeAnimation
    sequence={[
      "Frontend Developer",
      2000,
      "UI/UX Designer",
      2000,
      "Coder",
      2000,
      "Problem Solver",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="text-purple-500"
  />
</h3>

          {/* About Paragraph */}
          <p className='text-gray-400 mt-8 mb-10 leading-relaxed text-base sm:text-lg md:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquid aperiam commodi veritatis labore asperiores velit
            fuga impedit distinctio necessitatibus optio, quos
            praesentium debitis! Asperiores libero optio at laudantium
            reprehenderit esse!
          </p>

          {/* Resume Button */}
          <a
            href='https://docs.google.com/document/d/1ULz_XWySKBFS0cf9fBTO7ghrCz-h4yjW/edit?usp=sharing&ouid=111102826989725525640&rtpof=true&sd=true'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg transition duration-300 hover:scale-105'
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 20px #8245ec'
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
            
            {/* Right side */}
            <div className='md:w-1/2 flex justify-center md:justify-end ml-15'>
            <Tilt className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-purple-700 rounded-full'
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
              perspective={1000}
              transitionSpeed={1000}
              scale={1.05}
              gyroscope={true}  
            >
              <img
              src={ProfileImg}
               alt="Hooria Hoor"
            className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'
            />
            </Tilt>
            
            
            </div>
      </div>
    </section>
  )
}

export default About