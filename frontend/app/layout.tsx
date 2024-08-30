import type { Metadata } from "next";
import { Providers } from "@/app/lib/providers";
import { openSans } from "@/app/lib/theme";
import { ColorSchemeScript } from "@mantine/core";
import { auth } from "@/app/lib/auth";

import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import AppLayout from "@/app/ui/app-layout";

export const metadata: Metadata = {
  title: "MFV PAAT Tech Day 1",
  description: "MFV PAAT Tech Day 1",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={openSans.className}>
        <Providers>
          <AppLayout session={session}>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
