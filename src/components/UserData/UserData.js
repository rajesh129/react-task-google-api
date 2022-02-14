import { Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchUserById} from '../../stores/userDataSlice'
import ShowFollowers from "./ShowFollowers";
import ShowUser from "./ShowUser";

import './UserData.css'

const defaultHelperText = "for example: octocat, rajesh129"

const UserData = () => {
    const dispatch = useDispatch();
    const {login, imageUrl, userType} = useSelector(state => state.userData);
    const {followers} = useSelector(state => state.follower);
    const [isError, setIsError] = useState(false);
    const [helperText, setHelperText] = useState(defaultHelperText)
    const [username, setUsername] = useState('');
    console.log(followers);
    const usernameChange = (event) => {
        setIsError(false);
        setHelperText(defaultHelperText)
        setUsername(event.target.value);
    }

    const findUser = () => {
        if(!username) {
            setIsError(true);
            setHelperText("Username cannot be empty")
            return
        }
        dispatch(fetchUserById(username));
    }
    return(
        <div className="user-data">
            <Paper elevation={4} sx={{width: 600, padding: 3}}>
                <Typography variant='h5' textAlign="center" sx={{marginBottom: 2}}>Display user details</Typography>
                <TextField error={isError} id="enter-username" helperText={helperText} label="Enter username" variant="outlined" value={username} onChange={usernameChange} />
                <Button variant="contained" sx={{marginLeft: 2}} onClick={findUser}>Find</Button>
                {login && <ShowUser login={login} imageUrl={imageUrl} userType={userType} /> }
                {followers !== null && (
                <>
                    <Typography variant="h6" color="text.secondary" sx={{marginTop: 2, marginBottom: 2}}>
                        Followers
                    </Typography>
                    <ShowFollowers />
                </>
                )}
            </Paper>
        </div>
    )
};

export default UserData;