import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Stack, Typography } from "@mui/material";

function createData(stt, code, title, dates, actions) {
  return { stt, code, title, dates, actions };
}

const rows = [
  createData(
    1,
    "Tin chưa đăng",
    <Stack direction="row" gap={2}>
      <img
        width="160px"
        src="https://batdongsan.com.vn/sellernet/static/media/no-photo.2de8b38e.svg"
        alt="temp-image"
      />
      <Typography>test test test test</Typography>
    </Stack>,
    <>
      <Typography>18 giờ 23</Typography>
      <Typography>18/10/2023</Typography>
    </>
  ),
  createData(
    2,
    "Tin chưa đăng",
    <Stack direction="row" gap={2}>
      <img
        width="160px"
        src="https://batdongsan.com.vn/sellernet/static/media/no-photo.2de8b38e.svg"
        alt="temp-image"
      />
      <Typography>test test test test</Typography>
    </Stack>,
    <>
      <Typography>18 giờ 23</Typography>
      <Typography>18/10/2023</Typography>
    </>
  ),
];

export default function DraftPostTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell align="left">Mã tin</TableCell>
            <TableCell align="left">Tiêu đề</TableCell>
            <TableCell align="left">Ngày cập nhật</TableCell>
            <TableCell align="left">Chức năng</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.stt}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.stt}</TableCell>
              <TableCell align="left">{row.code}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.dates}</TableCell>
              <TableCell align="left">
                <Button onClick={() => {}}>Sửa tin</Button>
                <Button onClick={() => {}}>Xóa</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
