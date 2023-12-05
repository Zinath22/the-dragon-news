import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import topNews from "../../../assets/Rectangle 8.png";
import b1 from "../../../assets/Rectangle 9.png";
import b2 from "../../../assets/Rectangle 10.png";
import b3 from "../../../assets/Rectangle 11.png";
import b4 from "../../../assets/Rectangle 12.png";

import Image from "next/image";

const LatestNews = () => {
    return (
       
            <Box>
                <Card className="my-5">
      <CardActionArea>
      <CardMedia>
               <Image src={topNews} alt="topNews" width={800}></Image>
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

    <Grid className="mt-7" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
  <Card className="my-5">
      <CardActionArea>
      <CardMedia>
               <Image src={b1} alt="" width={800}></Image>
      </CardMedia>
       <CardContent>
        <p className="w-[100px] my-5 px-2 bg-red-500 text-white">Technology</p>
        <Typography gutterBottom  component="div">
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
 
  
  
  </Grid>
  <Grid item xs={6}>
  <Card className="my-5">
      <CardActionArea>
      <CardMedia>
               <Image src={b2} alt="" width={800}></Image>
      </CardMedia>
       <CardContent>
        <p className="w-[100px] my-5 px-2 bg-red-500 text-white">Technology</p>
        <Typography gutterBottom  component="div">
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
 
  
  
  </Grid>
  <Grid item xs={6}>
  <Card className="my-5">
      <CardActionArea>
      <CardMedia>
               <Image src={b3} alt="" width={800}></Image>
      </CardMedia>
       <CardContent>
        <p className="w-[100px] my-5 px-2 bg-red-500 text-white">Technology</p>
        <Typography gutterBottom  component="div">
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
 
  
  
  </Grid>
  <Grid item xs={6}>
  <Card className="my-5">
      <CardActionArea>
      <CardMedia>
               <Image src={b4} alt="" width={800}></Image>
      </CardMedia>
       <CardContent>
        <p className="w-[100px] my-5 px-2 bg-red-500 text-white">Technology</p>
        <Typography gutterBottom  component="div">
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
 
  
  
  </Grid>
  
</Grid>
            </Box>
      
    );
};

export default LatestNews;