import { Playfair_Display } from "next/font/google";

const Playfair = Playfair_Display(
    {
        subsets: ['latin'],
        variable: '--font-primary'
    }
);

export default Playfair;
