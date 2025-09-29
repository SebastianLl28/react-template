import apiClient from "@/shared/config/apiClient";
import { DEFAULT_EXPIRES_IN_MINS } from "@/shared/config/constant";
import {
  LOGIN_ENDPOINT,
  REFRESH_ENDPOINT,
  SELF_ENDPOINT,
} from "@/shared/config/endpoint";
import type { User } from "../model/User";
import type { AuthResponse, LoginRequest, RefreshResponse } from "./types";

export const postLogin = async ({ username, password }: LoginRequest) => {
  return await apiClient
    .post<AuthResponse>(LOGIN_ENDPOINT, {
      username,
      password,
      expiresInMins: DEFAULT_EXPIRES_IN_MINS,
    })
    .then((response) => response.data);
};

export const getSelf = async () => {
  return await apiClient
    .get<User>(SELF_ENDPOINT)
    .then((response) => response.data);
};

export const postRefresh = async () => {
  return await apiClient
    .post<RefreshResponse>(REFRESH_ENDPOINT)
    .then((response) => response.data);
};
