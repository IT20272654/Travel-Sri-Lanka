import { css } from "@emotion/css";
import heroImg04 from '../assets/images/hero-img04.png'


const PausedOverlay = () => (
  <div>
    <img src={heroImg04} alt='' />
    <div
      className={css`
        /* Ensure the description text is displayed on top of the thumbnail image */
        z-index: 1;
        font-family: sans-serif;
        /* Position the text in the bottom-left corner of the overlay */
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 1em;

        h1 {
          margin: 0 0 0.2em;
        }
        p {
          margin: 0 0.2em 0;
        }
      `}
    >
    </div>
  </div>
);

export default PausedOverlay;
