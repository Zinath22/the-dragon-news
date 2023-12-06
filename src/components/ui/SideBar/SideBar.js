import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import sideBarNews from "../../../assets/Rectangle 9 (1).png";


const SideBar = () => {
  return (
    <Box>
                <Card className="my-5">
      <CardActionArea>
      <CardMedia>
               <Image src={sideBarNews} alt="topNews" width={800}></Image>
      </CardMedia>
       <CardContent>
        <p className="w-[100px] my-5 px-2 bg-red-500 text-white">Technology</p>
        <Typography gutterBottom variant="h5" component="div">
        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
        </Typography>
        <Typography gutterBottom  className="my-3">
        By Awlad Hossain - Mar 18 2023
        </Typography>
        <Typography variant="body2" color="text.secondary">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
        </Typography>
      </CardContent>
      
      </CardActionArea>
    </Card>
    </Box>
  );
};

export default SideBar;