import { Card, Typography } from "@mui/material";
import moment from "moment";
import React, { FC } from "react";
import { ITips } from "../../interfaces/Place";

interface TipsPresenterProps {
  tip: ITips;
}

export const TipsPresenter: FC<TipsPresenterProps> = React.memo(({ tip }) => {
  return (
    <Card sx={{ my: 1, p: 1 }} >
      <Typography sx={{ textAlign: "end" }} >{moment(tip.created_at).format("DD MMMM YYYY à HH:MM")}</Typography>
      <Typography>{tip.text}</Typography>
    </Card>
  );
});
