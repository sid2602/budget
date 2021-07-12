import React from "react";
import { MdKitchen } from "react-icons/md";
import { Story, Meta } from "@storybook/react";
import GlobalStyles from "../../../assets/styles/globalStyles";
import { HistoryTransactionExtended } from "../../molecules/historyTransaction/historyTransactionExtended";
import {
  HistoryTransactionExtendedContainer,
  HistoryTransactionExtendedContainerProps,
} from "./historyTransactionExtendedContainer";

export default {
  component: HistoryTransactionExtendedContainer,
  title: "organisms/history Transaction Extended Container",
} as Meta;

const Template: Story<HistoryTransactionExtendedContainerProps> = (args) => (
  <>
    <GlobalStyles />{" "}
    <HistoryTransactionExtendedContainer>
      <HistoryTransactionExtended
        Icon={MdKitchen}
        category="Jedzenie dom"
        comment="Comment"
        expectedPrice={3000}
        actualPrice={2000}
        extended={true}
      >
        <HistoryTransactionExtended
          Icon={MdKitchen}
          category="Jedzenie dom"
          comment="Comment"
          expectedPrice={3000}
          actualPrice={2000}
          podcategory={true}
        />
      </HistoryTransactionExtended>
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
