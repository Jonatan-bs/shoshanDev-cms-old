import styled from 'styled-components';

const NavTopRightWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  z-index: 1050;
  ${process.env.NODE_ENV==="development"&&(
    `&::after{
      content: "Development";
      color: #18212e;
      position: fixed;
      top: 5px;
      left: 50%;
      font-weight: bold;
      font-size: 3rem;
      transform: translateX(-50%);
    }`
  )}
`

export default NavTopRightWrapper;
