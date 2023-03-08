import { drawerWidth } from '../../components/Navbar/styles';

export const filterPagesStyles = {
    paddingLeft: drawerWidth + 20,
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingRight: '10px',
    width: '100%',
    minHeight: '100vh',
    display: 'grid',
    backgroundColor: 'rgb(227, 228, 230)',
    gridTemplateRows: 'auto auto 1fr',
    gridTemplateColumns: 'repeat(12, 1fr)'
}