import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface InnerContainerProps {
    side?: number | string;
    top?: number | string;
    marginBottom?: number | string;
    paddingBottom?: number | string;
    backgroundColor?: string;
    children: ReactNode;
}

const InnerContainerStyle = styled.div<InnerContainerProps>`
    margin: ${(props) => (props.top ? props.top : '0')}
        ${(props) => (props.side ? props.side : '0')} 0
        ${(props) => (props.side ? props.side : '0')};
    position: relative;
    margin-bottom: ${(props) =>
        props.marginBottom ? props.marginBottom : '0'};
    padding-bottom: ${(props) =>
        props.paddingBottom ? props.paddingBottom : null};
    background: ${(props) =>
        props.backgroundColor ? props.backgroundColor : null};
`;

export const InnerContainer = (props: InnerContainerProps) => {
    return (
        <InnerContainerStyle
            paddingBottom={props.paddingBottom}
            backgroundColor={props.backgroundColor}
            side={props.side}
            top={props.top}
            marginBottom={props.marginBottom}
        >
            {props.children}
        </InnerContainerStyle>
    );
};
