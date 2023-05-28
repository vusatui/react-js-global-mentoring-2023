import "reset-css";

import {ReactNode} from "react";
import StyledComponentsRegistry from "@/lib/registry";
import {GlobalStyle} from "@/app/styled";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: ['300', '400', '500'],
    style: ['normal'],

    subsets: ['latin', 'latin-ext'],
    display: 'swap',
});

export default function RootLayout({
   children,
}: {
    children: ReactNode
}) {

    return (
        <html lang="en">
        <body className={montserrat.className}>
          <StyledComponentsRegistry>
              {children}
              <GlobalStyle />
          </StyledComponentsRegistry>
        </body>
        </html>
    );
};
