import clsx from 'clsx'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'

const CourseList = [
    {
        pic: require('@site/static/img/advanceExcel.jpg').default,
        url: '/docs/excel/intro',
        title: 'Advance Excel'
    },
    {
        pic: require('@site/static/img/python.png').default,
        url: '/docs/python/intro',
        title: 'Python'
    },
    {
        pic: require('@site/static/img/stack.png').default,
        url: '/docs/mern/intro',
        title: 'Mern Stack'
    },
    {
        pic: require('@site/static/img/nodejs.png').default,
        url: '/docs/node/intro',
        title: 'NodeJS'
    },
    {
        pic: require('@site/static/img/reactjs.png').default,
        url: '/docs/react/intro',
        title: 'ReactJS'
    },
    {
        pic: require('@site/static/img/java.jpg').default,
        url: '/docs/java/intro',
        title: 'Java'
    },
    
]

function Course({pic, url, title}) {
    return (
   <div className={clsx('col col-demo')}>
     <div className="avatar avatar--vertical">
        <Link href={url}>
            <img
            className="avatar__photo avatar__photo--xl"
            src={pic}
            alt="Partner Avatar"
            /> 
            <div className="avatar__intro">
                <div className="avatar__name">
                    <strong className='padding-horiz--md'>{title}</strong>
                </div>
            </div>       
        </Link>
    </div>

   </div>
    )
}
   


export default function Courses() {
    return (
        <section className={styles.diver}>
            <h3 className="text--center">Our Courses</h3>
            <div className="container">
                <div className="row">
                    {CourseList.map((props, idx) => (
                        <Course key={idx} {...props} />
                    ))}
                                 
                </div>
            </div>
        </section>
    );
}
