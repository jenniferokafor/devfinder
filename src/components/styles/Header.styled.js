import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1.938rem 1.5rem 2.25rem 1.5rem;
    width: 20.438rem;

    @media (min-width: 46rem) {
        width: 32rem;
    }

    @media (min-width: 64rem) {
        width: 43rem;

    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        margin-left: auto;

        p {
            font-weight: 700;
        }
    }

    h1 {
        font-size: 1.625rem;
        font-weight: 700;
        margin-right: auto;
    }




`
