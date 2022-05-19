import styled from "styled-components";

export const Container = styled.form`
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;

        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;
        
        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }

        /* &[type="number"] {
            -moz-appearance:textfield;

            ::-webkit-inner-spin-button {
                -webkit-appearance: none;
            }

            ::-webkit-outer-spin-button {
                -webkit-appearance: none;
            }
        } */
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #ffffff;
        border-radius: 0.15rem;
        border: 0;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.5rem;

        transition: filter 0.15s;

        filter: brightness(1.0) drop-shadow(0.1rem 0.1rem 0.4rem #00000030);

        &:hover {
            filter: brightness(0.9) drop-shadow(0.1rem 0.1rem 0.4rem #00000030);
        }
    }
`