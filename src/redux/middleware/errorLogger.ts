import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware } from "@reduxjs/toolkit";
import { ErrorResponse } from "@/types";
import { toast } from "sonner";

export const errorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const error = action.payload as ErrorResponse;

    if (error.status === 401) {
      /* Signout */
    } else {
      toast.error(error.detail);
    }
  }

  return next(action);
};
