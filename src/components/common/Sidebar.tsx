import React, { useState } from "react";
import {
  Avatar,
  Drawer,
  List,
  Stack,
  Toolbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "../../routes/appRoutes";
import styled from "@emotion/styled";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <List disablePadding>
      <Toolbar sx={{ marginBottom: "20px" }}>
        <Stack sx={{ width: "100%" }} direction="row" justifyContent="center">
          <Avatar src={assets.images.logo} />
        </Stack>
      </Toolbar>
      {appRoutes.map((route, index) =>
        route.sidebarProps ? (
          route.child ? (
            <SidebarItemCollapse item={route} key={index} />
          ) : (
            <SidebarItem item={route} key={index} />
          )
        ) : null
      )}
    </List>
  );

  return (
    <>
      {isMobile ? (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      ) : null}
      <StyledDrawer
        variant={isMobile ? "temporary" : "permanent"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawerContent}
      </StyledDrawer>
    </>
  );
};

//---------------------------------------------------------------------
// Helpers
//---------------------------------------------------------------------
const StyledDrawer = styled(Drawer)({
  width: sizeConfigs.sidebar.width,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: sizeConfigs.sidebar.width,
    boxSizing: "border-box",
    borderRight: "0px",
    backgroundColor: colorConfigs.sidebar.bg,
    color: colorConfigs.sidebar.color,
  },
});

export default Sidebar;
