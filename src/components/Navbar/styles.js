const drawerWidth = 240;

export const navbarStyles = {

    drawer: {

        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            backgroundColor: '#192233',
            color: 'rgb(139, 161, 192)',
            width: drawerWidth,
            boxSizing: 'border-box',
            fontWeight: 700,
            fontSize: 26
        },

        '& .MuiSvgIcon-root': {
            mr: '15px',
        },

        '&  .MuiTypography-root': {
            fontSize: '14px',
            fontWeight: 600
        },

        '&  .MuiTypography-root:hover': {
            color: 'rgb(0, 113, 255)',
        },

        '&  .MuiTypography-root:selected': {
            color: 'rgb(0, 113, 255)',
        },

    },


};