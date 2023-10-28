import PropTypes from "prop-types";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const option1 = {
  "Bán căn hộ chung cư theo dự án tại Quận 7": [
    {
      text: "Belleza Apartment (43)",
      link: "#Belleza Apartment (43)",
    },
    {
      text: "Cardinal Court (39)",
      link: "#Cardinal Court (39)",
    },
    {
      text: "Chung cư Hưng Phúc (42)",
      link: "#Chung cư Hưng Phúc (42)",
    },
    {
      text: "Eco Green Sài Gòn (99)",
      link: "#Eco Green Sài Gòn (99)",
    },
    {
      text: "Grand View (34)",
      link: "#Grand View (34)",
    },
    {
      text: "Him Lam Riverside (40)",
      link: "#Him Lam Riverside (40)",
    },
    {
      text: "Midtown Phú Mỹ Hưng (93)",
      link: "#Midtown Phú Mỹ Hưng (93)",
    },
    {
      text: "Q7 Saigon Riverside (118)",
      link: "#Q7 Saigon Riverside (118)",
    },
    {
      text: "River Panorama (45)",
      link: "#River Panorama (45)",
    },
    {
      text: "Riverpark Premier (65)",
      link: "#Riverpark Premier (65)",
    },
    {
      text: "Riverside Residence (63)",
      link: "#Riverside Residence (63)",
    },
    {
      text: "Riviera Point (48)",
      link: "#Riviera Point (48)",
    },
    {
      text: "Scenic Valley 1 (44)",
      link: "#Scenic Valley 1 (44)",
    },
    {
      text: "Sky Garden 3 (54)",
      link: "#Sky Garden 3 (54)",
    },
    {
      text: "Star Hill (43)",
      link: "#Star Hill (43)",
    },
    {
      text: "Sunrise City (198)",
      link: "#Sunrise City (198)",
    },
    {
      text: "The Antonia (46)",
      link: "#The Antonia (46)",
    },
    {
      text: "The Era Town (53)",
      link: "#The Era Town (53)",
    },
    {
      text: "The Peak (87)",
      link: "#The Peak (87)",
    },
    {
      text: "The View Riviera Point (41)",
      link: "#The View Riviera Point (41)",
    },
  ],
};

const option2 = {
  "Bất động sản nổi bật": [
    { text: "Chung cư Wilton Tower", link: "#Chung cư Wilton Tower" },
    { text: "Bán nhà Trần Trọng Cung", link: "#Bán nhà Trần Trọng Cung" },
    { text: "Bán nhà Đường 53", link: "#Bán nhà Đường 53" },
    { text: "Bán nhà Hàng Kênh", link: "#Bán nhà Hàng Kênh" },
    {
      text: "Cho thuê nhà mặt tiền Trần Trọng Cung",
      link: "#Cho thuê nhà mặt tiền Trần Trọng Cung",
    },
    { text: "Cho thuê nhà mặt tiền 79", link: "#Cho thuê nhà mặt tiền 79" },
    { text: "Biệt thự V5 V6", link: "#Biệt thự V5 V6" },
    { text: "Chung cư The Gold View", link: "#Chung cư The Gold View" },
    { text: "Căn hộ Suwah Pearl", link: "#Căn hộ Suwah Pearl" },
    { text: "Chung cư Gamuda Gardens", link: "#Chung cư Gamuda Gardens" },
    { text: "Bán biệt thự Khang An", link: "#Bán biệt thự Khang An" },
    { text: "Khu đô thị mới Tân Tây Đô", link: "#Khu đô thị mới Tân Tây Đô" },
    { text: "Bán nhà Bình Tân", link: "#Bán nhà Bình Tân" },
    { text: "Căn hộ Moonlight Garden", link: "#Căn hộ Moonlight Garden" },
    { text: "Căn hộ LuxGarden", link: "#Căn hộ LuxGarden" },
    { text: "Căn hộ The Avila", link: "#Căn hộ The Avila" },
    { text: "Bán đất Phường 9 Vũng Tàu", link: "#Bán đất Phường 9 Vũng Tàu" },
    { text: "Bán nhà Hàng Trống", link: "#Bán nhà Hàng Trống" },
    { text: "Bán nhà Tân Thành", link: "#Bán nhà Tân Thành" },
    { text: "Bán nhà Thuận Phước", link: "#Bán nhà Thuận Phước" },
  ],
};
const AsideNav = () => {
  return (
    <Stack>
      {Object.entries(option1 ?? {}).map(
        ([title, items], index) =>
          title && (
            <FilterCard
              key={`${title}-${index}`}
              bg={true}
              items={items}
              title={title}
            />
          )
      )}
      {Object.entries(option2 ?? {}).map(
        ([title, items], index) =>
          title && (
            <FilterCard
              key={`${title}-${index}`}
              bg={true}
              items={items}
              title={title}
            />
          )
      )}
    </Stack>
  );
};

const FilterCard = ({ items, title, bg }) => {
  return (
    <Box
      boxShadow={1}
      border="1px solid #F2F2F2"
      borderRadius="8px"
      padding="15px"
      marginBottom={2}
      sx={{ backgroundColor: bg ? "#F2F2F2" : "unset" }}
    >
      <Typography fontSize={14} fontWeight="500" marginBottom="16px">
        {title}
      </Typography>

      <Stack direction="column">
        {items.map((item) => (
          <Box
            component={Link}
            key={item.link}
            to={item.link}
            sx={{
              fontSize: "14px",
              color: "#2C2C2C",
              textDecoration: "none",
              marginBottom: "12px",
              ":hover": {
                color: "#999999",
              },
            }}
          >
            {item.text}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

FilterCard.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  bg: PropTypes.bool,
};

export default AsideNav;
