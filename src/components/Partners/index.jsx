import Link from '@docusaurus/Link'
import { Avatar } from '@mui/material'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';

const PartnersList = [
    {
        pic: require('@site/static/img/Pantami.jpg').default,
        url: 'https://www.google.com/maps/place/Pantami+Primary+School/@10.2728921,11.1637847,16z/data=!4m17!1m10!4m9!1m4!2m2!1d11.1700038!2d10.2769412!4e1!1m3!2m2!1d11.1715095!2d10.2670963!3m5!1s0x10ffd00b562a08a7:0x5804cac97fe2fd1a!8m2!3d10.2674072!4d11.1680449!16s%2Fg%2F11dxdz0bpm?entry=ttu'
    },
    {
        pic: require('@site/static/img/opls.png').default,
        url: 'https://github.com/open-source-learners'
    },
    // {
    //     pic: require('@site/static/img/gdg.png').default,
    //     url: 'https://gdg.community.dev/gdg-gombe/'
    // }
]

function Partner({pic, url}) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
            }}
        >
            <Link href={url} >
                <Avatar
                    alt="Pantami"
                    src={pic}
                    sx={{ width: 120, height: 120 }}
                />
            </Link>
        </Box>
    )
}
   
export default function Partners() {
    return (
       <Box sx={{pt: { xs: 4, sm: 12 }, pb: { xs: 8, sm: 16 }, 
       color: 'black', 
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
                Partners
          </Typography>
          <Typography variant="body1" sx={{ 
            color: 'black.400',
            fontWeight: '400',
            fontSize: '20px',
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'center', md: 'center' },
            }}>We are proud to be a part of these organizations
          </Typography>
          <Grid container spacing={2}>
              {PartnersList.map((item, index) => (
                <Grid item  key={index}
                  xs="auto" sm={6} md={4}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                <Link href={item.url}>
                  <Stack
                    direction="column"
                    color="inherit"
                    component={Card}
                    spacing={1}
                    useFlexGap
                    sx={{
                      p: 3,
                      height: '100%',
                      borderColor: 'grey.800',
                      background: 'transparent',
                      borderRadius: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      gap: 2
                    }}
                  >
                    <Box sx={{  
                        ":hover": {
                            opacity: 0.5
                        },
                        transition: 'opacity 0.3s ease',
                    }}>
                    <Avatar
                        alt="Pantami"
                        src={item.pic}
                        sx={{ width: 120, height: 120 }}
                    />
                    </Box>
                  </Stack>
                </Link>
                </Grid>
              ))}
          </Grid>
          </Container>
       </Box>
    );
}
