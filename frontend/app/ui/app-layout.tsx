"use client";

import {
  AppShell,
  Group,
  Burger,
  Skeleton,
  Menu,
  rem,
  Text,
  NavLink,
} from "@mantine/core";
import "@mantine/dates/styles.css";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { useSession } from "next-auth/react";
import UserButton from "@/app/ui/user-button";
import { signOut } from "next-auth/react";
import {
  IconLogout,
  IconHome2,
  IconHandClick,
  IconUserCheck,
  IconQrcode,
} from "@tabler/icons-react";
import { Session } from "next-auth";
import SignIn from "@/app/ui/sign-in";
import { Todo } from "../lib/todo";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  const [opened, { toggle }] = useDisclosure();
  const { data: session, status } = useSession();
  const service = Todo.useService();
  if (!session && !service.user) {
    return <SignIn />;
  }
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Image
              src="/logo.svg"
              alt="Money Forward"
              width={137}
              height={24}
            />
            <Text>PAAT Tech Day 1</Text>
            <Menu shadow="sm" width={180}>
              <Menu.Target>
                <UserButton image={session?.user?.image || ""} />
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Hi, {session?.user?.name}</Menu.Label>
                <Menu.Item
                  leftSection={
                    <IconLogout style={{ width: rem(14), height: rem(14) }} />
                  }
                  onClick={() => {
                    signOut();
                    service.setUser(null);
                  }}
                >
                  Sign Out
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <NavLink
          href="/seat-booking"
          label="Seat Booking"
          leftSection={<IconHandClick size="1.3rem" stroke={1.5} />}
        />
        <NavLink
          href="/qr-list"
          label="Seat List"
          leftSection={<IconQrcode size="1.3rem" stroke={1.5} />}
        />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
