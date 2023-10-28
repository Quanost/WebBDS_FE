import * as React from "react";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListIcon from "@mui/icons-material/List";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function SubSideMenu({ text, items, open }) {
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    setExpanded(false);
  }, [open]);

  const toggle = () => setExpanded((prev) => !prev);

  return (
    <ListItem key={text} disablePadding sx={{ display: "block" }}>
      {/* Primary item */}
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
        onClick={open ? toggle : () => {}}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          <ListIcon />
        </ListItemIcon>

        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />

        {open && (
          <ExpandMoreIcon
            sx={{ rotate: expanded ? "180deg" : "", transition: "0.2s" }}
          />
        )}
      </ListItemButton>

      {/* Sub items */}
      {expanded && items && (
        <Stack direction="column">
          {items.map((item) => (
            <Box key={item.text}>
              <ListItemButton
                component={Link}
                to={item.link}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  ml: open ? 3 : "auto",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* <ListIcon /> */}
                </ListItemIcon>

                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Box>
          ))}
        </Stack>
      )}
    </ListItem>
  );
}

SubSideMenu.propTypes = {
  text: PropTypes.string,
  items: PropTypes.array,
  open: PropTypes.bool,
};
