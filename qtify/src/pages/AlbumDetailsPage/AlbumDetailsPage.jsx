import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import Hero from "../../Components/AlbumDetailsPage/Hero/Hero";
import styles from "./AlbumDetailsPage.module.css";
import { CircularProgress, Stack, Typography } from "@mui/material";
import SongsTable from "../../Components/AlbumDetailsPage/SongsTable/SongsTable";
import Pagination from "@mui/material/Pagination";
import Player from "../../Components/Player/Player";





export default function AlbumDetailsPage() {
 
  const { data } = useOutletContext();
  const { albumSlug } = useParams();
  const { topAlbums, newAlbums } = data;
  const albumDetails = [...topAlbums, ...newAlbums];
  const album = albumDetails.find((album) => album.slug === albumSlug);
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  if (!album) {
    return   <div className={styles.center}>
    <CircularProgress />
  </div>
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const songs = album.songs.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className={styles.wrapper}>
  
     
          <Hero album={album} />
          <Stack spacing={2}>
            <Pagination
              className={styles.pagination}
              count={Math.ceil(album.songs.length / rowsPerPage)}
              page={page}
              onChange={handleChangePage}
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#34c94b !important", // Adding !important to ensure the color is applied
                },
                "& .Mui-selected": {
                  color: "#fff !important",
                  backgroundColor: "#34c94b !important",
                },
                "& .MuiPaginationItem-iconButton": {
                  color: "#34c94b !important", // Arrow color
                  backgroundColor: "#fff !important", // Background color of the arrow button
                  "&:hover": {
                    backgroundColor: "#34c94b !important", // Background color on hover
                  },
                },
              }}
            />
          </Stack>
          <SongsTable songs={songs} />
          <div className={styles.player}>
            <Player />
          </div>
   
    </div>
  );
}