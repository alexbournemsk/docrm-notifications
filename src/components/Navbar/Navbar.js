import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
import { mainNavbarItems } from '../consts/navbarListItems';
import { navbarStyles } from './styles';
import { useNavigate } from 'react-router-dom';
import { drawerWidth } from './styles';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Navbar = () => {


    const navigate = useNavigate();

    return (
        <Grid item style={{ width: drawerWidth }}>
            <Drawer
                sx={navbarStyles.drawer}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    {mainNavbarItems.map(({ id, icon, label, route }) => (
                        <ListItem key={id} disablePadding
                            onClick={() => navigate(route)}>
                            <ListItemButton>
                                {icon}
                                <ListItemText primary={label} sx={{ fontWeight: 700 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />

                <div>
                    <IconButton sx={{ color: 'rgb(139, 161, 192)', ml: '5px' }}
                        onClick={() => navigate('settings')}
                    ><SettingsOutlinedIcon /></IconButton>

                    <IconButton sx={{ color: 'rgb(139, 161, 192)', ml: '5px' }}
                        onClick={() => navigate('filter')}
                    ><FilterAltIcon /></IconButton>
                </div>

            </Drawer>
        </Grid>
    )
}

export default Navbar