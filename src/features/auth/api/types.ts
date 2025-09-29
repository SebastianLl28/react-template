interface LoginRequest {
  username: string;
  password: string;
}

interface AuthResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

type RefreshResponse = Pick<AuthResponse, "accessToken" | "refreshToken">;

export type { AuthResponse, RefreshResponse, LoginRequest };
