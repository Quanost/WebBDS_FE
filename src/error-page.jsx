import { Box, Container, Stack, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Container id="error-page" sx={{ height: "100vh" }}>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Box>
          <Typography variant="h1" marginBottom={3}>
            Oops!
          </Typography>
          <Typography variant="p" textAlign="center" marginBottom={3}>
            Sorry, an unexpected error has occurred.
          </Typography>
          <Typography textAlign="center" marginBottom={2}>
            <i>{error.statusText || error.message}</i>
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default ErrorPage;
