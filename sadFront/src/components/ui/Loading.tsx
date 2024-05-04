import { Box, CircularProgress } from "@mui/material";
import Styles from "../../Styles";
import clsx from "clsx";

export function Loading() {
    const globalClasses = Styles();

    return (
        <Box className={clsx(globalClasses.fullyCenter)} sx={{ p: 3, height: '100%', width: '100%'}}>
          <CircularProgress />
        </Box>
      );
}