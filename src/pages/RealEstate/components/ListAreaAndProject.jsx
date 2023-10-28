import * as React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";

function SubCheckBoxList({ variant }) {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {[0, 1, 2].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} disablePadding>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(value)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${variant} ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

SubCheckBoxList.propTypes = {
  variant: PropTypes.string,
};

function ListItemCollapse({ variant }) {
  const [open, setOpen] = React.useState(false);

  const toggleCollapse = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <ListItemButton onClick={toggleCollapse}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={variant} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton disableRipple sx={{ pl: 4 }}>
            <SubCheckBoxList variant={variant} />
          </ListItemButton>
        </List>
      </Collapse>
    </Box>
  );
}

ListItemCollapse.propTypes = {
  variant: PropTypes.string,
};

export default function ListAreaAndProject() {
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemCollapse variant="Tỉnh/Thành" />
      <ListItemCollapse variant="Quận/Huyện" />
      <ListItemCollapse variant="Phường/Xã" />
      <ListItemCollapse variant="Đường/Phố" />
      <ListItemCollapse variant="Dự án" />
    </List>
  );
}
