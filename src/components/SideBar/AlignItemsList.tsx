// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
//
// export default function AlignItemsList() {
//     return (
//         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//             <ListItem alignItems="flex-start">
//                 <ListItemAvatar>
//                     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//                 </ListItemAvatar>
//                 <ListItemText
//                     primary="Brunch this weekend?"
//                     secondary={
//                         <React.Fragment>
//                             <Typography
//                                 sx={{ display: 'inline' }}
//                                 component="span"
//                                 variant="body2"
//                                 color="text.primary"
//                             >
//                                 Ali Connors
//                             </Typography>
//                             {" — I'll be in your neighborhood doing errands this…"}
//                         </React.Fragment>
//                     }
//                 />
//             </ListItem>
//             <Divider variant="inset" component="li" />
//             <ListItem alignItems="flex-start">
//                 <ListItemAvatar>
//                     <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//                 </ListItemAvatar>
//                 <ListItemText
//                     primary="Summer BBQ"
//                     secondary={
//                         <React.Fragment>
//                             <Typography
//                                 sx={{ display: 'inline' }}
//                                 component="span"
//                                 variant="body2"
//                                 color="text.primary"
//                             >
//                                 to Scott, Alex, Jennifer
//                             </Typography>
//                             {" — Wish I could come, but I'm out of town this…"}
//                         </React.Fragment>
//                     }
//                 />
//             </ListItem>
//             <Divider variant="inset" component="li" />
//             <ListItem alignItems="flex-start">
//                 <ListItemAvatar>
//                     <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//                 </ListItemAvatar>
//                 <ListItemText
//                     primary="Oui Oui"
//                     secondary={
//                         <React.Fragment>
//                             <Typography
//                                 sx={{ display: 'inline' }}
//                                 component="span"
//                                 variant="body2"
//                                 color="text.primary"
//                             >
//                                 Sandra Adams
//                             </Typography>
//                             {' — Do you have Paris recommendations? Have you ever…'}
//                         </React.Fragment>
//                     }
//                 />
//             </ListItem>
//         </List>
//     );
// }
//
//
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import BadgeAvatars from "./StyleBadge";
import s from './SideBar.module.css';

export default function CenteredElementGrid() {
    return (
        <>
        <div className={s.friendsList}> Friends</div>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} minHeight={160}>
                <Grid xs display="flex" justifyContent="center" alignItems="center">
                    <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                </Grid>
                <Grid display="flex" justifyContent="center" alignItems="center">
                    <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                </Grid>
                <Grid xs display="flex" justifyContent="center" alignItems="center">
                    <Avatar src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                </Grid>
            </Grid>
            <BadgeAvatars/>
        </Box>

</>);
}