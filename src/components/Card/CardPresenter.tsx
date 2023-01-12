import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { PLACE_QUERY } from "../../API/places/query";
import { PhotoParams } from "../../interfaces/params";
import { IPhoto, IPlace } from "../../interfaces/Place";

interface CardPresenterProps {
  place: IPlace;
  onClick: () => void;
  sx?: any;
}

export const CardPresenter: FC<CardPresenterProps> = React.memo(
  ({ place, onClick, sx }) => {
    const [photo, setPhoto] = useState<IPhoto[]>();
    const { name, categories, fsq_id, timezone } = place;

    // const handleGetPhoto = async (
    //   fsq_id: string,
    //   photoParams?: PhotoParams
    // ) => {
    //   const data = await PLACE_QUERY.getPlacePhotos(fsq_id);
    //   setPhoto(data);
    // };

    useEffect(() => {
      (async () => {
        const data = await PLACE_QUERY.getPlacePhotos(fsq_id);
        setPhoto(data);
      })();
    }, [fsq_id]);

    return (
      <Card>
        <CardActionArea
          sx={{
            ":hover .MuiCardActionArea-focusHighlight": {
              opacity: 0,
            },
          }}
        //   onClick={() => handleGetPhoto(fsq_id)}
        >
          <CardContent>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="body2">
              Catégorie: {categories[0].name}
            </Typography>
            <Typography variant="body2">Zone: {timezone}</Typography>
          </CardContent>
          <Typography variant="h5">Les photos</Typography>
          <Box>
            <Grid container spacing={1}>
              {photo &&
                photo.map(({ id, prefix, suffix, width, height }) => (
                  <Grid item key={id} xs={12} sm={6}>
                    <CardMedia
                      component="img"
                      alt="photo"
                      image={prefix + "original" + suffix}
                      width={100}
                      height={100}
                    />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </CardActionArea>
      </Card>
    );
  }
);
