import React from 'react';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { drawerWidth } from '../../Navbar/styles';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const menu = [
    'Common',
    'Notifications',
    'Editor',
    'Classificators',
    'Themes',
]

export default function Settings() {
    return (
        <div style={{
            paddingLeft: drawerWidth + 20,
           

        }}>

            <div style={{
                gridColumn: '1 /span 12',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
            >
                <div style={{
                    fontSize: '30px',
                    fontWeight: 600,
                    lineHeight: 1.33
                }}
                >Notifications</div>


                <div style={{
                    textAlign: 'right',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    <input type="text"   style={{
                        minWidth: '250px',
                        marginRight: '20px',
                        borderRadius: '30px',
                        border: '0',
                        padding: '12px'
                    }} />

                    <div style={{
                        fontSize: '14px',
                        fontWeight: 'normal',
                    }}
                    >Doe J<br />
                        Director</div>
                    <AccountCircleIcon sx={{ fontSize: 50, color: '#999' }} />
                </div>
            </div>

            <div style={{
                gridColumn: '1 /span 12',
                display: 'flex',

            }}>

                {menu.map(({ item }) => (
                    <div style={{
                        marginRight: '20px',
                    }}>{item}</div>
                ))}


            </div>

            <div style={{
                gridColumn: '1 /span 12',

            }}>row 3</div>



        </div>
    )
}
