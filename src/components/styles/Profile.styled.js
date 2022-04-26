import styled from 'styled-components';

export const StyledSearch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.438rem;
    height: 3.75rem;
    margin: 0 1.5rem 1rem 0;
    border-radius: 15px;
    padding-left: 1rem;
    padding-right: 0.438rem;
    background-color: ${({theme}) => theme.cardClr};
    box-shadow: ${({theme}) =>theme.shadow};
    width: 20.438rem;

    @media (min-width: 46rem) {
        gap: 1.5rem;
        padding-right: 1.2rem;
        margin-bottom: 1.5rem;
        width: 35.813rem;
    }

    @media (min-width: 64rem) {
        padding-right: 0.5rem;
        width: 45.625rem;

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

        @media only screen and (max-width: 47.938rem) {
            font-size: 0.813rem;
        }

        @media screen and (min-width: 64rem) {
            &, &::placeholder {
                min-width: 17rem;
                font-size: 1.125rem;
            }
        }
    }

    p {
        text-align: center;
        margin-left: auto;
        color: red;
        
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
        cursor: pointer;

        &:hover {
            opacity: 75%;
        }

      }
`

export const StyledProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    /* margin: 0 1.5rem 1rem 1.5rem; */
    padding: 2rem 1.5rem 3rem 1.5rem;
    background-color: ${({theme}) => theme.cardClr};
    box-shadow: ${({theme}) =>theme.shadow};
    border-radius: 15px;
    width: 19rem;

    @media (max-width: 21.875rem) {
        width: 26rem;
    }

    @media (min-width: 46rem) {
        width: 35rem;
    }

    @media (min-width: 64rem) {
        width: 33.625rem;
        padding-left: 12rem;
    }
`

export const StyledPersonDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.063rem;
    color: ${({theme}) => theme.txtClr1};
    position: relative;

    .img-text-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.188rem;

        img {
            width: 4.375rem;
            height: 4.375rem;
            border-radius: 50%;
        }

        div {
            
            display: flex;
            flex-direction: column;
            gap: .35rem;

            h3 {
            font-size: 1rem;
            font-weight: 700;
            color: ${({theme}) => theme.txtClr2};

                @media only screen and (min-width: 48rem) {
                    font-size: 1.625rem;
                }
            }

            h4 {
                font-size: 0.813rem;
                color: ${({theme}) => theme.btnTxtClr};
            }

        }

        @media only screen and (min-width: 48rem) {
            gap: 2.563rem;

            img {
                width: 7.313rem;
                height: 7.313rem;
            }
        }

        @media only screen and (min-width: 64rem) {
                align-items: flex-start;
                padding-top: 1.25rem;

                img {
                    position: absolute;
                    left: -150px;
                }

                div {
                    

                    h4 {
                        font-size: 1rem;
                    }

                    p {
                        position: absolute;
                        right: 15px;
                    }
                }
            }
    }

    p {
        line-height: 1.563rem;
    }

    @media only screen and (min-width: 64rem) {
        gap: 1.25rem;

        
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

    @media only screen and (min-width: 46rem) {
        padding-left: 2rem;
        justify-content: start;
        gap: 6.188rem;
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

        @media only screen and (min-width: 46rem) {
            align-items: flex-start;

            span {
                font-size: 1.375rem;
            }
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

    @media only screen and (min-width: 46rem) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
`