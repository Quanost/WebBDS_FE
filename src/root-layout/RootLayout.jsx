import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@mui/material";

const RootLayout = () => {
  return (
    <React.Fragment>
      <Box id="root-layout" position="relative">
        <header id="root-layout-header">
          <Header />
        </header>
        <main id="root-layout-main" style={{ position: "relative" }}>
          <Outlet />
        </main>
        <footer id="root-layout-footer">
          <Footer />
        </footer>
      </Box>
    </React.Fragment>
  );
};

export default RootLayout;
