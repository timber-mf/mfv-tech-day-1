"use client";

import { MantineProvider } from "@mantine/core";
import { theme } from "@/app/lib/theme";
import { Todo } from "./todo";
import { SessionProvider } from "next-auth/react";

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MantineProvider theme={theme}>
      <SessionProvider>
        <Todo.Provider>{children}</Todo.Provider>
      </SessionProvider>
    </MantineProvider>
  );
}
