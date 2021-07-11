import React from "react";
import { MdKitchen } from "react-icons/md";
import { Story, Meta } from "@storybook/react";
import GlobalStyles from "../../../assets/styles/globalStyles";
import {
  HistoryTransactionExtended,
  HistoryTransactionExtendedProps,
} from "../../molecules/historyTransaction/historyTransactionExtended";
import { HistoryTransactionExtendedContainer } from "./historyTransactionExtendedContainer";

export default {
  component: HistoryTransactionExtendedContainer,
  title: "organisms/history Transaction Extended Container",
} as Meta;

const Template: Story<HistoryTransactionExtendedProps> = (args) => (
  <>
    <GlobalStyles />{" "}
    <HistoryTransactionExtendedContainer>
      <HistoryTransactionExtended
        Icon={MdKitchen}
        category="Jedzenie dom"
        comment="Comment"
        expectedPrice={3000}
        actualPrice={2000}
      />
      <HistoryTransactionExtended
        Icon={MdKitchen}
        category="Jedzenie dom"
        comment="Comment"
        expectedPrice={3000}
        actualPrice={2000}
      />
      <HistoryTransactionExtended
        Icon={MdKitchen}
        category="Jedzenie dom"
        comment="Comment"
        expectedPrice={3000}
        actualPrice={2000}
      />
      <HistoryTransactionExtended
        Icon={MdKitchen}
        category="Jedzenie dom"
        comment="Comment"
        expectedPrice={3000}
        actualPrice={2000}
      />
    </HistoryTransactionExtendedContainer>
  </>
);

export const Default = Template.bind({});

Default.args = {};
