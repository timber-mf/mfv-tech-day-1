"use client";

import {
  Button,
  Container,
  Center,
  Space,
  AppShell,
  Group,
  TextInput,
} from "@mantine/core";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { Todo } from "../lib/todo";
import { jwtDecode } from "jwt-decode";

type LoginForm = {
  username: string;
  password: string;
};

export default function SignIn() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const service = Todo.useService();

  const onSubmit = handleSubmit((data) => {
    (async function () {
      const res = await fetch("https://api.paat.party/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const token = await res.text();
        const payload = jwtDecode(token);
        service.setUser({
          name: payload.sub || "",
          email: payload.sub || "",
          department: payload.sub || "",
          token,
        });
      } else {
        alert("Login failed");
      }
    })();
  });
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          <Image src="/logo.svg" alt="Money Forward" width={137} height={24} />
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Container>
          <Space h="lg" />
          <Center className={"flex-col"}>
            <TextInput label="Username" w="300px" {...register("username")} />
            <Space h="xs" />
            <TextInput
              label="Password"
              w="300px"
              type="password"
              {...register("password")}
            />
            <Space h="lg" />
            <Button
              variant="outline"
              color="black"
              w="300px"
              onClick={onSubmit}
            >
              Login
            </Button>
          </Center>
          <Space h="lg" />
          <Space h="lg" />
          <Center>
            <Group>
              <Button
                type="submit"
                size="md"
                color="#4285F4"
                leftSection={<IconBrandGoogle size={24} />}
                onClick={() => signIn("google")}
              >
                Sign in with Google
              </Button>
              <Button
                type="submit"
                size="md"
                color="black"
                leftSection={<IconBrandGithub size={24} />}
                onClick={() => signIn("github")}
              >
                Sign in with GitHub
              </Button>
            </Group>
          </Center>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
