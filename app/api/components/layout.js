import { ThemeProvider } from "@emotion/react";
import Navbar from "./navbar";
import { theme } from "@/app/page";
export default function Layout({ children }) {
    return (
      <>
        <ThemeProvider theme={theme}>
        <Navbar />
        <main>{children}</main>
        </ThemeProvider>
      </>
    )
  }