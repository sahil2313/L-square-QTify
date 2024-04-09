import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell"; // Changed import name
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";

const SongsTableContainer = styled(TableContainer)({
  backgroundColor: "#121212", // Change the background color
  margin: "10px 60px 10px 60px",
  margin: "10px auto", // Center horizontally with auto margins and add vertical margin
  maxWidth: "calc(100% - 120px)",
});

const TableCellStyled = styled(TableCell)({
  color: "white", // Change the text color
  border: "none",
  borderBottom: "1px solid white",
});

export default function SongsTable({ songs }) {
  return (
    <SongsTableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCellStyled>Title</TableCellStyled>
            <TableCellStyled>Artist</TableCellStyled>
            <TableCellStyled>Duration</TableCellStyled>
          </TableRow>
        </TableHead>
        <TableBody>
          {songs.map((song) => (
            <TableRow key={song.id}>
              <TableCellStyled
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <img
                  src={song.image}
                  alt={song.title}
                  height="60px"
                  width="50px"
                />
                {song.title}
              </TableCellStyled>
              <TableCellStyled>{song.artists}</TableCellStyled>
              <TableCellStyled>{song.durationInMs}</TableCellStyled>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </SongsTableContainer>
  );
}