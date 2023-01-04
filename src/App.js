import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./providers";

import GlobalStyle from "./styles/global";
import { router } from "./routes";

export default function App() {
  return (
      <AuthProvider>
        <GlobalStyle />
        <RouterProvider router={router}/>
      </AuthProvider>
  );
}
