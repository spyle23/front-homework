import axios from "axios";
import { Params, PhotoParams } from "../../interfaces/params";
import { IPlace, IPhoto } from "../../interfaces/Place";

export const authHttp = () => {
  const BASE_URL = process.env.REACT_APP_FOURSQUARE_API_URL;
  const http = axios.create({
    baseURL: BASE_URL,
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_API_KEY,
    },
  });
  return http;
};

export const PLACE_QUERY = {
  searchPlace: async (params: Params): Promise<IPlace[]> => {
    const instance = authHttp();
    const response = await instance.get("/v3/places/search", {
      params: { ...params },
    });
    return response.data.results;
  },
  getPlacePhotos: async (
    fsq_id: string,
    photoParams?: PhotoParams
  ): Promise<IPhoto[]> => {
    const instance = authHttp();
    const response = await instance.get(`/v3/places/${fsq_id}/photos`, {
      params: { ...photoParams },
    });
    return response.data;
  },
};
