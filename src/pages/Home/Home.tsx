import React, { useState, useCallback, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { SearchKeyword } from "../../components/Input/SearchKeyword";
import axios from "axios";
import { PLACE_QUERY } from "../../API/places/query";
import { Place } from "../../interfaces/Place";

export const Home = React.memo(() => {
  const [search, setSearch] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [places, setPlaces] = useState<Place[]>([]);
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearch(e.target.value);
  };
  const handleClear = () => {
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
      client_id: process.env.REACT_APP_CLIENT_ID || "",
      client_secret: process.env.REACT_APP_CLIENT_SECRET || "",
      query: search,
      oauth_token: process.env.REACT_APP_API_KEY,
      v: "20221016",
    };
    const data = await PLACE_QUERY.searchPlace(params);
    if (data) {
      console.log(data);
      setPlaces([...data]);
    }
  };

  const handleSearch = async () => {
    await getVenues();
  };
  return (
    <Container>
      <Typography variant="h1" sx={{ textAlign: "center", my: 2 }}>
        Front-homework
      </Typography>
      <SearchKeyword
        title="Mot clé"
        sx={{ my: 2 }}
        value={search}
        onChange={handleChange}
        clear={handleClear}
        onSearch={handleSearch}
      />
    </Container>
  );
});
