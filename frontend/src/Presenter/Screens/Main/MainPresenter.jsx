import React from "react";
import { Button, ButtonGroup, FormControl, InputLabel, MenuItem, Pagination, Select } from "@mui/material";
import styled from "styled-components";
import TotalList from "./components/Total";
import SeasonList from "./components/Season";
import CategoryList from "./components/Category";
import ClassificationList from "./components/Classification";
import LikeList from "./components/Like";
import AddNewClothButton from "./components/AddNewClothButton";
import Suggestion from "./components/Suggestion";

const MainTopContainer = styled.div`
  min-width: 1200px;
  display: flex;
  justify-content: center;
  font-family: "Noto Sans KR", sans-serif;
  margin-bottom: 50px;
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

const SuggestionContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  gap: 20px;
`;

const MainPresenter = ({
  loading,
  filterIdx,
  onFilterButtonClick,
  onSecondFilterChange,
  secondFilter,
  onPageChange,
  page,
  setMaxPage,
  maxPage,
  folderList,
}) => {
  return (
    <>
      {!loading && (
        <MainTopContainer className="App">
          <AddNewClothButton />
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
                <Button onClick={onFilterButtonClick(4)} disabled={filterIdx === 4}>
                  좋아요
                </Button>
              </ButtonGroup>
              {
                // 계절 선택 Drop down
                filterIdx === 1 && (
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
                      defaultValue={"봄"}
                    >
                      <MenuItem value={"봄"}>봄</MenuItem>
                      <MenuItem value={"여름"}>여름</MenuItem>
                      <MenuItem value={"가을"}>가을</MenuItem>
                      <MenuItem value={"겨울"}>겨울</MenuItem>
                    </Select>
                  </FormControl>
                )
              }
              {
                // 카테고리 선택 Drop down
                filterIdx === 2 && (
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
                      defaultValue={"상의"}
                    >
                      <MenuItem value={"상의"}>상의</MenuItem>
                      <MenuItem value={"하의"}>하의</MenuItem>
                      <MenuItem value={"한벌옷"}>한벌옷</MenuItem>
                      <MenuItem value={"아우터"}>아우터</MenuItem>
                      <MenuItem value={"모자"}>모자</MenuItem>
                      <MenuItem value={"신발"}>신발</MenuItem>
                      <MenuItem value={"가방"}>가방</MenuItem>
                      <MenuItem value={"기타"}>기타</MenuItem>
                    </Select>
                  </FormControl>
                )
              }

              {
                // 분류 선택 Drop down
                filterIdx === 3 && folderList.length !== 0 && (
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
                      defaultValue={folderList.length > 0 && folderList[0].folder_id}
                    >
                      {folderList.map((f, idx) => (
                        <MenuItem key={idx} value={f.folder_id}>
                          {f.folder_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )
              }
            </ContentHeader>
            <ClothItemContainer>
              {filterIdx === 0 && <TotalList page={page} setMaxPage={setMaxPage} />}
              {filterIdx === 1 && <SeasonList secondFilter={secondFilter} page={page} setMaxPage={setMaxPage} />}
              {filterIdx === 2 && <CategoryList secondFilter={secondFilter} page={page} setMaxPage={setMaxPage} />}
              {filterIdx === 3 && <ClassificationList secondFilter={secondFilter} page={page} setMaxPage={setMaxPage} />}
              {filterIdx === 4 && <LikeList page={page} setMaxPage={setMaxPage} />}
            </ClothItemContainer>
            <PagenationContainer>
              <Pagination page={page} count={maxPage} variant="outlined" onChange={onPageChange} />
            </PagenationContainer>
            <SuggestionContainer>
              <Suggestion about="category" />
              <Suggestion about="season" />
            </SuggestionContainer>
          </MainPageContent>
        </MainTopContainer>
      )}
    </>
  );
};

export default MainPresenter;
