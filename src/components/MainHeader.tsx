import { useState } from 'react'
import { useSignInRedirect } from '@/hooks/useSignInRedirect';
import { useBosComponents } from '@/hooks/useBosComponents';
import { useAuthStore } from '@/stores/auth';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import CodequityLogo from '@/assets/images/codequity-logo.svg';
import { SignInButton } from '../components/lib/SignInButton/SignInButton'
import { UserDropdown } from '../components/lib/UserDropDown/UserDropdown'

const Header = styled.header`
  background: #fff;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;

  button {
    background: #000;
    color: #fff;
    padding: 0.3rem 1rem;
    border-radius: 10rem;
    cursor: pointer;
  }

  .logo-link {
    img {
      width: 28px;
      height: 28px;
    }

    &.large {
      img {
        width: 110px;
      }
    }
  }

  img {
    width: 175px;
    &.logo-only {
      width: 27px;
      height: 27px;
    }
  }
`;

const StyledNavigation = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: var(--slate-dark-1);
  z-index: 1000;
  padding: 12px 0;

  button,
  a,
  input {
    font-size: 14px;
    font-weight: 500;
  }

  .user-section {
    margin-left: auto;
    > button {
      font-size: 14px;
    }
  }

  > .container {
    display: flex;
    align-items: center;

    .navigation-section {
      margin-left: 50px;
      display: flex;

      > div {
        > a {
          margin-right: 20px;
        }
      }
      > button {
        margin-right: 20px;
      }
    }

    .user-section {
      display: flex;
      align-items: center;

      .nav-create-btn {
        margin-left: 10px;
      }
    }

    .arrow-up-right {
      margin-left: 4px;
    }
  }

  input {
    background-repeat: no-repeat;
    background-repeat: no-repeat;
    border-radius: 50px;
    padding: 10px 25px 10px 44px;
    background-position: 12px 8px;
    border: 0;
    background-color: #2b2f31;
    font-weight: 500;
    color: white;
    margin-left: 50px;

    :focus {
      border: 0;
      outline: 0;
    }

    ::placeholder {
      color: #9ba1a6;
      font-weight: 500;
    }
  }

  .form-wrapper {
    position: relative;

    svg {
      position: absolute;
      right: 16px;
      top: 10px;
      width: 20px;
      height: 20px;
    }
  }
`;

export const MainHeader = () => {
  const signedIn = useAuthStore((store) => store.signedIn);
  const accountId = useAuthStore((store) => store.accountId);
  const logOut = useAuthStore((store) => store.logOut);
  const { requestAuthentication } = useSignInRedirect();
  const [menuDropdown, setMenuDropdown] = useState(false);
 // const components = useBosComponents();

  return (
    <Header>
      <Link href="/">
        <Image
          src={CodequityLogo}
          alt="Codequity Logo"
          width="175"
        />
      </Link>
      <StyledNavigation onMouseLeave={() => setMenuDropdown(false)}>
        <div className="user-section">
            {!signedIn && (
              <div style={{ display: 'flex', gap: '10px' }}>
                <SignInButton onSignIn={() => requestAuthentication(true)} > Sign Up</SignInButton>
                <SignInButton onSignIn={() => requestAuthentication()}> Sign In</SignInButton>
              </div>
            )}
            
        </div>
      </StyledNavigation>
    </Header>
  );
};
