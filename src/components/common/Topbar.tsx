import { AppBar, Toolbar, styled, Typography } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";

const Topbar = () => {
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">React sidebar with dropdown</Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

//---------------------------------------------------------------------
// Helpers
//---------------------------------------------------------------------

const StyledAppBar = styled(AppBar)({
  width: `calc(100% - ${sizeConfigs.sidebar.width})`,
  ml: sizeConfigs.sidebar.width,
  boxShadow: "unset",
  backgroundColor: colorConfigs.topbar.bg,
  color: colorConfigs.topbar.color,
});

export default Topbar;
