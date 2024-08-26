"use client";

import { Todo } from "@/app/lib/todo";
import {
  List,
  Button,
  Modal,
  Space,
  Group,
  Checkbox,
  ActionIcon,
  Title,
  Textarea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "react-hook-form";
import { IconTrash } from "@tabler/icons-react";

type FormAddTodo = {
  description: string;
};

export default function TodoList() {
  const service = Todo.useService();
  const [opened, { open, close }] = useDisclosure(false);
  const { register, handleSubmit, reset } = useForm<FormAddTodo>();

  const onAdd = handleSubmit((data) => {
    service.addTodo({
      id: new Date().toString(),
      text: data.description,
      completed: false,
    });
    reset({
      description: "",
    });
    close();
  });

  return (
    <>
      <div>
        <Title order={1}>Todo List</Title>
        <Space h="md" />
        <Button onClick={open}>New</Button>
        <Space h="md" />
        <List>
          {service.todos.map((todo) => (
            <List.Item key={todo.id}>
              <Group>
                <Checkbox
                  onChange={(event) => {
                    const checked = event.currentTarget.checked;
                    service.setChecked(todo.id, checked);
                  }}
                />
                {todo.text}

                <ActionIcon
                  variant="subtle"
                  color="red"
                  aria-label="Remove Todo"
                  onClick={() => service.removeTodo(todo.id)}
                >
                  <IconTrash
                    style={{ width: "70%", height: "70%" }}
                    stroke={1.5}
                  />
                </ActionIcon>
              </Group>
            </List.Item>
          ))}
        </List>
      </div>

      <Modal opened={opened} onClose={close} title="Add Todo">
        <Textarea
          {...register("description")}
          label="Description"
          placeholder="What need to be done?"
        />
        <Space h="md" />
        <Button onClick={onAdd}>Save</Button>
      </Modal>
    </>
  );
}
