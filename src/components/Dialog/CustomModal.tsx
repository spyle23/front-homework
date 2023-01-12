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
import { TipsPresenter } from "./TipsPresenter";
import { RadioSelect } from "../RadioGroup/RadioSelect";
import { SORT, TipsParams } from "../../interfaces/params";
import { COLOR } from "../../utils/color";

interface CustomModalProps {
  place: IPlace;
  open: boolean;
  onClose: () => void;
}

export const CustomModal: FC<CustomModalProps> = React.memo(
  ({ place, open, onClose }) => {
    const [tips, setTips] = useState<ITips[]>([]);
    const [tipsParams, setTipsParams] = useState<TipsParams>();
    const { country, formatted_address, region } = place.location;
    useEffect(() => {
      (async () => {
        const data = await getPlaceTips(place.fsq_id, tipsParams);
        setTips(data);
      })();
    }, [place.fsq_id, tipsParams]);
    const handleChangeSort = (
      event: React.ChangeEvent<HTMLInputElement>,
      value: string
    ) => {
      setTipsParams((prev) => ({ ...prev, sort: value as SORT }));
    };
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
              <Typography variant="h5" sx={{ my: 1, color: COLOR.PRIMARY }}>
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
            <Box sx={{ mt: 2 }}>
              <Typography variant="h5" sx={{ color: COLOR.PRIMARY }}>
                Tips about this place:
              </Typography>
              <Box sx={{ my: 1, display: "flex", justifyContent: "end" }}>
                <Box>
                  <Typography>Action: </Typography>
                  <Box sx={{ display: "flex" }}>
                    <RadioSelect
                      sx={{ display: "flex", flexDirection: "row" }}
                      onChange={handleChangeSort}
                    />
                  </Box>
                </Box>
              </Box>
              {tips.map((tip) => (
                <TipsPresenter key={tip.id} tip={tip} />
              ))}
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    );
  }
);
