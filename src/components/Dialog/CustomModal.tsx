import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { IPlace, ITips } from "../../interfaces/Place";
import { getPlaceTips } from "../../API/places/query";

interface CustomModalProps {
  place: IPlace;
  open: boolean;
  onClose: () => void;
}

export const CustomModal: FC<CustomModalProps> = React.memo(
  ({ place, open, onClose }) => {
    const [tips, setTips] = useState<ITips[]>([]);
    const { country, formatted_address, region } = place.location;
    useEffect(() => {
      (async () => {
        const data = await getPlaceTips(place.fsq_id);
        setTips(data);
      })();
    }, []);
    return (
      <Box
        sx={{
          width: "max-content",
          height: "max-content",
          position: "realtive",
        }}
      >
        <Dialog onClose={onClose} open={open}>
          <DialogTitle>{place.name}</DialogTitle>
          <IconButton
            sx={{ position: "absolute", top: 0, right: 0 }}
            onClick={onClose}
          >
            <CancelOutlinedIcon />
          </IconButton>
          <DialogContent>
            <Box>
              <Typography variant="h5" sx={{ my: 1 }}>
                Personnal Info:
              </Typography>
              <Typography variant="body2">
                Category: {place.categories[0].name}
              </Typography>
              {formatted_address && (
                <Typography variant="body2">
                  Formatted Address: {formatted_address}
                </Typography>
              )}
              {country && (
                <Typography variant="body2">Country: {country}</Typography>
              )}
              {region && (
                <Typography variant="body2">Region: {region}</Typography>
              )}
              <Typography variant="body2">
                Timezone: {place.timezone}
              </Typography>
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    );
  }
);
