import { css } from "@emotion/react";

export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Barlow:wght@600&family=Fraunces:wght@700;900&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  :root {
    /* Colors */

    /* Primary */
    --clr-soft-red: hsl(7, 99%, 70%);
    --clr-yellow: hsl(51, 100%, 49%);
    --clr-dark-desaturated-cyan: hsl(167, 40%, 24%);
    --clr-dark-blue: hsl(198, 62%, 26%);
    --clr-dark-moderate-cyan: hsl(168, 34%, 41%);
    --clr-light-green: hsl(167, 44%, 70%);
    --clr-dark-green: hsl(166, 44%, 32%);

    /* Neutral */
    --clr-very-dark-desaturated-blue: hsl(212, 27%, 19%);
    --clr-very-dark-grayish-blue: hsl(213, 9%, 39%);
    --clr-dark-grayish-blue: hsl(232, 10%, 55%);
    --clr-grayish-blue: hsl(210, 4%, 67%);
    --clr-white: hsl(0, 0%, 100%);

    /* Typography */

    /* font family */
    --ff-barlow: "Barlow", sans-serif;
    --ff-fraunces: "Fraunces", serif;

    /* font weight */
    --fw-semi-bold: 600;
    --fw-bold: 700;
    --fw-black: 900;
  }
  #root {
    font-family: var(--ff-barlow);
    font-weight: var(--fw-semi-bold);
    line-height: 1.5;
    color: var(--white);
    min-height: 100vh;
    max-width: 100vw;
  }
`;
