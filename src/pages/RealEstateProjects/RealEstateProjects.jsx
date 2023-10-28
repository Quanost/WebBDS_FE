import { Link, useLocation, useParams } from "react-router-dom";
import { Breadcrumbs, Container, Pagination, Stack } from "@mui/material";

import RealEstateProjectSearchBox from "./components/RealEstateProjectSearchBox";
import RealEstateProjectsCard from "./components/RealEstateProjectsCard";

const RealEstateProjects = () => {
  const { pathname } = useLocation();
  const { slug } = useParams();

  return (
    <div id="RealEstateProjects-page">
      <RealEstateProjectSearchBox />

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
            Dự án
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

        <Stack direction="column" gap={2} margin="12px 0 16px">
          {[
            "RealEstateProjectsCard-1",
            "RealEstateProjectsCard-2",
            "RealEstateProjectsCard-3",
            "RealEstateProjectsCard-4",
          ].map((item) => (
            <RealEstateProjectsCard key={item} />
          ))}
        </Stack>

        <Stack paddingY={3} direction="row" justifyContent="center">
          <Pagination sx={{ width: "fit-content" }} count={10} size="small" />
        </Stack>
      </Container>
    </div>
  );
};

export default RealEstateProjects;
