import styled from '@emotion/styled';

export const ContactContainer = styled.li`
  width: 300px;
  border: 1px solid blue;
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  background-color: rgba(164, 192, 238, 0.698);
  border-radius: 20px;
  padding: 10px;

  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.div`
  font-size: 15px;
  font-weight: 600;
  font-style: italic;
`;

export const Name = styled.p``;
export const Telephone = styled.p``;
export const Button = styled.button`
  border-radius: 50%;
  border-color: transparent;
  width: 70px;
  height: 70px;

  background-color: red;
  color: white;
  font-size: 15px;
  font-weight: 600;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  }
`;
