import clsx from 'clsx'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'

const PartnersList = [
    {
        pic: require('@site/static/img/Pantami.jpg').default,
        url: 'https://www.google.com/maps/place/Pantami+Primary+School/@10.2728921,11.1637847,16z/data=!4m17!1m10!4m9!1m4!2m2!1d11.1700038!2d10.2769412!4e1!1m3!2m2!1d11.1715095!2d10.2670963!3m5!1s0x10ffd00b562a08a7:0x5804cac97fe2fd1a!8m2!3d10.2674072!4d11.1680449!16s%2Fg%2F11dxdz0bpm?entry=ttu'
    },
    {
        pic: require('@site/static/img/opls.png').default,
        url: 'https://github.com/open-source-learners'
    },
    {
        pic: require('@site/static/img/gdg.png').default,
        url: 'https://gdg.community.dev/gdg-gombe/'
    }
]

function Partner({pic, url}) {
    return (
   <div className={clsx('col col-demo')}>
     <div className="avatar avatar--vertical">
        <Link href={url}>
            <img
            className="avatar__photo avatar__photo--xl"
            src={pic}
            alt="Partner Avatar"
            />        
        </Link>
    </div>

   </div>
    )
}
   


export default function Partners() {
    return (
        <section className={styles.diver}>
            <h3 className="text--center">Our Partners</h3>
            <div className="container">
                <div className="row">
                    {PartnersList.map((props, idx) => (
                        <Partner key={idx} {...props} />
                    ))}
                                 
                </div>
            </div>
        </section>
    );
}
