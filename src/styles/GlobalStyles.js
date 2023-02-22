import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root{
        /* Primary Palette */
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        /* Grey Scale Palette */
        --color-grey-0: #F8F9FA;
        --color-grey-1: #868E96;
        --color-grey-2: #343B41;
        --color-grey-3: #212529;
        --color-grey-4: #121214;

        /* Feedback Palette */
        --color-succes: #3FE864;
        --color-negative: #E83F5B;

        /* buttons */
        --radius-default: .25rem;

    }

    /* BUTTONS */
    button{
        border: none;
        border-radius: var(--radius-default);
        color: #fff;
        transition: .15s;

        cursor: pointer;
    }

    .default {
        padding: .656rem 1.375rem;
        height: 2.4rem;

        font-size: 1rem;
        font-weight: 500;
    }

    .default.pink{
        background-color: var(--color-primary);
        opacity: .9;
    }
    .default.pink{
        opacity: 1;
    }
    .default.pink:focus{
        background-color: var(--color-primary-focus)
    }

    .grey{
        background-color: var(--color-grey-1);
        opacity: .9;
    }
    .grey:hover{
        opacity: 1
    }
    .grey:focus{
        background-color: var(--color-grey-2);
    }
`

export default GlobalStyles;