import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { PLACE_QUERY } from "../../API/places/query";
import { CLASSIFICATION, PhotoParams, SORT } from "../../interfaces/params";
import { IPhoto, IPlace } from "../../interfaces/Place";
import { RadioSelect } from "../RadioGroup/RadioSelect";
import { ClassificationSelect } from "../Select/ClassificationSelect";

interface CardPresenterProps {
  place: IPlace;
  onClick: () => void;
  sx?: any;
}

export const CardPresenter: FC<CardPresenterProps> = React.memo(
  ({ place, onClick, sx }) => {
    const [photo, setPhoto] = useState<IPhoto[]>();
    const [paramsPhoto, setParamsPhoto] = useState<PhotoParams>();
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
        const data = await PLACE_QUERY.getPlacePhotos(fsq_id, paramsPhoto);
        setPhoto(data);
      })();
    }, [fsq_id, paramsPhoto]);

    const handleSelectClassification = (
      e: SelectChangeEvent<CLASSIFICATION>
    ) => {
      setParamsPhoto((prev) => ({
        ...prev,
        classifications: e.target.value as CLASSIFICATION,
      }));
    };

    const handleChangeSort = (
      event: React.ChangeEvent<HTMLInputElement>,
      value: string
    ) => {
      setParamsPhoto((prev) => ({ ...prev, sort: value as SORT }));
    };

    return (
      <Card sx={{ height: 721, position: "relative" }}>
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
            <Typography variant="body2" sx={{ mb: 1 }}>
              Zone: {timezone}
            </Typography>
            <Box sx={{ my: 1 }}>
              <Typography variant="h5">Les photos</Typography>
              <Grid container spacing={1}>
                {photo &&
                  photo.map(({ id, prefix, suffix, width, height }) => (
                    <Grid item key={id} xs={6}>
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
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            position: "absolute",
            bottom: 5,
            width: "100%",
            px: 2,
            justifyContent: "space-between",
          }}
        >
          <RadioSelect
            sx={{ display: "flex", flexDirection: "row" }}
            onChange={handleChangeSort}
          />
          <ClassificationSelect
            onChange={handleSelectClassification}
            sx={{ minWidth: "37%" }}
          />
        </CardActions>
      </Card>
    );
  }
);
