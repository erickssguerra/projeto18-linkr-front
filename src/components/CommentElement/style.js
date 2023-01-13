import styled from "styled-components";

export const CommentContainer = styled.div`
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #353535;
  margin-bottom: 20px;

  display: flex;
`;

export const Picture = styled.img`
  width: 39px;
  height: 39px;
  border-radius: 85px;
  margin-right: 20px;
`;

export const NameAndCommentContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 14px;
  line-height: 20px;
  color: #ACACAC;

  p {
    font-weight: 700;
    color: #FFFFFF;
    cursor: pointer;
  }

  span {
    margin-left: 5px;
    
    font-weight: 400;
    color: #565656;
  }
`;
