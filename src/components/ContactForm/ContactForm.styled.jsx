import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: max-content;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 20px;
`;
export const Name = styled.input`
  margin-left: 7px;
  font-size: 20px;
`;
export const Telephone = styled.input`
  font-size: 20px;
`;

export const Button = styled.button`
  width: 350px;
  height: 50px;
  border-radius: 10px;
  color: white;
  background-color: rgb(62, 85, 216);
  font-size: 15px;
  font-weight: 700;
  border-color: transparent;
  &:hover {
    color: rgba(255, 255, 255, 0.5);
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  }
`;
