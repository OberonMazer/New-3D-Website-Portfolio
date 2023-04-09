import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
    variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
    <div
    options={{
      max: 45,
      scale: 1,
      speed: 450
    }}
    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
    flex justify-evenly items-center flex-col'
    >
    <img 
    src={icon}
    alt={title}
    className='w-16 h-16 object-contain'
    />
    <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
    </div>
    </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
      variants={fadeIn('', '', 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      I graduated from the Superior Course of Technology in Digital Games at IFRJ, which I was exposed to subjects such as Object Orientated languages (C# and Java), Animation and 3D Modeling, Animation and 2D Design, Audio, Management Classes, in addition to activities of game creation carried out each period. Currently studying subjects related to Full-Stack Web development and Data Science through platforms such as Udemy and Kaggle; in conjunction with a Bachelor in Computer Science through IBMR and an on-going post-graduation in Data Science in the same institute. I have a certificate from Digital Innovation One for completing a course related to the Kotlin language, and Udemy certificates in Database and SQL language (MySQL, SQL Server and MongoDB) and Data Science (R, JupyterLab). I currently work as a freelancer full-stack web developer for my personal brand "Cyber Horizon", which takes any request for site development. In here I use a wide variety of technologies for delivering sites for my clients.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')