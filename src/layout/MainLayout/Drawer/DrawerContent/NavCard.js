// Material-ui
import { Button, CardMedia, Link, Stack, Typography } from '@mui/material';

// Project import
import MainCard from '../../../../components/MainCard';

// assets
import avatar from '../../../../assets/images/logoFaceIdVert.png'
import AnimateButton from '../../../../components/@extended/AnimateButton';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const NavCard = () =>(
    <MainCard sx={{ bgcolor: 'grey.50', m: 3 }}>
        <Stack alignItems="center" spacing={2.5}>
            <CardMedia component="img" image={avatar} sx={{ width: 112 }} />
            <Stack alignItems="center">
                <Typography variant="h5">U-FaceId</Typography>
                <Typography variant="h6" color="secondary">
                    Políticas y Condiciones
                </Typography>
            </Stack>
            <AnimateButton>
                <Button component={Link} target="_blank" href="https://www.u-payments.com/" variant="contained" color="success" size="small">
                    Ver
                </Button>
            </AnimateButton>
        </Stack>
    </MainCard>
);

export default NavCard;
