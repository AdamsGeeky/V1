
import Link from '@docusaurus/Link'
import styles from './styles.module.css'
import { Avatar } from '@mui/material'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import Container from '@mui/material/Container'

const CourseList = [
    {
        pic: require('@site/static/img/basic.jpeg').default,
        url: '/docs/basic/',
        title: 'Basic Computing'
    },
    {
        pic: require('@site/static/img/advanceExcel.jpg').default,
        url: '/docs/excel',
        title: 'Advance Excel'
    },
    {
        pic: require('@site/static/img/python.png').default,
        url: '/docs/python',
        title: 'Python'
    },
    // {
    //     pic: require('@site/static/img/stack.png').default,
    //     url: '/docs/mern/intro',
    //     title: 'Mern Stack'
    // },
    // {
    //     pic: require('@site/static/img/nodejs.png').default,
    //     url: '/docs/node/intro',
    //     title: 'NodeJS'
    // },
    // {
    //     pic: require('@site/static/img/reactjs.png').default,
    //     url: '/docs/react/intro',
    //     title: 'ReactJS'
    // },
    // {
    //     pic: require('@site/static/img/java.jpg').default,
    //     url: '/docs/java/intro',
    //     title: 'Java'
    // },
    
]
function Course({pic, url, title}) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
            }}
        >
            <Link href={url} className={styles.card}>
                <Avatar
                    alt={title}
                    src={pic}
                    sx={{ width: 120, height: 120 }}
                />
                <Typography variant="h6">{title}</Typography>
            </Link>
        </Box>
    )
}
   


export default function Courses() {
    return (
       <Box sx={{pt: { xs: 4, sm: 12 }, pb: { xs: 8, sm: 16 }, 
       color: 'black', 
       bgcolor: '#f5f5f6',
       borderWidth: '5px',
       }}>
           <Container
           sx={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               gap: { xs: 3, sm: 6 },
           }}
           >
            <Typography component="h2" variant="h4">
                Courses
          </Typography>
          <Typography variant="body1" sx={{ 
            color: 'black.400',
            fontWeight: '400',
            fontSize: '20px',
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
            }}>
           Are you ready to not just learn but be mentored by the best? GeekInk proudly introduces a stellar lineup of courses meticulously crafted by industry leaders and open-source advocates. Get ready to be guided by the experts who have shaped the tech landscape and are eager to share their invaluable insights with you!
          </Typography>
               <Box
               sx={{
                   width: { sm: '100%', md: '60%' },
                   display: 'flex', 
                   flexDirection: 'row',
                   flexWrap: 'wrap',
                   justifyContent: 'center',
                   gap: { xs: 3, sm: 6 },
               }}
               >
                   {CourseList.map((props, idx) => (
                       <Course key={idx} {...props} />
                   ))}
               </Box>
           </Container>
       </Box>
    );
}
