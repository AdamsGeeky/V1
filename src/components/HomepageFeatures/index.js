import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import cover from '@site/static/img/geeky.jpg'
import { FaDev,FaGithub,FaLinkedin } from "react-icons/fa";



const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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
           <a href='#' className='icons' ><FaDev /></a>
          <a href='#' className='icons' ><FaGithub/></a>
          <a href='#' className='icons' ><FaLinkedin/></a>
        </div>
      </div>

      <div className='right'>
        <h1>About</h1>
        <p>
          lourem
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
