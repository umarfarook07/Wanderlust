import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface IUseAuthState {
  isLoading: boolean;
  error: string | null;
  isAuth: boolean;
}

interface IUseAuth {
  signin: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  authState: IUseAuthState;
  setAuthState: React.Dispatch<React.SetStateAction<IUseAuthState>>;
}

const useAuth = (): IUseAuth => {
  const [authState, setAuthState] = useState<IUseAuthState>({
    isLoading: false,
    error: null,
    isAuth: false,
  });

  const navigate = useNavigate();

  const handleAuthResponse = (jwt_token: string, message: string) => {
    localStorage.setItem("jwt_token", jwt_token);
    setAuthState({
      isLoading: false,
      isAuth: true,
      error: null,
    });
    alert(message);
    navigate("/");
  };

  const handleAuthError = (error: any) => {
    let errorMessage = "An unexpected error occurred.";
    if (error.response) {
      const response = error.response.data;
      errorMessage = response.error || response.message || errorMessage;
    }
    setAuthState({
      isLoading: false,
      error: errorMessage,
      isAuth: false,
    });
  };

  const signin = async (email: string, password: string) => {
    setAuthState((prevState) => ({ ...prevState, isLoading: true }));
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/admin/signin",
        {
          username: email,
          password,
        }
      );

      if (response.status === 200) {
        handleAuthResponse(response.data.jwt_token, response.data.message);
      }
    } catch (error) {
      handleAuthError(error);
    }
  };

  const register = async (email: string, password: string) => {
    setAuthState((prevState) => ({ ...prevState, isLoading: true }));
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/admin/signup",
        {
          username: email,
          password,
        }
      );

      if (response.status === 200) {
        handleAuthResponse(response.data.jwt_token, response.data.message);
      }
    } catch (error) {
      handleAuthError(error);
    }
  };

  return { signin, authState, register, setAuthState };
};

export default useAuth;
