import { RouterProvider } from "react-router-dom";
import { AuthProvider, TrendingProvider, UpdateProvider } from "./providers";

import GlobalStyle from "./styles/global";
import { router } from "./routes";

export default function App() {
  return (
    <AuthProvider>
      <UpdateProvider>
        <TrendingProvider>
          <GlobalStyle />
          <RouterProvider router={router} />
        </TrendingProvider>
      </UpdateProvider>
    </AuthProvider>
  );
}
