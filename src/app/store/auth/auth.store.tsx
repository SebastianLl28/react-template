import type { User } from "@/entities/user/User";
import { create } from "zustand";

type AuthState = {
  isAuthenticated: boolean;
  userProfile: User | null;
  login: () => void;
  logout: () => void;
  setUserProfile: (profile: User) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  userProfile: null,

  login: () =>
    set(() => ({
      isAuthenticated: true,
    })),

  logout: () =>
    set(() => ({
      isAuthenticated: false,
      userProfile: null,
    })),

  setUserProfile: (profile: User) =>
    set(() => ({
      userProfile: profile,
      isAuthenticated: true,
    })),
}));

export const useUserProfile = () => useAuthStore((state) => state.userProfile);
export const useIsAuthenticated = () =>
  useAuthStore((state) => state.isAuthenticated);
export const useLogin = () => useAuthStore((state) => state.login);
export const useLogout = () => useAuthStore((state) => state.logout);
export const useSetUserProfile = () =>
  useAuthStore((state) => state.setUserProfile);
