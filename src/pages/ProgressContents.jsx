import styled from "styled-components";
import ProgressBar from "../components/ProgressBar";

//ProgressBar+ContentsBox Container
const ProgressContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const ProgressBarBox = styled.div`
  min-height: 145px;
`;

//화면 높이에 따라 줄어드는 contentsBox, min-height: 500px
const ContentsBox = styled.div`
  width: 1320px;
  flex-grow: 1;
  margin-bottom: 30px;
  min-height: 500px;
  // 삭제할 코드
  background-color: #f6f6f6;
  border: 1px solid #000000;
`;

//난이도별 contents를 children으로 받아서 ProgressBar와 함께 렌더링
const ProgressContents = ({ children }) => {
  return (
    <ProgressContentsContainer>
      <ProgressBarBox>
        <ProgressBar currentStep={2} />
      </ProgressBarBox>
      <ContentsBox>{children}</ContentsBox>
    </ProgressContentsContainer>
  );
};

export default ProgressContents;
