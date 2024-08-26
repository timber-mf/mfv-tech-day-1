"use client";

import { MantineProvider } from "@mantine/core";
import { theme } from "@/app/lib/theme";
import { Todo } from "./todo";

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MantineProvider theme={theme}>
      <Todo.Provider>{children}</Todo.Provider>
    </MantineProvider>
  );
}
