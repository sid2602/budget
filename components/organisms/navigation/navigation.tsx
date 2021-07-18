import styled from "styled-components";
import { RiDashboardLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiOutlinePieChart } from "react-icons/ai";
import { GoCalendar } from "react-icons/go";
import { BiUser } from "react-icons/bi";
import { BiLogOutCircle } from "react-icons/bi";
import { IoLogoNpm } from "react-icons/io";
import Link from "next/link";
import { IconType } from "react-icons/lib";
import React from "react";

export type NavigationProps = {};

type LinkTypes = {
  id: number;
  Icon: IconType;
  href: string;
};

const links: LinkTypes[] = [
  { id: 0, Icon: RiDashboardLine, href: "/dashboard" },
  { id: 1, Icon: GiReceiveMoney, href: "/saved" },
  { id: 2, Icon: GiTakeMyMoney, href: "/spended" },
  { id: 3, Icon: AiOutlinePieChart, href: "/chart" },
  { id: 4, Icon: GoCalendar, href: "/calendar" },
  { id: 5, Icon: BiUser, href: "/profile" },
];

export const Navigation = () => {
  return (
    <Nav>
      <Link href="/">
        <a>
          <IoLogoNpm />
        </a>
      </Link>
      <LiksContainer>
        {links.map(({ href, Icon, id }) => (
          <Link href={href} key={id}>
            <a>
              <Icon />
            </a>
          </Link>
        ))}
      </LiksContainer>
      <Link href="/">
        <a>
          <BiLogOutCircle />
        </a>
      </Link>
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 2rem 1rem;
  width: 120px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  svg {
    width: 40px;
    height: 40px;
  }
`;

const LiksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
