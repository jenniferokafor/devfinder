import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: start; */
    margin: 1.938rem 0 2.25rem 0;
    width: 20.438rem;

    h1 {
        font-size: 1.625rem;
        font-weight: 700;
        margin-left: -1.25rem;
        color: ${({theme}) => theme.txtClr2};
    }

    @media (min-width: 46rem) {
        width: 36rem;
    }

    @media (min-width: 64rem) {
        width: 46rem;

    }
`

export const StyledToggleBar = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        margin-left: auto;
        cursor: pointer;

        p {
            font-weight: 700;
            color: ${({theme}) => theme.txtClr1};
        }

        &:hover {
            opacity: 75%;
        }
`