"use client";
import { ContactFormValidationSchema } from "@/constant";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function ContactForm({ className }: { className?: string }) {
  const [pending, setPending] = useState(false);
  const form = useForm<z.infer<typeof ContactFormValidationSchema>>({
    resolver: zodResolver(ContactFormValidationSchema),
    defaultValues: {
      title: "",
      fastName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });
  async function onSubmit(values: z.infer<typeof ContactFormValidationSchema>) {
    try {
      setPending(true);
      const response = await fetch("/api/userMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (data.success) {
        toast({
          title: `Hey ${values.fastName}`,
          description: "Message sent successfully!",
        });
        form.reset();
      } else {
        toast({
          title: `Hey ${values.fastName}`,
          description: "Failed to send message.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: `Hey ${values.fastName}`,
        description: `Error submitting form:" ${error.message}`,
        variant: "destructive",
      });
    } finally {
      setPending(false);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-2 lg:space-y-8 lg:w-2/3", className)}
      >
        <div className="space-y-2">
          <h2 className="text-5xl font-bold">Hello there</h2>
          <p className="text-gray-500">Send a message to contact us</p>
        </div>
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-5 justify-between flex-1">
          <FormField
            control={form.control}
            name="fastName"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabel className="text-gray-500">
                  Enter Your Fast Name
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabel className="text-gray-500">
                  Enter Your Last Name
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-500">
                Enter your email address
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-500">
                Enter your Message
              </FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={pending} className="w-full " type="submit">
          {pending ? "Submitting" : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
