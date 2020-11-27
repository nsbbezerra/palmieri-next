import styled from "@emotion/styled";

export const ContainerApp = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContainerNonFixed = styled.div`
  display: block;
  width: 100%;
  max-width: 100%;
`;

export const Fixed = styled.section`
  width: 100%;
  max-width: 1380px;
  display: block;
`;

export const FixedPanel = styled.div`
  width: 100%;
  margin-top: ${(props) => (props.display === 1 ? 0 : -50)}px;
  opacity: ${(props) => props.display || 0};
  transition: all 0.8s;
  position: fixed;
  z-index: 1000;
  height: 50px;
  top: 0;
  background-color: rgba(240, 240, 240, 0.9);
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);
`;
