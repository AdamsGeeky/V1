import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Partners from '../components/Partners'
import Courses from '../components/Courses';
import FAQ from '../components/Why';
import styles from './index.module.css';
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div class="container">
          <h1 class="hero__title">{siteConfig.title}</h1>
          <p class="hero__subtitle">
          we believe in the transformative power of technology 
          </p>
          <div>
           <Link to={"/docs/intro"} className={clsx('item shadow--tl')}>
           <button class="button button--secondary button--lg ">
              Explore Our Courses
            </button> 
           </Link>
          </div>
        </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout 
      title={`home`}
      description="Geek ink is a collection of resources for Skill first Programmers to learn Why, How, and What <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Courses/>
        <FAQ/>
        <Partners/>
      </main>
    </Layout>
  );
}
