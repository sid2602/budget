import styled, { css } from "styled-components";
import React from "react";
import { Loader } from "../loader/loader";
export type ButtonProps = {
	children: React.ReactNode;
	onClick: () => void;
	isLoading?: boolean;
	primary?: boolean;
	small?: boolean;
	big?: boolean;
	fullWidth?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
	onClick,
	children,
	primary,
	small,
	big,
	fullWidth,
	isLoading,
}) => {
	return (
		<StyledButton
			primary={primary}
			small={small}
			big={big}
			fullWidth={fullWidth}
			onClick={onClick}
			disabled={isLoading}
		>
			{isLoading && <Loader />}
			<span>{children}</span>
		</StyledButton>
	);
};

Button.defaultProps = {
	children: "Button",
	primary: false,
	small: false,
	big: false,
	onClick: () => {},
	fullWidth: false,
};

const StyledButton = styled.button<ButtonProps>`
	position: relative;
	display: inline-block;
	padding: 0.8rem 2rem;
	background-color: white;
	font-weight: bold;
	color: black;
	border-radius: 1rem;
	cursor: pointer;
	font-size: 0.8rem;
	text-align: center;
	border: none;

	${({ primary }) =>
		primary &&
		css`
			background-color: #0085cf;
			color: white;
			:hover {
				background-color: #0071ad;
			}
		`}

	${({ big }) =>
		big &&
		css`
			padding: 0.8rem 2.4rem;
			font-size: 1rem;
		`}

		${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`}

		${({ disabled }) =>
		disabled &&
		css`
			opacity: 0.4;
			span {
				opacity: 0;
			}
		`}
`;
