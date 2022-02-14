import { List, ListItem, ListItemButton, ListItemText, ListSubheader, Paper } from "@mui/material"
import { useSelector } from "react-redux";

import './Home.css';

const Home = () => {
    const {name, email} = useSelector((state) => state.login);

    return(
        <div className="home-page">
            <Paper elevation={4}>
                <List
                    sx={{ width: '100%', maxWidth: 360 }}
                    component="ul"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Welcome
                        </ListSubheader>
                    }
                    >
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary={`Name: ${name}`} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary={`Email: ${email}`} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Paper>
        </div>
    )
}

export default Home;