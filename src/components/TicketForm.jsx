import {
  Form,
  Radio,
  RadioGroup,
  TextArea,
  TextField,
  View,
  Flex,
  Picker,
  Item,
  Slider,
  Content,
  ButtonGroup,
  Button,
  Dialog,
  Heading,
  Divider,
} from "@adobe/react-spectrum";
import { DevTool } from "@hookform/devtools";
import Alert from "@spectrum-icons/workflow/Alert";

import React from "react";
import { Controller, useForm } from "react-hook-form";

const TicketForm = ({ onSubmit, defaultValues = {}, close, heading }) => {
  let {
    handleSubmit,
    control,
    formState: { isDirty, errors },
  } = useForm({ defaultValues: defaultValues ?? {
    "title": "",
    "description": "",
    "priority": "",
    "type": "",
    "status": "",
    "progress": 0
} });

  const handleOnSubmit = (data) => {
    console.log(data);
  };

  return (
    <Dialog>
      <Heading>{heading}</Heading>
      <Divider />
      <Content>
        <Form>
          <Controller
            control={control}
            name="title"
            rules={{ required: "Title is required." }}
            render={({ field, fieldState }) => (
              <TextField
                label="Title"
                {...field}
                isRequired
                validationState={errors.title ? "invalid" : undefined}
                errorMessage={errors.title?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="description"
            rules={{ required: "Description is required." }}
            render={({ field, fieldState }) => (
              <TextArea
                label="Description"
                {...field}
                isRequired
                validationState={errors.description ? "invalid" : undefined}
                errorMessage={errors.description?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="priority"
            rules={{ required: "Priority is required." }}
            render={({ field, fieldState }) => (
              <Picker
                label="Priority"
                {...field}
                selectedKey={field.value}
                onSelectionChange={field.onChange}
                isRequired
                isInvalid={errors.priority ? "invalid" : undefined}
                errorMessage={errors.priority?.message}
              >
                <Item key="low">Low</Item>
                <Item key="medium">Medium</Item>
                <Item key="high">High</Item>
              </Picker>
            )}
          />

          <Controller
            control={control}
            name="type"
            rules={{ required: "Type is required." }}
            render={({ field, fieldState }) => (
              <Picker
                label="Type"
                {...field}
                selectedKey={field.value}
                onSelectionChange={field.onChange}
                isRequired
                isInvalid={errors.type ? "invalid" : undefined}
                errorMessage={errors.type?.message}
              >
                <Item key="bug">Bug</Item>
                <Item key="feature">Feature</Item>
                <Item key="improvement">Improvement</Item>
              </Picker>
            )}
          />

          <Controller
            control={control}
            name="status"
            rules={{ required: "Status is required." }}
            render={({ field, fieldState }) => (
              <Picker
                label="Status"
                {...field}
                selectedKey={field.value}
                onSelectionChange={field.onChange}
                isRequired
                isInvalid={errors.status ? "invalid" : undefined}
                errorMessage={errors.status?.message}
              >
                <Item key="open">Open</Item>
                <Item key="in-progress">In Progress</Item>
                <Item key="blocked">Blocked</Item>
                <Item key="in-review">In Review</Item>
                <Item key="completed">Completed</Item>
              </Picker>
            )}
          />

          <Controller
            control={control}
            name="progress"
            render={({ field, fieldState }) => (
              <Slider
                {...field}
                label="Progress"
                maxValue={1}
                step={0.001}
                formatOptions={{
                  style: "percent",
                  minimumFractionDigits: 1,
                }}
                defaultValue={0}
              />
            )}
          />

          <DevTool control={control} />
        </Form>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button variant="accent" onPress={handleSubmit(handleOnSubmit)}>
          Buy
        </Button>
      </ButtonGroup>
    </Dialog>
  );
};

export default TicketForm;
