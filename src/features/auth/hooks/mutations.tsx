import { useMutation } from "@tanstack/react-query";
import { AUTH_KEYS } from "../api/auth.keys";
import { postLogin } from "../api/auth.api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { PROFILE_PATH } from "@/app/route/path";
import { useLogin } from "@/app/store/auth/auth.store";

export const usePostLogin = () => {
  const navigate = useNavigate();
  const login = useLogin();
  return useMutation({
    mutationKey: AUTH_KEYS.login,
    mutationFn: postLogin,
    onSuccess: (data) => {
      login();
      localStorage.setItem("token", data.accessToken);
      toast.success("Login successful");
      navigate(PROFILE_PATH);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
