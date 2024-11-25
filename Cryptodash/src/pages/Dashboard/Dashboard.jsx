import DashBoardLayout from "../../comps/DashBoardLayout"
import Portfolio from "./Portfolio"
import Pricing from "./Pricing"
import { Grid } from "@chakra-ui/react"
import { GridItem } from "@chakra-ui/react"
import RecentTransc from "./RecentTransc"
const Dashboard = ({}) => {
  return (
    <DashBoardLayout title={"DashBoard"}>
      <Grid   gridTemplateColumns={{
        base:"repeat(1,1fr)",
        md:"repeat(2,1fr)"
      }} gap={"24px"}>
        <GridItem colSpan={2}>
          <Portfolio/>
        </GridItem>
      
 <GridItem >
   <Pricing/>
 </GridItem>

 <GridItem >
   <RecentTransc/>
 </GridItem>

  
   </Grid>
    </DashBoardLayout>
  )
}

export default Dashboard