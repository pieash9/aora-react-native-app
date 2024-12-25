import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { getCurrentUser } from "../lib/appwrite";
import { ICreator } from "@/interface";

// Define the type for the user object. Replace `any` with the actual type from your appwrite setup.

// Define the type for the context value
interface GlobalContextType {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  user: ICreator | null;
  setUser: React.Dispatch<React.SetStateAction<any | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with the defined type
export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

// Hook to use the context
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

// Props for the provider
interface GlobalProviderProps {
  children: ReactNode;
}

// Provider component
const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<ICreator | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLogged(true);
          setUser(res as any); // Cast to `User` type
        } else {
          setIsLogged(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
