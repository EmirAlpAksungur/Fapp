import * as React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { Box } from "@mui/material";

const NAVIGATION = [
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "panel",
    title: "Reports",
    icon: <BarChartIcon />,
  },
  {
    segment: "panel/panel-1",
    title: "Sales",
    icon: <DescriptionIcon />,
  },
  {
    segment: "panel/panel-1",
    title: "Traffic",
    icon: <DescriptionIcon />,
  },
];

export default function DashboardLayoutBasic({ children }) {
  return (
    <Box
      sx={{
        header: {
          display: "none",
          height: "0px !important   ",
        },
        ".MuiToolbar-root": {
          display: "none",
        },
        ".MuiBox-root ": {
          width: "100%",
        },
      }}
    >
      <AppProvider navigation={NAVIGATION}>
        <DashboardLayout>
          <PageContainer>{children}</PageContainer>
        </DashboardLayout>
      </AppProvider>
    </Box>
  );
}
