import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ColorModeContext, useMode } from "../themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/TopBar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contact from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";
import PrivateRoutes from "./utils/PrivateRoutes";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route element={<PrivateRoutes />}>
                <Route path="/team" element={<Team />} />
              </Route>
              <Route element={<PrivateRoutes />}>
                <Route path="/contacts" element={<Contact />} />
              </Route>
              <Route element={<PrivateRoutes />}>
                <Route path="/invoices" element={<Invoices />} />
              </Route>
              <Route element={<PrivateRoutes />}>
                <Route path="/calendar" element={<Calendar />} />
              </Route>
              <Route element={<PrivateRoutes />}>
                <Route path="/faq" element={<FAQ />} />
              </Route>
              <Route element={<PrivateRoutes />}>
                <Route path="/bar" element={<Bar />} />
              </Route>
              <Route element={<PrivateRoutes />}>
                <Route path="/pie" element={<Pie />} />
              </Route>
              <Route element={<PrivateRoutes />}>
                <Route path="/line" element={<Line />} />
              </Route>
              <Route element={<PrivateRoutes />}>
                <Route path="/geography" element={<Geography />} />
              </Route>

              <Route path="/" element={<Form />} exact />
              <Route
                path="*"
                element={
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "80vh",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h1" sx={{ fontSize: "30rem" }}>
                      404
                    </Typography>
                    <Typography variant="h">
                      <Link to="/">Take me back to home</Link>
                    </Typography>
                  </Box>
                }
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
