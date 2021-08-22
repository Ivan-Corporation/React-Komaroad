import styled from "styled-components";
import { Ripples } from "./Ripples";

export const RippleBox = styled(Ripples)`
	width: 600px;
	height: 400px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 5px;
	.ripple {
		background-color: rgb(78, 86, 105);
	}
`;
