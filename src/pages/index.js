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
          <h1 className="hero__title">🚀 Unleash Your Tech Potential! 🚀</h1>
          <p className="hero__subtitle text--center padding-horiz--md">
          Geekink empowers you to unlock your tech potential. With valuable advice, practical tutorials, and open-source advocacy, we're here to fuel your growth and inspire you to make a difference in the world of technology. Let's embark on this exciting journey together!
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
