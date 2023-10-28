import React from "react";
import { Badge, Divider, Stack, Tooltip } from "@mui/material";
import { useWindowScroll } from "@uidotdev/usehooks";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import DropdownMenuItem from "src/components/DropdownMenuItem";
import HeaderBoxInfo from "src/components/HeaderBoxInfo";
import { Link } from "react-router-dom";

const menus = [
  {
    text: "Nhà đất bán",
    link: "/sale/Nhà đất bán",
    submenu: [
      {
        text: "Bán căn hộ chung cư",
        link: "/sale/ban căn hộ chung cư",
      },
      {
        text: "Bán nhà riêng",
        link: "/sale/bán nhà riêng",
      },
      {
        text: "Bán nhà biệt thự, liền kề",
        link: "/sale/bán nhà biệt thự, liền kề",
      },
      {
        text: "Bán nhà mặt phố",
        link: "/sale/bán nhà mặt phố",
      },
      {
        text: "Bán shophouse, nhà phố thương mại",
        link: "/sale/bán shophouse, nhà phố thương mại",
      },
      {
        text: "Bán đất nền dự án",
        link: "/sale/bán đất nền dự án",
      },
      {
        text: "Bán đất",
        link: "/sale/bán đất",
      },
      {
        text: "Bán trang trại, khu nghỉ dưỡng",
        link: "/sale/bán trang trại, khu nghỉ dưỡng",
      },
      {
        text: "Bán condotel",
        link: "/sale/bán condotel",
      },
      {
        text: "Bán kho, nhà xưởng",
        link: "/sale/bán kho, nhà xưởng",
      },
      {
        text: "Bán loại bất động sản khác",
        link: "/sale/bán loại bất động sản khác",
      },
    ],
  },
  {
    text: "Nhà đất cho thuê",
    link: "/rent/Nhà đất cho thuê",
    submenu: [
      {
        text: "Cho thuê căn hộ chung cư",
        link: "/rent/Cho thuê căn hộ chung cư",
      },
      {
        text: "Cho thuê nhà riêng",
        link: "/rent/Cho thuê nhà riêng",
      },
      {
        text: "Cho thuê nhà biệt thự, liền kề",
        link: "/rent/Cho thuê nhà biệt thự, liền kề",
      },
      {
        text: "Cho thuê nhà mặt phố",
        link: "/rent/Cho thuê nhà mặt phố",
      },
      {
        text: "Cho thuê shophouse, nhà phố thương mại",
        link: "/rent/Cho thuê shophouse, nhà phố thương mại",
      },
      {
        text: "Cho thuê nhà trọ, phòng trọ",
        link: "/rent/Cho thuê nhà trọ, phòng trọ",
      },
      {
        text: "Cho thuê văn phòng",
        link: "/rent/Cho thuê văn phòng",
      },
      {
        text: "Cho thuê, sang nhượng cửa hàng, ki ốt",
        link: "/rent/Cho thuê, sang nhượng cửa hàng, ki ốt",
      },
      {
        text: "Cho thuê kho, nhà xưởng, đất",
        link: "/rent/Cho thuê kho, nhà xưởng, đất",
      },
      {
        text: "Cho thuê loại bất động sản khác",
        link: "/rent/Cho thuê loại bất động sản khác",
      },
    ],
  },
  {
    text: "Dự án",
    link: "/project/Dự án",
    submenu: [
      {
        text: "Căn hộ chung cư",
        link: "/project/Căn hộ chung cư",
      },
      {
        text: "Cao ốc văn phòng",
        link: "/project/Cao ốc văn phòng",
      },
      {
        text: "Trung tâm thương mại",
        link: "/project/Trung tâm thương mại",
      },
      {
        text: "Khu đô thị mới",
        link: "/project/Khu đô thị mới",
      },
      {
        text: "Khu phức hợp",
        link: "/project/Khu phức hợp",
      },
      {
        text: "Nhà ở xã hội",
        link: "/project/Nhà ở xã hội",
      },
      {
        text: "Khu nghỉ dưỡng, Sinh thái",
        link: "/project/Khu nghỉ dưỡng, Sinh thái",
      },
      {
        text: "Khu công nghiệp",
        link: "/project/Khu công nghiệp",
      },
      {
        text: "Biệt thự, liền kề",
        link: "/project/Biệt thự, liền kề",
      },
      {
        text: "Shophouse",
        link: "/project/Shophouse",
      },
      {
        text: "Nhà mặt phố",
        link: "/project/Nhà mặt phố",
      },
      {
        text: "Dự án khác",
        link: "/project/Dự án khác",
      },
    ],
  },
];

const Header = () => {
  const [{ y }] = useWindowScroll();
  const headerRef = React.useRef(null);
  const [heightImg, setHeightImg] = React.useState(48);

  React.useEffect(() => {
    const { clientHeight = 0 } = headerRef.current;
    if (y > clientHeight) {
      setHeightImg(40);
    } else {
      setHeightImg(48);
    }
  }, [y]);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        padding={
          y > headerRef?.current?.clientHeight
            ? "10px 15px 6px"
            : "17px 15px 17px"
        }
        ref={headerRef}
        position="fixed"
        zIndex={100}
        backgroundColor="#fff"
        width="100%"
      >
        <Stack
          id="header-nav-left"
          direction="row"
          spacing={2}
          alignItems="center"
          gap="5px"
        >
          <h2>
            <Link to="/">
              <img
                height={heightImg}
                src="https://staticfile.batdongsan.com.vn/images/logo/standard/red/logo.svg"
                alt="Kênh thông tin mua bán, cho thuê nhà đất số 1"
                title="Batdongsan.com.vn"
              />
            </Link>
          </h2>
          {menus.map((item) => (
            <DropdownMenuItem
              key={item.text}
              headerHeight={headerRef?.current?.clientHeight}
              text={item.text}
              link={item.link}
              items={item.submenu}
            />
          ))}
        </Stack>

        <Stack
          id="header-nav-right"
          direction="row"
          spacing={2}
          alignItems="center"
          gap="5px"
        >
          <Badge badgeContent={1} color="error">
            <Tooltip title="Danh sách tin đã lưu">
              <FavoriteBorderIcon
                style={{
                  cursor: "pointer",
                  transform:
                    y > headerRef?.current?.clientHeight
                      ? "scale(0.8)"
                      : "scale(1)",
                }}
              />
            </Tooltip>
          </Badge>
          <NotificationsNoneIcon
            style={{
              cursor: "pointer",
              transform:
                y > headerRef?.current?.clientHeight
                  ? "scale(0.85)"
                  : "scale(1.05)",
            }}
          />
          <HeaderBoxInfo />
        </Stack>
      </Stack>
      <Divider
        style={{
          border: "unset",
          paddingTop: headerRef.current?.clientHeight,
        }}
      />
    </>
  );
};

export default Header;
