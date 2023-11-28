
"use client";

import { Providers } from  "../Redux/provider";


export default function RootLayout() {
  return (
    <html lang="en">
        <body >
          
          <Providers>
            {children}
          </Providers>

        </body>
    </html>
  )
}