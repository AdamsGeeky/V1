import Layout from '@theme/Layout';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';

const services = [
  {
    img: require('@site/static/img/Pantami.jpg').default,
    title: 'Web Development Services',
    description:
      'Crafting cutting-edge websites and applications to elevate your online presence. Our solutions are tailored to meet your unique vision and business goals.',
  },
  {
    img: require('@site/static/img/Pantami.jpg').default,
    title: 'Tech Lab Setup & Software Installation',
    description:
      'Creating seamless tech environments for learning, business, and community development. From device setups to software installations, we ensure a fully functional tech space.',
  },
  {
    img: require('@site/static/img/Pantami.jpg').default,
    title: 'Project Assistance',
    description:
      'Transforming your tech dreams into reality with comprehensive project support. From research to implementation, we assist you at every step of your software development projects.',
  },
  {
    img: require('@site/static/img/Pantami.jpg').default,
    title: 'OS Installation and Formatting',
    description:
      'Effortlessly install and format operating systems on your devices. We ensure a smooth and efficient process, giving your devices a fresh start for optimal performance.',
  },
];


export default function Services() {
  return (
    <Layout title="Services">
      <Box sx={{pt: { xs: 4, sm: 12 }, pb: { xs: 8, sm: 16 }, 
      color: 'black', 
      borderWidth: '5px',
      }}>
          <Container
          sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: { xs: 3, sm: 6 },
          }}
          >
            <Typography component="h2" variant="h4">
                Services
            </Typography>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {services.map((item, index) => (
                <Grid item key={index} xs={4} sm={4} md={6}>
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      boxShadow: '0 4px 8px 0 rgba(0, 10, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                      borderRadius: '10px',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '200px',
                      }}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        width={100}
                        height={100}
                      />
                    </Box>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body1">{item.description}</Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
      </Box>   
    </Layout>
  );
}