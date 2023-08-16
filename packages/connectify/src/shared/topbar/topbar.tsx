import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { MenuItems } from "../../constants/menuItems";
import { useLocation, useNavigate } from "react-router";
import { Routes } from "../../app/routes";
import { MenuItemsProfil } from "../../constants/menuItemsProfil";
import { MenuItemsConnect } from "../../constants/menuItemsConnect";

let menuItemsArray: any[] = [];
const menuItemsArrayProfil = Object.values(MenuItemsProfil);
const menuItemsArrayConnect = Object.values(MenuItemsConnect);

const drawerWidth = 240;

const TopBar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isSelected = (item: string): boolean =>
    pathname.includes(item) ||
    (pathname === Routes.home && item === MenuItemsConnect.HOME);

  if (pathname === Routes.profil || pathname === Routes.contact)
    menuItemsArray = [...menuItemsArrayProfil];
  if (
    pathname === Routes.home ||
    pathname === Routes.connection ||
    pathname === Routes.inscription ||
    pathname === Routes.deconnection
  )
    menuItemsArray = [...menuItemsArrayConnect];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {menuItemsArray.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              selected={isSelected(item)}
              sx={{ textAlign: "center" }}
            >
              <ListItemText
                primary={item === MenuItemsConnect.HOME ? "accueil" : item}
                onClick={() => navigate(Routes[item as keyof typeof Routes])}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor:
          pathname === Routes.profil ? "primary.main" : "transparent",
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        position="absolute"
        sx={{
          backgroundColor:
            pathname === Routes.profil ? "primary.main" : "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            component="div"
            color="secondary.main"
            onClick={() => navigate(Routes.home)}
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            Connectify
          </Typography>
          <List sx={{ display: { xs: "none", sm: "flex" } }}>
            {menuItemsArray.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  selected={isSelected(item)}
                  onClick={() => navigate(Routes[item as keyof typeof Routes])}
                  sx={{
                    color: "colorWhite.main",
                    textTransform: "capitalize",
                    "&.Mui-selected": {
                      color:
                        item === MenuItemsConnect.INSCRIPTION
                          ? "colorWhite.main"
                          : "secondary.main",
                      backgroundColor:
                        item === MenuItemsConnect.INSCRIPTION
                          ? "secondary.main"
                          : "transparent",
                      borderRadius:
                        item === MenuItemsConnect.INSCRIPTION ? "10px" : "0",
                      boxShadow:
                        item === MenuItemsConnect.INSCRIPTION
                          ? " 0px 4px 4px #2e4f44 "
                          : "transparent",
                    },
                  }}
                >
                  {item === MenuItemsConnect.HOME ? "accueil" : item}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default TopBar;
