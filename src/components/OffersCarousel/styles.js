import styled from "styled-components";

export const Container = styled.div`
  padding-left: 40px;
  padding-bottom: 40px;
  overflow-x: hidden;
  .react-multi-carousel-list{
    overflow: visible;
  }

   .carousel-item {
     padding-right: 40px;
   }
   
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #61a120;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin: 70px 0;
  margin-top: 70px;
  
  &::after{
    content: "";
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #61a120;
    left: calc(50% - 28px);
  }
`

