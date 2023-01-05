import styled from "styled-components";

export const card = styled.div`
  width: 611px;
  height: 209px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 30px;

  display: flex;
`;

export const pictureDiv = styled.div`
  width: 70px;
  height: 100%;
`;

export const picture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const textDiv = styled.div`
  width: 501px;
  height: 100%;

  form {
    margin-top: 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const cardTitle = styled.span`
  width: 100%;

  font-weight: 300;
  font-size: 20px;
  color: #707070;
  line-height: 24px;
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
  height: 66px;
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
`;

export const publishButton = styled.button`
  width: 112px;
  height: 31px;
  background-color: #1877f2;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => props.disabled ? "default" : "pointer"};

  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  line-height: 17px;
`;
