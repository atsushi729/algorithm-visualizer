import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import colorConfigs from "../../configs/colorConfigs";
import { RouteType } from "../../routes/config";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import SidebarItem from "./SidebarItem";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type Props = {
  item: RouteType;
};

const SidebarItemCollapse = ({ item }: Props) => {
  const [open, setOpen] = useState(false);
  const { appState } = useSelector((state: RootState) => state.appState);

  useEffect(() => {
    if (appState.includes(item.state)) {
      setOpen(true);
    }
  }, [appState, item]);

  return item.sidebarProps ? (
    <>
      <StyledListItemButton onClick={() => setOpen(!open)}>
        <StyledListItemIcon>
          {item.sidebarProps.icon && item.sidebarProps.icon}
        </StyledListItemIcon>
        <ListItemText
          disableTypography
          primary={<Typography>{item.sidebarProps.displayText}</Typography>}
        />
        {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
      </StyledListItemButton>
      <Collapse in={open} timeout="auto">
        <List>
          {item.child?.map((route, index) =>
            route.sidebarProps ? (
              route.child ? (
                <SidebarItemCollapse item={route} key={index} />
              ) : (
                <SidebarItem item={route} key={index} />
              )
            ) : null
          )}
        </List>
      </Collapse>
    </>
  ) : null;
};

//---------------------------------------------------------------------
// Helpers
//---------------------------------------------------------------------
const StyledListItemButton = styled(ListItemButton)({
  "&: hover": {
    backgroundColor: colorConfigs.sidebar.hoverBg,
  },
  paddingY: "12px",
  paddingX: "24px",
});

const StyledListItemIcon = styled(ListItemIcon)({
  color: colorConfigs.sidebar.color,
});

export default SidebarItemCollapse;
