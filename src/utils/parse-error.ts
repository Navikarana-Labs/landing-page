import { AxiosError } from "axios";

export const parseError = (error: unknown) => {
  if (error instanceof AxiosError) {
    return error.message;
  }

  if (error instanceof Error) return error.message;
  if (typeof error === "string" || typeof error === "number" || typeof error === "boolean") return String(error);
  if (
    error &&
    typeof error === "object" &&
    "message" in error &&
    (typeof error.message === "string" || typeof error.message === "number" || typeof error.message === "boolean")
  )
    return String(error.message);

  return "Something went wrong!";
};
