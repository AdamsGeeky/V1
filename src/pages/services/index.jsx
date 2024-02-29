import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const services = [
  {
    img: require('@site/static/img/engineer.png').default,
    title: 'Web Development Services',
    description:
      'Crafting cutting-edge websites and applications to elevate your online presence. Our solutions are tailored to meet your unique vision and business goals.',
    url: '/docs/python',
  },
  {
    img: require('@site/static/img/pro.png').default,
    title: 'Project Assistance',
    description:
      'Transforming your tech dreams into reality with comprehensive project support. From research to implementation, we assist you at every step of your software development projects.',
  },
  {
    img: require('@site/static/img/h03.jpg').default,
    title: 'OS Installation and Formatting',
    description:
      'Effortlessly install and format operating systems on your devices. We ensure a smooth and efficient process, giving your devices a fresh start for optimal performance.',
    url: '/docs/python',
  },
  {
  img: require('@site/static/img/coach.png').default,
  title: '1 to 1 Mentorship',
  description:
    'our one-to-one programming mentorship. Our experienced mentors provide tailored guidance, addressing your specific learning needs and accelerating your growth in the tech landscape.',
},
];

function Service({img, title, description, url}) {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia
        sx={{ height: '40vh' }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"
        sx={{ textAlign: 'center' }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" 
        sx={{ 
          textAlign: 'center',
          color: 'black.400',
          fontSize: '16px',
          maxWidth: { sm: '100vw', md: '60vw' },
          maxHeight: { sm: '100vh', md: '60vh' },
          textAlign: { sm: 'center', md: 'center' },
      }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link href={url} >
            Learn More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default function Services() {
  return (
    <Layout title="Services">
      <Container maxWidth="lg" sx={{ pt: 4, pb: 4 }}>
        <Typography component="h1" variant="h3" align="center" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Service {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}