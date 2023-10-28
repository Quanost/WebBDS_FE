import PropTypes from "prop-types";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const filterSidebar = {
  rent: {
    "Lọc theo khoảng giá": [
      {
        text: "Thỏa thuận",
        link: "/rent/Thỏa thuận",
      },
      {
        text: "Dưới 1 triệu",
        link: "/rent/Dưới 1 triệu",
      },
      {
        text: "1 - 3 triệu",
        link: "/rent/1 - 3 triệu",
      },
      {
        text: "3 - 5 triệu",
        link: "/rent/3 - 5 triệu",
      },
      {
        text: "5 - 10 triệu",
        link: "/rent/5 - 10 triệu",
      },
      {
        text: "10 - 40 triệu",
        link: "/rent/10 - 40 triệu",
      },
      {
        text: "40 - 70 triệu",
        link: "/rent/40 - 70 triệu",
      },
      {
        text: "70 - 100 triệu",
        link: "/rent/70 - 100 triệu",
      },
      {
        text: "Trên 100 triệu",
        link: "/rent/Trên 100 triệu",
      },
    ],
    "Lọc theo diện tích": [
      {
        text: "Dưới 30 m²",
        link: "/rent/Dưới 30 m²",
      },
      {
        text: "30 - 50 m²",
        link: "/rent/30 - 50 m²",
      },
      {
        text: "50 - 80 m²",
        link: "/rent/50 - 80 m²",
      },
      {
        text: "80 - 100 m²",
        link: "/rent/80 - 100 m²",
      },
      {
        text: "100 - 150 m²",
        link: "/rent/100 - 150 m²",
      },
      {
        text: "150 - 200 m²",
        link: "/rent/150 - 200 m²",
      },
      {
        text: "200 - 250 m²",
        link: "/rent/200 - 250 m²",
      },
      {
        text: "250 - 300 m²",
        link: "/rent/250 - 300 m²",
      },
      {
        text: "300 - 500 m²",
        link: "/rent/300 - 500 m²",
      },
      {
        text: "Trên 500 m²",
        link: "/rent/Trên 500 m²",
      },
    ],
  },
  sale: {
    "Lọc theo khoảng giá": [
      {
        text: "Thỏa thuận",
        link: "/sale/Thỏa thuận",
      },
      {
        text: "Dưới 500 triệu",
        link: "/sale/Dưới 500 triệu",
      },
      {
        text: "500 - 800 triệu",
        link: "/sale/500 - 800 triệu",
      },
      {
        text: "800 triệu - 1 tỷ",
        link: "/sale/800 triệu - 1 tỷ",
      },
      {
        text: "1 - 2 tỷ",
        link: "/sale/1 - 2 tỷ",
      },
      {
        text: "2 - 3 tỷ",
        link: "/sale/2 - 3 tỷ",
      },
      {
        text: "3 - 5 tỷ",
        link: "/sale/3 - 5 tỷ",
      },
      {
        text: "5 - 7 tỷ",
        link: "/sale/5 - 7 tỷ",
      },
      {
        text: "7 - 10 tỷ",
        link: "/sale/7 - 10 tỷ",
      },
      {
        text: "10 - 20 tỷ",
        link: "/sale/10 - 20 tỷ",
      },
      {
        text: "20 - 30 tỷ",
        link: "/sale/20 - 30 tỷ",
      },
      {
        text: "30 - 40 tỷ",
        link: "/sale/30 - 40 tỷ",
      },
      {
        text: "40 - 60 tỷ",
        link: "/sale/40 - 60 tỷ",
      },
      {
        text: "Trên 60 tỷ",
        link: "/sale/Trên 60 tỷ",
      },
    ],
    "Lọc theo diện tích": [
      {
        text: "Dưới 30 m²",
        link: "/sale/Dưới 30 m²",
      },
      {
        text: "30 - 50 m²",
        link: "/sale/30 - 50 m²",
      },
      {
        text: "50 - 80 m²",
        link: "/sale/50 - 80 m²",
      },
      {
        text: "80 - 100 m²",
        link: "/sale/80 - 100 m²",
      },
      {
        text: "100 - 150 m²",
        link: "/sale/100 - 150 m²",
      },
      {
        text: "150 - 200 m²",
        link: "/sale/150 - 200 m²",
      },
      {
        text: "200 - 250 m²",
        link: "/sale/200 - 250 m²",
      },
      {
        text: "250 - 300 m²",
        link: "/sale/250 - 300 m²",
      },
      {
        text: "300 - 500 m²",
        link: "/sale/300 - 500 m²",
      },
      {
        text: "Trên 500 m²",
        link: "/sale/Trên 500 m²",
      },
    ],
  },
};

