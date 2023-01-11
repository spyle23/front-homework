import React, { useState, useCallback } from "react";
import { Container, Typography } from "@mui/material";
import { SearchKeyword } from "../../components/Input/SearchKeyword";

export const Home = React.memo(() => {
  const [search, setSearch] = useState<string>("");
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearch(e.target.value);
  };
  const handleClear = () => {
    setSearch("");
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
        onSearch={() => console.log(search)}
      />
    </Container>
  );
});
