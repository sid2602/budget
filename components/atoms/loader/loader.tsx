import Spinner from "react-loader-spinner";
import styled from "styled-components";

export const Loader = () => {
	return <LoaderStyled type="TailSpin" color="#fff" height={20} width={20} />;
};

export const LoaderStyled = styled(Spinner)`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;
