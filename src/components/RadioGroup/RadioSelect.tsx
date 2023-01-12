import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { FC } from "react";
import { SORT } from "../../interfaces/params";

interface RadioSelectProps {
  sx?: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}

export const RadioSelect: FC<RadioSelectProps> = React.memo(({ onChange, sx }) => {
  return (
    <FormControl>
      {/* <FormLabel id="demo-radio-buttons-group-label">Sort</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={SORT.POPULAR}
        onChange={onChange}
        name="sort"
        sx={sx}
      >
        <FormControlLabel
          value={SORT.POPULAR}
          control={<Radio />}
          label="popular"
        />
        <FormControlLabel
          value={SORT.NEWEST}
          control={<Radio />}
          label="newest"
        />
      </RadioGroup>
    </FormControl>
  );
});