const provincesAndUtilitySupport = {
  rent: {
    "Nhà đất cho thuê": [
      {
        text: "Hồ Chí Minh (28.596)",
        link: "/rent/Hồ Chí Minh (28.596)",
      },
      {
        text: "Hà Nội (13.682)",
        link: "/rent/Hà Nội (13.682)",
      },
      {
        text: "Bình Dương (1.841)",
        link: "/rent/Bình Dương (1.841)",
      },
      {
        text: "Đà Nẵng (980)",
        link: "/rent/Đà Nẵng (980)",
      },
      {
        text: "Đồng Nai (640)",
        link: "/rent/Đồng Nai (640)",
      },
      {
        text: "Khánh Hòa (505)",
        link: "/rent/Khánh Hòa (505)",
      },
      {
        text: "Hải Phòng (474)",
        link: "/rent/Hải Phòng (474)",
      },
      {
        text: "Long An (376)",
        link: "/rent/Long An (376)",
      },
      {
        text: "Hưng Yên (303)",
        link: "/rent/Hưng Yên (303)",
      },
      {
        text: "Bà Rịa Vũng Tàu (244)",
        link: "/rent/Bà Rịa Vũng Tàu (244)",
      },
      {
        text: "Bắc Ninh (222)",
        link: "/rent/Bắc Ninh (222)",
      },
      {
        text: "Cần Thơ (219)",
        link: "/rent/Cần Thơ (219)",
      },
      {
        text: "Lâm Đồng (103)",
        link: "/rent/Lâm Đồng (103)",
      },
      {
        text: "Bình Định (67)",
        link: "/rent/Bình Định (67)",
      },
      {
        text: "Kiên Giang (61)",
        link: "/rent/Kiên Giang (61)",
      },
      {
        text: "Quảng Ninh (46)",
        link: "/rent/Quảng Ninh (46)",
      },
      {
        text: "Thanh Hóa (46)",
        link: "/rent/Thanh Hóa (46)",
      },
      {
        text: "Hải Dương (45)",
        link: "/rent/Hải Dương (45)",
      },
      {
        text: "Tiền Giang (42)",
        link: "/rent/Tiền Giang (42)",
      },
      {
        text: "Quảng Nam (38)",
        link: "/rent/Quảng Nam (38)",
      },
    ],
    "Hỗ trợ tiện ích": [
      { text: "Tư vấn phong thủy", link: "/rent/Tư vấn phong thủy" },
      {
        text: "Dự tính chi phí làm nhà",
        link: "/rent/Dự tính chi phí làm nhà",
      },
      { text: "Tính lãi suất", link: "/rent/Tính lãi suất" },
      { text: "Quy trình xây nhà", link: "/rent/Quy trình xây nhà" },
      { text: "Xem tuổi làm nhà", link: "/rent/Xem tuổi làm nhà" },
    ],
  },
  sale: {
    "Mua bán nhà đất": [
      {
        text: "Hồ Chí Minh (50.825)",
        link: "/sale/Hồ Chí Minh (50.825)",
      },
      {
        text: "Hà Nội (49.264)",
        link: "/sale/Hà Nội (49.264)",
      },
      {
        text: "Bình Dương (5.028)",
        link: "/sale/Bình Dương (5.028)",
      },
      {
        text: "Đà Nẵng (4.614)",
        link: "/sale/Đà Nẵng (4.614)",
      },
      {
        text: "Khánh Hòa (3.397)",
        link: "/sale/Khánh Hòa (3.397)",
      },
      {
        text: "Đồng Nai (3.052)",
        link: "/sale/Đồng Nai (3.052)",
      },
      {
        text: "Hải Phòng (2.402)",
        link: "/sale/Hải Phòng (2.402)",
      },
      {
        text: "Long An (2.020)",
        link: "/sale/Long An (2.020)",
      },
      {
        text: "Bà Rịa Vũng Tàu (1.911)",
        link: "/sale/Bà Rịa Vũng Tàu (1.911)",
      },
      {
        text: "Hưng Yên (1.516)",
        link: "/sale/Hưng Yên (1.516)",
      },
      {
        text: "Bình Thuận (1.438)",
        link: "/sale/Bình Thuận (1.438)",
      },
      {
        text: "Lâm Đồng (1.274)",
        link: "/sale/Lâm Đồng (1.274)",
      },
      {
        text: "Kiên Giang (805)",
        link: "/sale/Kiên Giang (805)",
      },
      {
        text: "Quảng Ninh (803)",
        link: "/sale/Quảng Ninh (803)",
      },
      {
        text: "Quảng Nam (792)",
        link: "/sale/Quảng Nam (792)",
      },
      {
        text: "Bình Phước (670)",
        link: "/sale/Bình Phước (670)",
      },
      {
        text: "Hòa Bình (630)",
        link: "/sale/Hòa Bình (630)",
      },
      {
        text: "Tây Ninh (529)",
        link: "/sale/Tây Ninh (529)",
      },
      {
        text: "Thanh Hóa (468)",
        link: "/sale/Thanh Hóa (468)",
      },
      {
        text: "Bắc Ninh (393)",
        link: "/sale/Bắc Ninh (393)",
      },
    ],
    "Hỗ trợ tiện ích": [
      {
        text: "Tư vấn phong thủy",
        link: "/sale/Tư vấn phong thủy",
      },
      {
        text: "Dự tính chi phí làm nhà",
        link: "/sale/Dự tính chi phí làm nhà",
      },
      {
        text: "Tính lãi suất",
        link: "/sale/Tính lãi suất",
      },
      {
        text: "Quy trình xây nhà",
        link: "/sale/Quy trình xây nhà",
      },
      {
        text: "Xem tuổi làm nhà",
        link: "/sale/Xem tuổi làm nhà",
      },
    ],
  },
};

const FilterSidebar = ({ variant }) => {
  return (
    <Stack>
      {Object.entries(filterSidebar[variant] ?? {}).map(
        ([title, items], index) =>
          title && (
            <FilterCard
              key={`${title}-${index}`}
              bg={false}
              items={items}
              title={title}
            />
          )
      )}
      {Object.entries(provincesAndUtilitySupport[variant] ?? {}).map(
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

FilterSidebar.propTypes = {
  variant: PropTypes.string,
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

export default FilterSidebar;
