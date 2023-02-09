import { createTheme } from '@mui/material';
import { fontFamily } from '@mui/system';

const theme = createTheme({
    typography: {
        fontFamily: ['Open Sans','"Montserrat"'].join(',')
    }
})

export default theme;