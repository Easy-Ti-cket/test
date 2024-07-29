import styled from "styled-components";
import Input from "../input/Input";
import { InputContainer, InputField, Label } from "../input/InputStyle";
import AnimationArea from "../Animation";
import { FormWrap } from "./FormStyle";

const CardInputFied = styled(InputField)`
  width: 40px;
`;
const CardForm = ({ focusNum, handleChange }) => {
  return (
    <FormWrap>
      {/*카드 번호 */}
      <AnimationArea $focus={focusNum == 0}>
        <InputContainer>
          <Label>카드 번호</Label>
          <CardInputFied name="cardNum1" onChange={handleChange} />-
          <CardInputFied name="cardNum2" onChange={handleChange} />-
          <CardInputFied name="cardNum3" onChange={handleChange} />-
          <CardInputFied name="cardNum4" onChange={handleChange} />
        </InputContainer>
      </AnimationArea>
      <Input
        $focus={focusNum == 1}
        text="카드 비밀번호"
        name="cardPassword"
        onChange={handleChange}
      />
      <Input
        $focus={focusNum == 2}
        text="cvc 번호"
        name="cvc"
        onChange={handleChange}
      />
    </FormWrap>
  );
};

export default CardForm;
