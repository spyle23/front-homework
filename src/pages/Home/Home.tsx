import React, { useState, useCallback, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { SearchKeyword } from "../../components/Input/SearchKeyword";
import axios from "axios";

export const Home = React.memo(() => {
  const [search, setSearch] = useState<string>("");
  const [position, setPosition] = useState<string>("");
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

  const getVenues = () => {
    const endPoint =
      process.env.REACT_APP_FOURSQUARE_API_URL + "/v3/places/search";

    const params = {
      //   type: "place",
      ll: position,
      client_id: process.env.REACT_APP_CLIENT_ID || "",
      client_secret: process.env.REACT_APP_CLIENT_SECRET || "",
      query: search,
      //   oauth_token: process.env.REACT_APP_API_KEY,
      v: "20221016",
    };
    axios
      .get(endPoint, {
        headers: {
          accept: "application/json",
          Authorization: process.env.REACT_APP_API_KEY,
        },
        params: { ...params },
      })
      .then((result) => console.log(result));
  };

  const handleSearch = async () => {
    getVenues();
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
