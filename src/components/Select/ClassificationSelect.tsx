import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { FC } from "react";
import { CLASSIFICATION } from "../../interfaces/params";

interface ClassificationSelectProps {
  onChange: (e: SelectChangeEvent<CLASSIFICATION>) => void;
  sx?: any;
}

export const ClassificationSelect: FC<ClassificationSelectProps> = React.memo(
  ({ onChange, sx }) => {
    return (
      <FormControl sx={sx}>
        <InputLabel id="demo-simple-select-label">Classification</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="classification"
          onChange={onChange}
        >
          <MenuItem value={CLASSIFICATION.FOOD}>food</MenuItem>
          <MenuItem value={CLASSIFICATION.INDOOR}>indoor</MenuItem>
          <MenuItem value={CLASSIFICATION.MENU}>menu</MenuItem>
          <MenuItem value={CLASSIFICATION.OUTDOOR}>outdoor</MenuItem>
        </Select>
      </FormControl>
    );
  }
);
