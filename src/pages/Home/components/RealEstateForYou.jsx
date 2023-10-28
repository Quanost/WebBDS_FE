import React from "react";
import { styled } from "@mui/material/styles";
import {
  Container,
  Stack,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Tooltip,
  IconButton,
  Collapse,
  Box,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://file4.batdongsan.com.vn/crop/393x222/2023/08/03/20230803145603-1ead_wm.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontSize="14px"
          fontWeight="500"
        >
          Bán tòa chung cư mini, 7 phòng, tháng máy, Giải Phóng, Hoàng Mai, Hà
          Nội DT 54,2m2
        </Typography>
        <Typography variant="body2" color="red" fontSize="16px">
          <span>6,9 tỷ</span> <span>54 m²</span>
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="14px">
          Hoàng Mai, Hà Nội
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant="caption" color="text.secondary" fontSize="12px">
          Đăng 1 tuần trước
        </Typography>
        <Tooltip title="Bấm để lưu tin">
          <Button
            style={{ marginLeft: "auto" }}
            variant="outlined"
            size="small"
            color="secondary"
          >
            <FavoriteBorderOutlinedIcon />
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RealEstateForYou = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
            Bất động sản dành cho bạn
          </Typography>
          <Typography>
            <a style={{ textDecoration: "unset", color: "#000" }} href="#">
              Tin nhà đất bán mới nhất
            </a>
            <span style={{ padding: "0 10px" }}>|</span>
            <a style={{ textDecoration: "unset", color: "#000" }} href="#">
              Tin nhà đất thuê mới nhất
            </a>
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
          <Grid item xs={2} sm={4} md={3}>
            <MediaCard />
          </Grid>

          <Grid item xs={2} sm={4} md={3}>
            <MediaCard />
          </Grid>
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

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Grid
            container
            marginTop={{ xs: 1 }}
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
            <Grid item xs={2} sm={4} md={3}>
              <MediaCard />
            </Grid>
          </Grid>
        </Collapse>

        <Typography textAlign="center" marginTop={3} marginBottom={3}>
          {expanded ? (
            <Button
              variant="outlined"
              size="large"
              style={{ borderColor: "#000", color: "#000", fontSize: 14 }}
            >
              Xem tiếp
            </Button>
          ) : (
            <ExpandMore
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <Button
                variant="outlined"
                size="large"
                style={{ borderColor: "#000", color: "#000", fontSize: 14 }}
              >
                Mở rộng
                <ExpandMoreIcon />
              </Button>
            </ExpandMore>
          )}
        </Typography>
      </Container>
    </Box>
  );
};

export default RealEstateForYou;
