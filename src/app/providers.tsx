"use client";

import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes";

// Video guide for setting up theme toggling:
// https://www.youtube.com/watch?v=optD7ns4ISQ
// https://www.youtube.com/watch?v=RTAJ-enfums
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider
      attribute="class"
      enableSystem={false}
      defaultTheme="dark"
    >
      {children}
    </NextThemeProvider>
  );
}
