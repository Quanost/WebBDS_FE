import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://file4.batdongsan.com.vn/crop/393x222/2023/08/03/20230803145603-1ead_wm.jpg"
        title="green iguana"
      />
      <CardContent>
        <Stack direction="row" alignItems="center">
          <Typography
            variant="body2"
            color="#07A35D"
            fontSize="12px"
            backgroundColor="#E7FFF4"
            fontWeight="bold"
            padding={0.1}
            borderRadius={1}
          >
            Đang mở bán
          </Typography>
          <span>∙</span>
          <Typography
            variant="body2"
            color="#07A35D"
            fontSize="12px"
            backgroundColor="#E7FFF4"
            borderRadius={1}
            padding={0.1}
          >
            {"10/2023: Mở bán phân khu mới The Canopy Residences".slice(0, 20)}
            ...
          </Typography>
        </Stack>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontSize="16px"
          fontWeight="500"
        >
          Vinhomes Smart City
        </Typography>
        <Typography variant="body2" fontSize="14px" fontWeight="bold">
          280 ha
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="14px">
          Nam Từ Liêm, Hà Nội
        </Typography>
      </CardContent>
    </Card>
  );
}

const OutstandingRealEstateProject = () => {
  return (
    <Box style={{ backgroundColor: "#FAFAFA", padding: "40px 0" }}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          padding="20px 0"
        >
          <Typography fontSize="24px" fontWeight="bold" variant="h2">
            Dự án bất động sản nổi bật
          </Typography>
          <Typography
            display="flex"
            alignItems="center"
            gap={0.5}
            color="#E03C31"
            fontSize={14}
          >
            Xem thêm <ArrowRightAltIcon fontSize="small" />
          </Typography>
        </Stack>

        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={3}>
            <MediaCard />
          </Grid>
          <Grid item xs={2} sm={4} md={3}>
            <MediaCard />
          </Grid>
          <Grid item xs={2} sm={4} md={3}>
            <MediaCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OutstandingRealEstateProject;
