import { message } from "antd";

export const errorHandler = (error) => {
  if (!error.response) {
    message.error("Network error: Please check your internet connection.");
  } else if (error.code === "ECONNABORTED") {
    message.error("Request timed out. Please try again later.");
  } else if (error.response?.status >= 500) {
    message.error("Server error: Please try again later.");
  } else if (error.response?.status >= 400 && error.response?.status < 500) {
    message.error(
      error.response?.data?.message || "Client error: Invalid request."
    );
  } else {
    message.error(
      error.response?.data?.message || "An unexpected error occurred."
    );
  }
};
