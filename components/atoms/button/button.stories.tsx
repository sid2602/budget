import React from "react";

import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./button";

export default {
	component: Button,
	title: "Components/Atoms/Button",
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Default = Template.bind({});
export const Loading = Template.bind({});
export const Big = Template.bind({});
export const FullWidth = Template.bind({});

Primary.args = {
	primary: true,
	children: "Primary Button",
	big: false,
	fullWidth: false,
	isLoading: false,
};

Default.args = {
	primary: false,
	children: "Default Button",
	big: false,
	fullWidth: false,
	isLoading: false,
};

Loading.args = {
	primary: true,
	children: "Primary Button",
	big: false,
	fullWidth: false,
	isLoading: true,
};

Big.args = {
	primary: true,
	children: "Big button",
	isLoading: false,
	big: true,
	fullWidth: false,
};

FullWidth.args = {
	primary: true,
	children: "Full width button",
	isLoading: false,
	big: false,
	fullWidth: true,
};
