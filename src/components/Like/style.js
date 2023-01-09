import styled from "styled-components";

export const Icon = styled.div`
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LikesCount = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  margin-top: 2px;
  text-align: center;
  position: relative;
  &:hover::after,
  &:hover::before {
    transition: 0.2s;
    opacity: 1;
    pointer-events: all;
  }

  &::after {
    top: 25px;
    white-space: nowrap;
    pointer-events: none;
    transition: 0.2s;
    content: attr(aria-label);
    color: #505050;
    background: white;
    border-radius: 3px;
    padding: 5px 10px;
    opacity: 0;
    position: absolute;
    z-index: 2;
    overflow: hidden;
  }

  &::before {
    top: 20px;
    pointer-events: none;
    content: "";
    color: white;
    position: absolute;
    width: 13px;
    height: 13px;
    background: white;
    opacity: 0;
    transform: rotate(45deg);
    z-index: 1;
    background: white;
    transition: 0.1s;
    overflow: hidden;
  }
`;
