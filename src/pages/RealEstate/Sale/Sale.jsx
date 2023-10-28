import {
  Breadcrumbs,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import RealEstateSearchBox from "../components/RealEstateSearchBox";
import { Link, useLocation, useParams } from "react-router-dom";
import RealEstateCard from "../components/RealEstateCard";
import FilterSidebar from "../components/FilterSidebar";

const RealEstateForSale = () => {
  const { pathname } = useLocation();
  const { slug } = useParams();

  return (
    <div id="RealEstateForSale-page">
      <RealEstateSearchBox searchType="sale" />
      <Container maxWidth="lg">
        <Breadcrumbs sx={{ marginTop: 3 }} aria-label="breadcrumb">
          <Link
            style={{
              color: "#999999",
              textDecoration: "none",
              fontSize: 14,
            }}
            to={pathname}
          >
            Bán
          </Link>
          <Link
            style={{
              color: "#2c2c2c",
              textDecoration: "none",
              fontSize: 14,
            }}
            to={pathname}
          >
            {slug}
          </Link>
        </Breadcrumbs>
        <Typography
          fontSize="24px"
          fontWeight="bold"
          variant="h2"
          padding="20px 0"
        >
          Mua bán nhà đất trên toàn quốc
        </Typography>

        <Grid container xs={12} spacing={2}>
          {/* This has pagination */}
          <Grid item xs={9}>
            <Stack direction="column" gap={2}>
              {[
                "RealEstateCard-1",
                "RealEstateCard-2",
                "RealEstateCard-3",
                "RealEstateCard-4",
              ].map((item) => (
                <RealEstateCard key={item} />
              ))}
            </Stack>
            <Stack paddingY={3} direction="row" justifyContent="center">
              <Pagination
                sx={{ width: "fit-content" }}
                count={10}
                size="small"
              />
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <FilterSidebar variant="sale" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default RealEstateForSale;
