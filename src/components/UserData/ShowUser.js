import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { useDispatch } from "react-redux";
import {fetchFollowersByUser} from '../../stores/followerSlice'

const ShowUser = ({imageUrl, login, userType}) => {
    const dispatch = useDispatch()

    const showFollowers = () => {
        dispatch(fetchFollowersByUser(login))
    }

    return (
        <Card sx={{ maxWidth: 345, marginTop: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt={login}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {login}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {`User type: ${userType}`}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={showFollowers}>Show followers</Button>
            </CardActions>
            </Card>
    )
}

export default ShowUser;