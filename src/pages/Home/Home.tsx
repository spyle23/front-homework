import React, { useState, useCallback, useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { SearchKeyword } from "../../components/Input/SearchKeyword";
import { ReactComponent as PresentationIcon } from "../../assets/Image/presentation.svg";
import axios from "axios";
import { searchPlace } from "../../API/places/query";
import { IPlace } from "../../interfaces/Place";
import { CardPresenter } from "../../components/Card/CardPresenter";
import { CustomModal } from "../../components/Dialog/CustomModal";

export const Home = React.memo(() => {
  const [search, setSearch] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [places, setPlaces] = useState<IPlace[]>([]);
  const [placeChecked, setPlaceChecked] = useState<IPlace>();
  const [isData, setIsData] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearch(e.target.value);
  };
  const handleClear = () => {
    setIsData(true);
    setPlaces([]);
    setSearch("");
  };
  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition(position.coords.latitude + "," + position.coords.longitude);
    });
  };

  const getVenues = async () => {
    const params = {
      //   type: "place",
      ll: position,
      // client_id: process.env.REACT_APP_CLIENT_ID || "",
      // client_secret: process.env.REACT_APP_CLIENT_SECRET || "",
      query: search,
      //   oauth_token: process.env.REACT_APP_API_KEY,
      v: "20221016",
    };
    const data = await searchPlace(params);
    if (data) {
      setPlaces([...data]);
    }
  };

  const handleSearch = async () => {
    setIsData(false);
    await getVenues();
  };
  const handleSetOpen = (place: IPlace) => {
    setOpen(true);
    setPlaceChecked(place);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container>
      <Typography variant="h1" sx={{ textAlign: "center", my: 2 }}>
        Front-homework
      </Typography>
      <SearchKeyword
        title="Keyword"
        placeholder="Search place..."
        sx={{ my: 2 }}
        value={search}
        onChange={handleChange}
        clear={handleClear}
        onSearch={handleSearch}
      />
      <Grid container spacing={2}>
        {places.map((place) => (
          <Grid key={place.fsq_id} item xs={12} sm={6} md={4}>
            <CardPresenter place={place} onClick={handleSetOpen} />
          </Grid>
        ))}
      </Grid>
      {isData && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "30%" }}>
            <Typography variant="body2" sx={{ fontSize: "1.5rem" }}>
              Want to go somewhere?
            </Typography>
            <Typography variant="body2">
              This app can help you to find place that you want. It's simple,
              type the keyword of the place where you want to go
            </Typography>
          </Box>
          <PresentationIcon style={{ width: "50%" }} />
        </Box>
      )}
      {open && placeChecked && (
        <CustomModal open={open} place={placeChecked} onClose={handleClose} />
      )}
    </Container>
  );
});
