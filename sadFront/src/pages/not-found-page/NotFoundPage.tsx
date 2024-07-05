import clsx from "clsx";
import Styles from "../../Styles";
import { Box, Button, Typography } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../models/UserType";
import { NotFoundPageBackground } from "../../assets/images";
import theme from "../../Theme";


export function NotFoundPage() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const returnToHomePage = () => {
        if (!user) { navigate("/"); return; }

        if (user?.user_type == UserType.Professor) { navigate("/professorHomePage/page1=1/page2=1"); }
        else if (user?.user_type == UserType.Student) { navigate("/studentHomePage"); }
    };

    const globalStyles = Styles();

    return (
        <Box className={clsx(globalStyles.vCenter, globalStyles.flexColumn)} height={'100%'} sx={{ backgroundImage: `url(${NotFoundPageBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'bottom center', backgroundColor: '#F7F8F2' }}>
            <Typography variant="h2" sx={{
                mt: 4
            }}>
                Page Not Found!
            </Typography>
            <Button variant="text" onClick={returnToHomePage} sx={{ mt: 4, fontSize: '20px', color: 'darkblue' }} disableRipple>
                Return Home
            </Button>
        </Box>
    )
}