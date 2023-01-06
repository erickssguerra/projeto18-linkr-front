import styled from "styled-components";
import { device } from "../../assets/breakpoints";

export const card = styled.div`
  width: 100%;
  height: 164px;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 16px;

  display: flex;

  @media ${device.tablet} {
    width: 611px;
    height: 209px;
    padding: 20px;
    border-radius: 16px;
    margin: 0px 0px 30px 0px;
  }

  @media ${device.desktop} {
    margin: 0px 0px 30px -29px;
  }
`;

export const pictureDiv = styled.div`
  width: 70px;
  height: 100%;

  display: none;

  @media ${device.tablet} {
    display: inherit;
  }
`;

export const picture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const textDiv = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    width: 100%;
    margin-top: 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  @media ${device.tablet} {
    width: 501px;

    align-items: flex-start;
  }
`;

export const cardTitle = styled.span`
  font-weight: 300;
  font-size: 20px;
  color: #707070;
  line-height: 24px;
  text-align: center;
`;

export const urlInput = styled.input`
  width: 100%;
  height: 30px;
  padding-left: 12px;
  background-color: #efefef;
  border: none;
  border-radius: 5px;
  margin-bottom: 5px;

  ::placeholder {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 15px;
    color: #949494;
    line-height: 18px;
  }
`;

export const descriptionTextarea = styled.textarea`
  width: 100%;
  height: 47px;
  padding: 8px 12px;
  background-color: #efefef;
  border: none;
  border-radius: 5px;
  resize: none;
  margin-bottom: 5px;

  ::placeholder {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 15px;
    color: #949494;
    line-height: 18px;
  }

  @media ${device.tablet} {
    height: 66px;
  }
`;

export const publishButton = styled.button`
  width: 112px;
  height: 22px;
  background-color: #1877f2;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  line-height: 17px;

  @media ${device.tablet} {
    height: 31px;
  }
`;
