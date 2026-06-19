import React from 'react'
import { TypeAnimation } from "react-type-animation";
import Tilt from 'react-parallax-tilt'
import ProfileImg from '../../assets/profile2.jpeg'



const About = () => {
  return (
    <section
      id='about'
      className='py-4 px-4 sm:px-6 md:px-[7vw] lg:px-[16vw] font-sans mt-5 md:mt-8 lg:mt-15'
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
          <p className='text-gray-400 mt-6 mb-8 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto md:mx-0'>
            I am a passionate Frontend Developer and UI/UX Designer with a strong foundation in web development. I specialize in creating visually appealing and user-friendly interfaces that provide seamless user experiences. With a keen eye for design and a love for coding, I strive to bring innovative ideas to life through clean and efficient code. My goal is to contribute to projects that make a positive impact and leave a lasting impression on users.
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
            <div className='md:w-1/2 flex justify-center md:justify-end'>
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
