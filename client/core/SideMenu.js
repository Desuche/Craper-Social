import React from "react";
import { Card, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import { Box, Divider, Drawer, List, ListItem, ListItemText, ListItemIcon, Paper, Grid } from '@material-ui/core'
import Toolbar from "@material-ui/core"




const useStyles = makeStyles(theme => ({
    root: theme.mixins.gutters({
        maxWidth: 100,
        margin: 'auto',
        padding: theme.spacing(3),
        marginTop: theme.spacing(5)
    }),
    title: {
        margin: `${theme.spacing(2)}px ${theme.spacing(1)}px 0`,
        color: theme.palette.protectedTitle,
        fontSize: '1em'
    }
}))


const drawer = (
    <div>
        <Box sx={{ overflow: 'auto' }}>
        <Divider />
        <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem key={text}>

                    <ListItemText primary={text} />

                </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem key={text}>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
        </Box>
    </div>
);

export default function SideMenu() {
    const classes = useStyles();





    return (
        <div>
                <Drawer
        variant="permanent"
        sx={{
          width: 80,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 80, boxSizing: 'border-box' },
        }}
      >
                    {drawer}
                </Drawer>
        </div>
    )

}