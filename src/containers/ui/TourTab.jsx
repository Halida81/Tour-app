import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext } from "@material-ui/lab";
import { TabPanel } from "@material-ui/lab";
import { TabList } from "@material-ui/lab";
import { DATA, DATA2, DATA3, DATA4 } from "../../constants/constants";
import styled from "styled-components";
import ViewAll from "./ViewAll";

export default function TourTab() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <StyledBox>
          <TabList
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: " #FA7436",
              },
            }}
            aria-label="lab API tabs example"
          >
            <Tab className="title" label="Special Deals" value="1" />
            <Tab label="Populer" value="2" />
            <Tab label="Recommendation" value="3" />
            <Tab label="Best Price" value="4" />
          </TabList>
        </StyledBox>
        <StyledContainer>
          <TabPanel value="1">
            <ViewAll data={DATA} />
          </TabPanel>
          <TabPanel value="2">
            <ViewAll data={DATA2} />
          </TabPanel>
          <TabPanel value="3">
            <ViewAll data={DATA3} />
          </TabPanel>
          <TabPanel value="4">
            {" "}
            <ViewAll data={DATA4} />
          </TabPanel>
        </StyledContainer>
      </TabContext>
    </Box>
  );
}

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  color: #666666;
  margin-top: 50px;
`;

const StyledContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
