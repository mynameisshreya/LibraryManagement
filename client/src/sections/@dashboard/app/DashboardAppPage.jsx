import { Helmet } from "react-helmet-async";
import { useTheme } from "@mui/material/styles";
import { Container, Grid, Typography } from "@mui/material";
import { AppCurrentVisits, AppWebsiteVisits, AppWidgetSummary } from "./index";
import { useAuth } from "../../../hooks/useAuth";

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const { user } = useAuth();
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>  Dashboard </title>
      </Helmet>

      <Container maxWidth="xl" >
        <Typography variant="h4" sx={{mb: 5}}>
          Hi {user.name.split(' ')[0]}, Welcome to Library
        </Typography>

        <Grid container spacing={3}>
          

          <Grid item xs={12} md={6} lg={8}>
            
            <AppWebsiteVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/12/2024',
                '02/12/2024',
                '03/12/2024',
                '04/12/2024',
                '05/12/2024',
                '06/12/2024',
                '07/12/2024',
                '08/12/2024',
                '09/12/2024',
                '10/12/2024',
                '11/12/2024',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'India', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'America', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

        </Grid>
      </Container>
    </>
  );
}
