import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"


const Academics = () => {

    const formTable = (qualification, percentage, major, university) => {
        return {
            qualification,
            percentage,
            major,
            university
        }
    }

    const rows = [
        formTable("Bachelor of Engineering", 6.8, "Electronics and Instrumentation Engineering", "Anna University"),
        formTable("Diploma", 70, "Electronics and Communication Engineering", "DOTE"),
        formTable("SSLC", 77, "Matriculation", "LF Mat. Higher Sec. School"),
    ]

    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Academics</TableCell>
                        <TableCell align="left">CGPA/Percent</TableCell>
                        <TableCell align="left">Major</TableCell>
                        <TableCell align="left">University</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.qualification}
                        </TableCell>
                        <TableCell align="left">{row.percentage}</TableCell>
                        <TableCell align="left">{row.major}</TableCell>
                        <TableCell align="left">{row.university}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
    )
}

export default Academics;