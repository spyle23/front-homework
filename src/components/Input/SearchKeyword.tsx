import React, { FC } from "react";
import { TextField, Box, InputBase, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Cancel } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchKeywordProps {
  sx?: any;
  value: string;
  placeholder?: string;
  title: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  onSearch: () => void;
  clear: () => void;
}

export const SearchKeyword: FC<SearchKeywordProps> = React.memo(
  ({ sx, placeholder, onChange, onSearch, clear, value, title }) => {
    return (
      <Box sx={sx}>
        <Typography variant="h5">{title}</Typography>
        <Box
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            height: "43px",
            border: "1px solid #CACACA",
            borderRadius: "5px",
          }}
        >
          <InputBase
            onChange={onChange}
            value={value}
            sx={{ ml: 1, flex: 1 }}
            placeholder={placeholder || "Rechercher..."}
          />
          {value ? (
            <IconButton sx={{ p: "10px" }} aria-label="search" onClick={clear}>
              <Cancel />
            </IconButton>
          ) : null}
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton sx={{ p: "10px" }} aria-label="search" onClick={onSearch}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
    );
  }
);
