import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Our vision',
    Svg: require('@site/static/img/vision.svg').default,
    description: (
      <>
       GeekInk envisions a future where technology is a catalyst for change, where every individual in the North has the opportunity to thrive in the digital world. We see a community of tech enthusiasts equipped with knowledge, supported by mentorship, and empowered to create impactful solutions.
      </>
    ),
  },
  {
    title: 'Our Mission',
    Svg: require('@site/static/img/mission.svg').default,
    description: (
      <>
     Our mission is to be the catalyst for tech empowerment. GeekInk strives to provide more than just courses; we offer a journey—a journey of growth, discovery, and accomplishment. We are here to transform aspirations into skills, potential into proficiency, and dreams into successful careers
      </>
    ),
  },
  {
    title: 'Mentorship as a Foundation',
    Svg: require('@site/static/img/team.svg').default,
    description: (
      <>
        We believe that mentorship is the key to unlocking one's full potential. GeekInk is not just a learning platform; it's a community where experienced mentors guide and support learners on their tech journey. Your success is our success.
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
          <Heading as="h2">🚀 The GeekInk Difference</Heading>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
