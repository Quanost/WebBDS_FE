import React from "react";
import PropTypes from "prop-types";

import { styled } from "@mui/material/styles";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const BlackOnWhiteButton = styled(Button)(() => ({
  color: "black",
  backgroundColor: "transparent",
  position: "relative",
  ":before": {
    content: "''",
    position: "absolute",
    width: "0%",
    height: "2px",
    backgroundColor: "red",
    bottom: "10px",
    left: 0,
    transition: "0.3s",
  },

  "&:hover": {
    backgroundColor: "transparent",
  },
  "&[aria-expanded='true']:before": {
    width: "100%",
  },
  "&:focus": {
    backgroundColor: "transparent",
  },
}));

const DropdownMenuItem = ({
  text = "DropdownMenuItem",
  link = "/",
  items = [],
  headerHeight = 90,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <BlackOnWhiteButton
        onMouseEnter={handleClick}
        onMouseLeave={handleClose}
        component={Link}
        to={link}
        disableRipple
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        style={{
          fontWeight: "normal",
          fontFamily: "'Lexend', Roboto, Arial",
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        {text}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
            onMouseLeave: handleClose,
          }}
          style={{
            top: headerHeight,
          }}
          sx={{
            ".MuiBackdrop-root.MuiBackdrop-invisible.MuiModal-backdrop": {
              top: headerHeight,
              display: "none",
            },
            ".MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiMenu-paper.MuiPopover-paper.MuiMenu-paper":
              {
                top: "0px !important",
                zIndex: "1301 !important",
              },
          }}
        >
          {items.map((item, index) => (
            <MenuItem
              component={Link}
              to={item.link}
              key={`${item}-${index}`}
              onClick={handleClose}
            >
              {item.text}
            </MenuItem>
          ))}
        </Menu>
      </BlackOnWhiteButton>
    </div>
  );
};

DropdownMenuItem.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  headerHeight: PropTypes.number,
  items: PropTypes.array,
};

export default DropdownMenuItem;
