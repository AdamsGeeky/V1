import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import cover from '@site/static/img/geeky.jpg'
import { FaDev,FaGithub,FaLinkedin } from "react-icons/fa";



const FeatureList = [
  {
    title: '🔥 Dive Into Practical Learning',
    Svg: require('@site/static/img/Hand.svg').default,
    description: (
      <>
 Geek Ink provides curated content, real-world examples, and interactive experiences to ensure your learning is practical and applicable. From programming basics to version control, we've got you covered.
      </>
    ),
  },
  {
    title: '💡 Learning & Growth',
    Svg: require('@site/static/img/mentor.svg').default,
    description: (
      <>
        Geek Ink is more than just a platform; it's a mindset. Embrace a culture of continuous learning, explore new skills, and stay ahead in a rapidly evolving tech landscape. Knowledge is your superpower!
      </>
    ),
  },
  {
    title: '🌍 Accessible Education for All',
    Svg: require('@site/static/img/Team.svg').default,
    description: (
      <>
         We believe that education should be accessible to everyone, regardless of background or circumstances. Geek Ink strives to break down barriers, provide high-quality resources, and make tech education inclusive and available to all.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function About(){
  return(
    <div className='about'>
      <div className='left'>
        <img src={cover} />
        <div className='socails'>
           <a href='https://dev.to/adamusgeeky' className='icons' ><FaDev /></a>
          <a href='https://github.com/AdamsGeeky' className='icons' ><FaGithub/></a>
          <a href='https://www.linkedin.com/in/adamu-muhammad-muhammad-13456b190/' className='icons' ><FaLinkedin/></a>
        </div>
      </div>

      <div className='right'>
        <h1>Our Story:</h1>
        <p>
        Geek Ink was born from my personal passion for learning and my desire to share that passion with others. As a Computer Science student at <a href='https://gsu.edu.ng/home/'>G.S.U</a> and a Software Engineering trainee at <a href='https://www.alxafrica.com/'>ALX</a>,I realized how education can truly transform the world of technology. Inspired by this realization, I created Geek Ink as a platform that combines my love for open-source, commitment to learning, and goal of making tech education accessible to everyone.
        </p>
      </div>
    </div>
  )
}
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container"> 
      <About/>          
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
       
       </div>
      
    </section>
  );
}
