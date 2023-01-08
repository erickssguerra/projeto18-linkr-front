import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [userAuth, setUserAuth] = useState(undefined);
  const [update, setUpdate]=useState(false)

  useEffect(() => {
    const userStorage = localStorage.getItem("linkr");
    if (userStorage) {
      setUserAuth(JSON.parse(userStorage));
    } else {
        setUserAuth(undefined)
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userAuth, setUserAuth, update, setUpdate }}> 
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
