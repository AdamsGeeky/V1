import clsx from 'clsx';


import AdamsGeeky from '@site/static/img/AdamsGeeky.png';

  

const Mentor = () => {

    return (
      <>
        <div className={clsx('col col--4')}>
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={AdamsGeeky}
              alt="Mentor Avatar"
            />
          </div>
        </div>
        <div className={clsx('col col--8')}>
          <div className="avatar__intro">
              <div className="avatar__name">
                <strong className='padding-horiz--md'>Adams Geeky</strong>
                <strong>CEO</strong>
              </div>
            </div>
            <div className="avatar__summary">
              Adams Geeky is a software engineer who has been working on web and mobile development for 5 years.
            </div>
        </div>
        </>
    );
  };  
export default function Mentors() {
  return (
<section>
<h3 className="text--center ">Our Mentors</h3>
<div className="container item shadow--tl">
<div className="row">
  <Mentor />
</div>
</div>
</section>
  );
}