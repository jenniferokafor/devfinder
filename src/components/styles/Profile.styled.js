import styled from 'styled-components';

export const StyledSearch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.438rem;
    height: 3.75rem;
    margin: 0 1.5rem 1rem 1.5rem;
    border-radius: 15px;
    padding-left: 1rem;
    padding-right: 0.438rem;
    background-color: ${({theme}) => theme.cardClr};
    box-shadow: ${({theme}) =>theme.shadow};
    max-width: 20.438rem;

    @media (min-width: 46rem) {
        gap: 1.5rem;
        margin-bottom: 1.5rem;
        max-width: 35.813rem;
    }

    @media (min-width: 64rem) {
        max-width: 45.625rem;

    }

    input {
        min-width: 11.5rem;
        min-height: 1.563rem;
        font-family: 'Space Mono', monospace;
        border: none;
        background-color: ${({theme}) => theme.cardClr};
        color: ${({theme}) => theme.txtClr1};
        caret-color: ${({theme}) => theme.btnTxtClr};

        &::placeholder {
            color: ${({theme}) => theme.txtClr1};
        }

        &:focus {
            outline: none;
        }

        @media screen and (min-width: 64rem) {
            &, &::placeholder {
                min-width: 17rem;
                font-size: 1.125rem;
            }
        }
    }

    p {
        margin-left: auto;
        color: red;
        display: none;
    }

    button {
        width: 5.25rem;
        height: 2.875rem;
        border-radius: 10px;
        border: none;
        background-color: ${({theme}) => theme.btnTxtClr};
        color: ${({theme}) => theme.txtClr5};
        margin-left: auto;
        font-family: 'Space Mono', monospace;

        &:hover {
            opacity: 75%;
        }

      }
`

export const StyledProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 0 1.5rem 1rem 1.5rem;
    padding: 2rem 1.5rem 3rem 1.5rem;
    background-color: ${({theme}) => theme.cardClr};
    box-shadow: ${({theme}) =>theme.shadow};
    border-radius: 15px;
    max-width: 19rem;

    @media (min-width: 46rem) {
        max-width: 30rem;
    }

    @media (min-width: 64rem) {
        max-width: 43rem;
        padding-left: 12.625rem;
    }
`

export const StyledPersonDetails = styled.div`
    display: grid;
    grid: repeat(2, auto) / 4.375rem auto;
    color: ${({theme}) => theme.txtClr1};
    position: relative;

    img {
        width: 4.375rem;
        height: 4.375rem;

        @media (min-width: 64rem) {
            margin-left: -95px;
        }
    }

    div {
        margin: .45rem 0 2.063rem 1.188rem;
        display: flex;
        flex-direction: column;

        @media (min-width: 64rem) {
            margin-left: -70px;
            margin-bottom: 1rem;
        }

        h3 {
            font-size: 1rem;
            font-weight: 700;
            margin-bottom: 6px;
            color: ${({theme}) => theme.txtClr2};

            @media (min-width: 64rem) {
                font-size: 1.625rem;
            }
        }

        h4 {
            font-size: 0.813rem;
            margin-bottom: 9px;
            color: ${({theme}) => theme.btnTxtClr};

            @media (min-width: 64rem) {
                font-size: 1rem;
            }
        }

        p {
            @media (min-width: 64rem) {
                position: absolute;
                right: 10px;
                font-size: 0.938rem;
            }
        }
    }

    p {
        grid-area: 2/1/-1/-1;
        line-height: 1.563rem;
        
        @media (min-width: 64rem) {
            max-width: 30rem;
        }
    }
`

export const StyledPersonStats = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    text-align: center;
    height: 5.313rem;
    border-radius: 15px;
    background-color: ${({theme}) => theme.bgClr};

    @media (min-width: 46rem) {
        gap: 7rem;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .75rem;
        color: ${({theme}) => theme.txtClr2};

        p {
            font-size: 0.688rem;
            font-weight: 400;
        }

        span {
            font-size: 1rem;
            font-weight: 700;
        }
    }
`

export const StyledSocial = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.203rem;
        color: ${({theme}) => theme.txtClr1};

        a {
            text-decoration: none;
            color: ${({theme}) => theme.txtClr1};
        }

        a:hover {
            text-decoration: underline;
        }

        &:nth-child(3) {
            opacity: 50%;
        }
    }

    @media (min-width: 46rem) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
`