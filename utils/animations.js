/** @format */

import { keyframes } from "styled-components";

export const MoveOne = keyframes`
0% {
    transform: translateY(0px) translateX(0px);
}

25% {
    transform: translateY(10px) translateX(5px);
}
50% {
    transform: translateY(15px) translateX(10px);
}

75% {
    transform: translateY(10px) translateX(5px);
}

100% {
    transform: translateY(0px) translateX(0px);

}
`;

export const MoveTwo = keyframes`
0% {
    transform: translateY(0px) translateX(0px);
}

25% {
    transform: translateY(-15px) ;
}
50% {
    transform: translateX(20px);
}

75% {
    transform: translateY(-10px) ;
}

100% {
    transform: translateY(0px) translateX(0px);

}
`;
