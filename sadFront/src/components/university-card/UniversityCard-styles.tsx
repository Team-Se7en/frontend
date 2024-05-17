import { Box, Card } from "@mui/material";
import styled from "styled-components";
import theme from "../../Theme";

export const StyledWrapper = styled(Box)(() => ({
    background: 'transparent',
    // minWidth: '40rem',
    // minHeight: '20rem',
    height: '100%',
    width: '100%',
}));

export const StyledUniversityCard = styled(Card)(() => ({
    width: '100%',
    height: '20rem',
    // position: 'relative',
    // backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginTop: 'auto',
    marginBottom: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledUniversityIcon = styled('img')(() => ({
    position: 'absolute',
    top: '-4rem',
    left: 'calc(50% - 4rem)',
    height: '8rem',
    width: '8rem',
    zIndex: '2',
    borderRadius: '4rem',
}));
