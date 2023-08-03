import { styled } from 'styled-components';

interface iconProps {
    src: string;
    alt?: string;
}

const IconStyle = styled.img`
    width: auto;
    margin: 0;
    padding: 0;
    vertical-align: middle;
`;

const Icons = (props: iconProps) => {
    return (
        <>
            <IconStyle src={props.src} alt={props.alt}></IconStyle>
        </>
    );
};

export default Icons;
