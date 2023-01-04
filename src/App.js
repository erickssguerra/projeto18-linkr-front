import { AuthProvider } from "./providers";
import RouterProvider from "./routes";
import GlobalStyle from "./styles/global";

export default function App() {
  return (
    <>
      <AuthProvider>
        <GlobalStyle />
        <RouterProvider />
      </AuthProvider>
    </>
  );
}
