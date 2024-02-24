import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Service from '../Service';

const FeatureList = [
  {
    title: 'Explore',
    Svg: require('@site/static/img/Search.svg').default,
    description: (
      <>
        Discover a wealth of resources, tutorials, and community-driven knowledge.
      </>
    ),
  },
  {
    title: 'Engage',
    Svg: require('@site/static/img/enge.svg').default,
    description: (
      <>
       Pose questions, share your insights, and dive into collaborative coding challenges.
      </>
    ),
  },
  {
    title: 'Thrive',
    Svg: require('@site/static/img/Hand.svg').default,
    description: (
      <>
        Progress beyond syntax  understand the "why" and "how" of coding with purpose.
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
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center">
          <Heading as="h2">🚀 Your Journey Starts Here</Heading>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        {/* <Service/> */}
      </div>
    </section>
  );
}
