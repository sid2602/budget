import React from "react";
import { MdKitchen } from "react-icons/md";
import { Story, Meta } from "@storybook/react";
import GlobalStyles from "../../../assets/styles/globalStyles";
import {
  HistoryTransaction,
  HistoryTransactionProps,
} from "../../molecules/historyTransaction/historyTransaction";
import { HistoryTransactionContainer } from "./historyTransactionContainer";

import styled from "styled-components";

export default {
  component: HistoryTransactionContainer,
  title: "molecules/history Transaction Container",
} as Meta;

const Template: Story<HistoryTransactionProps> = (args) => (
  <>
    <GlobalStyles />{" "}
    <HistoryTransactionContainer>
      <HistoryTransaction
        Icon={MdKitchen}
        category="Jedzenie dom"
        date={new Date("2021-10-10")}
        action={-50}
        comment="Comment"
      />
      <HistoryTransaction
        Icon={MdKitchen}
        category="Jedzenie dom"
        date={new Date("2021-10-9")}
        action={-40}
        comment="Comment"
      />
      <HistoryTransaction
        Icon={MdKitchen}
        category="Jedzenie dom"
        date={new Date("2021-10-8")}
        action={-25}
        comment="Comment"
      />
      <HistoryTransaction
        Icon={MdKitchen}
        category="Jedzenie dom"
        date={new Date("2021-10-7")}
        action={-10}
        comment="Comment"
      />
    </HistoryTransactionContainer>
  </>
);

export const Default = Template.bind({});

Default.args = {};
