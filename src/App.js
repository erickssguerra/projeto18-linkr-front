import { RouterProvider } from "react-router-dom";
import { AuthProvider, UpdateProvider } from "./providers";

import GlobalStyle from "./styles/global";
import { router } from "./routes";

export default function App() {
  return (
    <AuthProvider>
      <UpdateProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </UpdateProvider>
    </AuthProvider>
  );
}
