import { drawerWidth } from '../../Navbar/styles';

export const settingsStyles = {
        paddingLeft: drawerWidth + 20,
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingRight: '10px',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'rgb(227, 228, 230)',
        display: 'grid',
        gridTemplateRows: 'auto auto 1fr',
        gridTemplateColumns: 'repeat(12, 1fr)'
}