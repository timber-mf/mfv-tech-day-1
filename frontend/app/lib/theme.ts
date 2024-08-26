import { createTheme } from "@mantine/core";
import { Open_Sans } from "next/font/google";

export const openSans = Open_Sans({ subsets: ["latin"] });

export const theme = createTheme({
  fontFamily: openSans.style.fontFamily,
});
