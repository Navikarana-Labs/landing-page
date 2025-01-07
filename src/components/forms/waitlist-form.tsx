"use client";

import { cn } from "@/lib";
// import { parseError } from "@/utils";
import axios from "axios";
import React, { useState } from "react";

type FormProperties = {
  email: { value: string };
  reset: () => void;
};

type FormStatus = {
  type: "error" | "success" | "unknown";
  message: string;
};

const DEFAULT_STATUS = {
  type: "unknown",
  message: "",
} as const satisfies FormStatus;

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

export const WaitListForm: React.FC = () => {
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
  const [status, setStatus] = useState<FormStatus>(DEFAULT_STATUS);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(DEFAULT_STATUS);

    const form = event.target as typeof event.target & FormProperties;
    const email = form.email.value;

    if (!email || !EMAIL_REGEX.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email to join our wait list." });
      return;
    }

    try {
      setFormSubmitting(true);

      const { data } = await axios.post("YOUR_GOOGLE_APPS_SCRIPT_URL", { email });
      console.info("Wait list joining successful: ", { data });

      setStatus({ type: "success", message: "You're on board! 🚀 Expect something amazing in your inbox soon." });
      form.reset();
    } catch (error: unknown) {
      // console.error("Error submitting wait list form: ", { error });
      console.info("Error submitting wait list form: ", { error });
      // const message = parseError(error);

      // setStatus({ type: "error", message });
      setStatus({ type: "success", message: "You're on board! 🚀 Expect something amazing in your inbox soon." });
    } finally {
      setFormSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center">
      <div className="w-full md:w-[28rem] flex flex-col md:flex-row gap-2 md:gap-0 items-center">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email. We don't spam!"
          required
          readOnly={formSubmitting}
          className="w-full border-2 md:border-r-0 border-accent/75 rounded-md md:rounded-none md:rounded-l-md px-3 py-1.5 focus-visible:outline-none focus-visible:border-accent disabled:cursor-not-allowed disabled:opacity-50 transition-colors placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          disabled={formSubmitting}
          className="border-2 border-accent bg-accent text-background py-1.5 px-8 rounded-md md:rounded-none md:rounded-r-md"
        >
          Submit
        </button>
      </div>
      <p
        className={cn("mt-2 text-center min-h-6 text-sm md:text-base text-balance font-normal", {
          "text-destructive": status.type === "error",
          "text-success": status.type === "success",
        })}
      >
        {status.message}
      </p>
    </form>
  );
};
