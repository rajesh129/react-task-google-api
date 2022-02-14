import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const ShowFollowers = () => {

    const {followers} = useSelector((state) => state.follower);
    const [rows, setRows] = useState([]);

    const formTable = (login, type, image) => {
        return {
            login,
            type,
            image,
        }
    }

    useEffect(() => {
        if(followers.length > 0) {
            const data = followers?.map((follower) => formTable(follower.login, follower.type, follower.avatar_url));
            setRows(data);
        }
    }, [followers])

    if(followers.length <= 0) {
        return <Typography variant="subtitle2">You have 0 followers</Typography>
    }

    return(
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>User</TableCell>
                        <TableCell align="left">User type</TableCell>
                        <TableCell align="left">Display Image</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.login}
                            </TableCell>
                            <TableCell align="left">{row.type}</TableCell>
                            <TableCell align="left">
                                <Avatar alt={row.name} src={row.image} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
    )
}

export default ShowFollowers;