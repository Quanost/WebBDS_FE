import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";

const RealEstateProjectsCard = () => {
  return (
    <Card sx={{ boxShadow: 3 }}>
      <CardContent>
        <Grid container xs={12}>
          <Grid item xs={3} className="left-column">
            <Stack direction="column" justifyContent="center">
              <img
                width="240px"
                src="https://file4.batdongsan.com.vn/crop/240x180/2023/09/19/20230919101130-7c14_wm.jpg"
              />

              <Stack direction="row">
                <img
                  width="120px"
                  src="https://file4.batdongsan.com.vn/crop/240x180/2023/09/19/20230919101124-aadf_wm.jpg"
                />
                <img
                  width="120px"
                  src="https://file4.batdongsan.com.vn/crop/240x180/2023/09/19/20230919101110-e0ff_wm.jpg"
                />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={9} className="right-column">
            <Stack direction="column">
              <Typography
                padding="4px 8px"
                fontSize="12px"
                width="fit-content"
                borderRadius="4px"
                marginBottom="8px"
                sx={{
                  color: "#999",
                  backgroundColor: "#F2F2F2",
                }}
              >
                đang cập nhập
              </Typography>
              <Typography fontWeight="bold" fontSize="16px" marginBottom="8px">
                Victory Tower Gò Vấp
              </Typography>
              <Typography fontSize="14px" color="#2C2C2C" marginBottom="8px">
                318-320 Nguyễn Oanh, Phường 17, Quận Gò Vấp, Hồ Chí Minh
              </Typography>
              <Typography fontSize="14px" color="#505050">
                Tòa nhà Victory Tower là tòa văn phòng hạng A tại quận Gò Vấp,
                TP.HCM, quy mô gồm 9 tầng nổi và 2 tầng hầm. Với thiết kế hiện
                đại, vị trí thuận tiện giao thông, tòa văn phòng Victory Tower
                hứa hẹn là điểm đến hàng đầu cho các doanh nghiệp đang tìm kiếm
                một không gian làm việc tại khu vực phía Bắc TP.HCM.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RealEstateProjectsCard;
