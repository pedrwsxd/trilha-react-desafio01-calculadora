import styled from "styled-components";

export const Container = styled.div`
    background-color: #CACACA;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
` 

export const Content = styled.div`
  background-color:rgb(255, 255, 255);
  width: 50%;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`