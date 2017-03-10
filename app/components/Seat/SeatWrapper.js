/**
 * Created by helge on 15.02.17.
 */

import styled from 'styled-components';

import {
  navy,
  orange,
  gray,
} from 'variables';

export const SeatWrapper = styled.div`
  position: absolute;
  left: ${(props) => props.coords[0]}%;
  top: ${(props) => props.coords[1]}%;
`;

export const ImageContainer = styled.div`
  border-radius: 50%;
  border: 4px solid ${(props) => {
    if (props.whosTurn === props.pos && props.open) {
      return orange;
    }
    if (props.lastAction === 'sitOut') {
      return gray;
    }
    return navy;
  }};
  background: #FFF;
  position: absolute;
  width: 3em;
  height: 3em;
  background: none;
  text-align: center;
  transform: translate(-50%,-50%);
  ${(props) => (props.open) ? 'cursor: pointer' : ''};
  z-index: 10;
`;

export const DealerButton = styled.div`
  border-radius: 50%;
  ${(props) => (!(props.hand.dealer === props.pos)) ? 'display: none;' : ''}
  border: 4px solid ${(orange)}
  width: 1.5em;
  height: 1.5em;
  background: ${(navy)};
  text-align: center;
  color: white;
  position: absolute;
  z-index: 10;
`;

export const InfoContainer = styled.div`
  width: 9em;
  height: 5.5em;
  margin-left: 2.75em;
  border-radius: 25%;
  background: #FFF;
  position: absolute;
  border: 4px solid ${navy};
`;

export const CardContainer = styled.div`
  width: 7em;
  height: 5.5em;
  text-align: center;
  margin-top: -4em;
  margin-left: 3em;
  ${(props) => (props.folded) ? 'display: none' : ''}
`;
