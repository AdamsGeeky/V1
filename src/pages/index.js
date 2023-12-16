import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div class="container">
          <h1 class="hero__title">{siteConfig.title}</h1>
          <p class="hero__subtitle">{siteConfig.tagline}</p>
          <div>
            <button class="button button--secondary button--lg">Get Started</button>
          </div>
        </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`home | ${siteConfig.title}`}
      description="Geek ink is a collection of resources for Skill first Programmers to learn Why, How, and What <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
