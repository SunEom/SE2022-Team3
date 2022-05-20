import { Backdrop, Button, Card, CardContent, CardMedia, Fade, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";

const ClothItemCard = styled(Card)`
  width: 450px;
  height: 200px;
  display: flex;
`;

const InfoContainer = styled(CardContent)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const Brand = styled.div`
  color: gray;
  font-size: 15px;
`;

const DetailButtonDiv = styled.div`
  margin-top: 20px;
  width: 250px;
  text-align: end;
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ClothItemPresenter = ({ cloth }) => {
  const { name, brand, file_name } = cloth;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ClothItemCard>
      <CardMedia component="img" sx={{ width: 150 }} image={file_name} alt="Live from space album cover" />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <InfoContainer>
          <Title>{name.length <= 17 ? name : name.substring(0, 17) + "..."}</Title>
          <Brand>{brand}</Brand>
          <DetailButtonDiv>
            <Button onClick={handleOpen}>상세 정보</Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Typography id="transition-modal-title" variant="h6" component="h2">
                    {name}
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    {brand}
                  </Typography>
                </Box>
              </Fade>
            </Modal>
          </DetailButtonDiv>
        </InfoContainer>
      </Box>
    </ClothItemCard>
  );
};

export default ClothItemPresenter;
