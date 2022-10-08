import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';

const MyMenu = () => {
  const onClickJoin = () => {
    alert('회원가입 기능 개발 필요');
  };
  const onClickLogin = () => {
    alert('로그인 기능 개발 필요');
  };
  return (
    <MyMenuSection>
      <NavWrap>
        <ResetUI css={flexCenterWrap}>
          <li>
            <Link href="/">My Review World</Link>
          </li>
        </ResetUI>

        <ResetUI css={flexCenterWrap}>
          <li>
            <NavItemButton type="button" onClick={onClickJoin}>
              회원가입
            </NavItemButton>
          </li>
          <li>
            <NavItemButton onClick={onClickLogin}>로그인</NavItemButton>
          </li>
        </ResetUI>
      </NavWrap>
    </MyMenuSection>
  );
};

const defaultCSS = css`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  line-height: 1;
`;

const ResetUI = styled.ul`
  ${defaultCSS}
  list-style: none;
`;

const flexCenterWrap = css`
  display: flex;
  align-items: center;
`;

const MyMenuSection = styled.section`
  height: 40px;
`;

const NavWrap = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`;

const NavItemButton = styled.button`
  display: inline-flex;
  align-items: center;
  line-height: 17px;
  overflow: hidden;
  color: #787a7d;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:not(:disabled):hover {
    color: #4286f4;
  }
`;

export default MyMenu;
