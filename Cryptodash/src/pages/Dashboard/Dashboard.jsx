import DashBoardLayout from "../../comps/DashBoardLayout"
import Portfolio from "./Portfolio"
import Pricing from "./Pricing"
import { Grid } from "@chakra-ui/react"
import { GridItem } from "@chakra-ui/react"
import RecentTransc from "./RecentTransc"
import BottomCards from "./BottomCards"
import loan from "../../images/lolaoan/Dashboard/visual.png"
import Contact from "../../images/conconnconc/Dashboard/visual.png"
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
  <GridItem >
   <BottomCards 
   bg="white"
   c="black"
   tagbg="#5F00D9"
   title="Loans" 
   content="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it" 
   image={`url(${loan})`} />
 </GridItem>
  <GridItem >
   <BottomCards  
    bg="#5F00D9"
   c="white"
   tagbg="white"
   title="Contact" 
   content="Learn more about our real estate, mortgage, and  corporate account services" 
   image={`url(${Contact})`}
   
   />
 </GridItem>

  
   </Grid>
    </DashBoardLayout>
  )
}

export default Dashboard