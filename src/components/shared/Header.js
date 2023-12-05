import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImg from "../../assets/The Dragon News.png";
import { getCurrentDate } from "@/utils/getCurrentDate";


const Header = () => {
    const currentDate = getCurrentDate();
    return (
        <Box className="w-full my-5">
            <Container>
                <Image className="mx-auto" src={headingImg} width={500} height={500} alt="logo"></Image>

                <Typography variant="body2" color="grey" textAlign="center" className="my-2">
                Journalism Without Fear or Favour
          </Typography>
                <Typography  textAlign="center">
               {currentDate}
          </Typography>

            </Container>
        </Box>
    );
};

export default Header;