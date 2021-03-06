import styled from 'styled-components';

export const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media only screen and (max-width: 47.938rem) {
        padding-left: 1.5rem;
    }

    @media only screen and (min-width: 48rem) {
        padding-top: 10vh;
    }
`