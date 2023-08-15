// import { Chicago } from 'react-chicago';
import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.container}>
      <span className={styles.typer}>
        {/* <Chicago
              text="Knowledge shared is knowledge multiplied; mentorship is the spark that ignites this multiplication."
              color="#2e8555"
              interval="100"
              cursorColor="tomato"
              cursorStyle="default" 
              /> */}
        </span>
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
