import { Outlet } from "react-router-dom";
import { Box, Toolbar, styled } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";
import { useState } from "react";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleDrawerToggle = (isOpen: boolean) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <Container>
      <Topbar />
      <NavigationBox component="nav">
        <Sidebar onDrawerToggle={handleDrawerToggle} />
      </NavigationBox>
      <MainBox
        component="main"
        style={{
          width: isSidebarOpen
            ? `calc(100% - ${sizeConfigs.sidebar.width})`
            : "100%",
        }}
      >
        <Toolbar />
        <Outlet />
      </MainBox>
    </Container>
  );
};

//---------------------------------------------------------------------
// Helpers
//---------------------------------------------------------------------
const Container = styled(Box)({
  display: "flex",
});

const MainBox = styled(Box)({
  flexGrow: 1,
  p: 3,
  width: `calc(100% - ${sizeConfigs.sidebar.width})`,
  minHeight: "100vh",
  backgroundColor: colorConfigs.mainBg,
});

const NavigationBox = styled(Box)({
  width: sizeConfigs.sidebar.width,
  flexShrink: 0,
});

export default MainLayout;
