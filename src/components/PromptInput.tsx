"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useContext } from "react";
import { globalContext } from "@/store/global-context";

const FormSchema = z.object({
  prompt: z.string(),
});

export default function PromptInput() {
  const { sendPrompt } = useContext(globalContext);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      prompt: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const newPrompt = {
      role: "user",
      parts: [{ text: data.prompt }],
    }
    sendPrompt((newPrompt as chatContextItem));
    console.table(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
        <FormField
          control={form.control}
          name="prompt"
          render={({ field }) => (
            <span className="flex justify-between gap-2">
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    placeholder="Ask anything..."
                    {...field}
                    className="focus:outline-0"
                  />
                </FormControl>
              </FormItem>
              <Button
                type="submit"
                className="flex max-h-full justify-center items-center"
              >
                <Send className="max-h-full" />
              </Button>
            </span>
          )}
        />
      </form>
    </Form>
  );
}
