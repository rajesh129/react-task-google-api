import { AppBar, Avatar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Button } from "@mui/material";
import { push } from "connected-react-router";
import { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../stores/logoutSlice";
import { loginReset } from "../../stores/loginSlice";

const Header = () => {
    const dispatch = useDispatch();
    const {name, imageUrl} = useSelector((state) => state.login);
    const [anchorElUser, setAnchorElUser] = useState("");
    const initialLinkState = {
        home: false,
        academics: false,
        userData: false,
    }
    const [linkStatus, setLinkStatus] = useState({...initialLinkState, home: true});

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const navToHome = () => {
        setLinkStatus({...initialLinkState, home: true});
        dispatch(push('/home'));
    }

    const navToAcademics = () => {
        setLinkStatus({...initialLinkState, academics: true})
        dispatch(push('/academics'));
    }

    const navToUserData = () => {
        setLinkStatus({...initialLinkState, userData: true})
        dispatch(push('/userdata'));
    }

    const onLogoutSuccess = () => {
        dispatch(push('/'));
        dispatch(logoutSuccess());
        dispatch(loginReset())
    }
    
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1}}>
                        <Button variant={linkStatus.home ? "outlined" : "text"} color="inherit" onClick={navToHome}>Home</Button>
                        <Button variant={linkStatus.academics ? "outlined" : "text"} color="inherit" onClick={navToAcademics}>Academics</Button>
                        <Button variant={linkStatus.userData ? "outlined" : "text"} color="inherit" onClick={navToUserData}>User Data</Button>
                    </Box>
                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title={name}>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={name} src={imageUrl} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                <GoogleLogout 
                                    clientId="870932471327-614on922chrdfo9fk456tmhk76cba24r.apps.googleusercontent.com"
                                    buttonText="Logout" 
                                    icon={false}
                                    onLogoutSuccess={onLogoutSuccess}
                                    tag="a" />
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;