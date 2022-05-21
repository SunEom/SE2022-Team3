import React from "react";
import { Button, ButtonGroup, Fab, FormControl, InputLabel, MenuItem, Pagination, Select } from "@mui/material";
import styled from "styled-components";
import AddClothIcon from "../../../images/AddClothIcon.png";
import TotalList from "./components/Total";
import SeasonList from "./components/Season";
import CategoryList from "./components/Category";
import ClassificationList from "./components/Classification";

const MainTopContainer = styled.div`
  min-width: 1000px;
  display: flex;
  justify-content: center;
  font-family: "Noto Sans KR", sans-serif;
  margin-bottom: 50px;
`;

const AddNewClothButton = styled(Fab)`
  right: 25px;
  bottom: 25px;
`;

const MainPageContent = styled.div`
  width: 1000px;
  margin-top: 50px;
`;

const ContentHeader = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
`;

const ContentTitle = styled.div`
  font-weight: 500;
  font-size: 25px;
`;

const ClothItemContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
`;

const PagenationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MainPresenter = ({
  onAddNewClothButtonClick,
  clothList,
  filterIdx,
  onFilterButtonClick,
  onSecondFilterChange,
  secondFilterIdx,
  onPageChange,
  page,
  setMaxPage,
  maxPage,
}) => {
  return (
    <MainTopContainer className="App">
      <AddNewClothButton color="success" aria-label="add" style={{ position: "fixed" }} onClick={onAddNewClothButtonClick}>
        <img src={AddClothIcon} width={70} alt="AddClothIcon" />
      </AddNewClothButton>
      <MainPageContent>
        <ContentTitle>나의 옷장</ContentTitle>
        <ContentHeader>
          <ButtonGroup style={{ height: 40 }} variant="outlined" color="success" aria-label="outlined primary button group">
            <Button onClick={onFilterButtonClick(0)} disabled={filterIdx === 0}>
              전체
            </Button>
            <Button onClick={onFilterButtonClick(1)} disabled={filterIdx === 1}>
              계절별
            </Button>
            <Button onClick={onFilterButtonClick(2)} disabled={filterIdx === 2}>
              카테고리별
            </Button>
            <Button onClick={onFilterButtonClick(3)} disabled={filterIdx === 3}>
              분류별
            </Button>
          </ButtonGroup>
          {
            // 계절 선택 Drop down
            filterIdx == 1 && (
              <FormControl sx={{ mr: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small" color="success">
                  계절
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="계절"
                  color="success"
                  onChange={onSecondFilterChange}
                  defaultValue={0}
                >
                  <MenuItem value={0}>봄</MenuItem>
                  <MenuItem value={1}>여름</MenuItem>
                  <MenuItem value={2}>가을</MenuItem>
                  <MenuItem value={3}>겨울</MenuItem>
                </Select>
              </FormControl>
            )
          }
          {
            // 카테고리 선택 Drop down
            filterIdx == 2 && (
              <FormControl sx={{ mr: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small" color="success">
                  카테고리
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="카테고리"
                  color="success"
                  onChange={onSecondFilterChange}
                  defaultValue={0}
                >
                  <MenuItem value={0}>상의</MenuItem>
                  <MenuItem value={1}>하의</MenuItem>
                  <MenuItem value={2}>아우터</MenuItem>
                  <MenuItem value={3}>모자</MenuItem>
                  <MenuItem value={4}>신발</MenuItem>
                  <MenuItem value={5}>가방</MenuItem>
                </Select>
              </FormControl>
            )
          }

          {
            // 분류 선택 Drop down
            filterIdx == 3 && (
              <FormControl sx={{ mr: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small" color="success">
                  분류
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="분류"
                  color="success"
                  onChange={onSecondFilterChange}
                  defaultValue={0}
                >
                  <MenuItem value={0}>상의</MenuItem>
                  <MenuItem value={1}>하의</MenuItem>
                </Select>
              </FormControl>
            )
          }
        </ContentHeader>
        <ClothItemContainer>
          {filterIdx === 0 && <TotalList clothList={clothList} page={page} setMaxPage={setMaxPage} />}
          {filterIdx === 1 && <SeasonList clothList={clothList} secondFilterIdx={secondFilterIdx} page={page} setMaxPage={setMaxPage} />}
          {filterIdx === 2 && <CategoryList clothList={clothList} secondFilterIdx={secondFilterIdx} page={page} setMaxPage={setMaxPage} />}
          {filterIdx === 3 && (
            <ClassificationList clothList={clothList} secondFilterIdx={secondFilterIdx} page={page} setMaxPage={setMaxPage} />
          )}
        </ClothItemContainer>
        <PagenationContainer>
          <Pagination count={maxPage} variant="outlined" onChange={onPageChange} />
        </PagenationContainer>
      </MainPageContent>
    </MainTopContainer>
  );
};

export default MainPresenter;
