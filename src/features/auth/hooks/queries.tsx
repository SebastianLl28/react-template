import { useQuery } from "@tanstack/react-query";
import { AUTH_KEYS } from "../api/auth.keys";
import { getSelf } from "../api/auth.api";

export const useGetSelf = () =>
  useQuery({
    queryKey: AUTH_KEYS.self,
    queryFn: getSelf,
  });
