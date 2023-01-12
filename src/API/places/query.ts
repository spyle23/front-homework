import axios from "axios";
import { Params, PhotoParams, TipsParams } from "../../interfaces/params";
import { IPlace, IPhoto, ITips } from "../../interfaces/Place";

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

export const searchPlace = async (params: Params): Promise<IPlace[]> => {
  const instance = authHttp();
  const response = await instance.get("/v3/places/search", {
    params: { ...params },
  });
  return response.data.results;
};
export const getPlacePhotos = async (
  fsq_id: string,
  photoParams?: PhotoParams
): Promise<IPhoto[]> => {
  const instance = authHttp();
  const response = await instance.get(`/v3/places/${fsq_id}/photos`, {
    params: photoParams,
  });
  return response.data;
};
export const getPlaceTips = async (
  fsq_id: string,
  tipsParams?: TipsParams
): Promise<ITips[]> => {
  const instance = authHttp();
  const response = await instance.get(`/v3/places/${fsq_id}/tips`, {
    params: tipsParams,
  });
  return response.data;
};
