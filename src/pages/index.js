import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.container}>
        <div>
          <h1 className="hero__title">🚀 Empowering Tech Enthusiasts 🚀</h1>
          <p className="hero__subtitle text--center padding-horiz--md">
          Geek Ink is your gateway to unlocking the limitless potential of the tech industry. Whether you're a beginner, a seasoned developer, or a lifelong learner, this platform is designed to empower you with the skills and mindset needed for success.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              Explore
            </Link>
        </div>
        <span className="hero__subtitle">
        Knowledge shared is knowledge multiplied.
        </span>
        <div>
        </div>
      </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Geek inking ... <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
