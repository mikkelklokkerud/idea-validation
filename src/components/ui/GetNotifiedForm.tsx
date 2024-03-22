"use client";
import { subscribe } from "@/actions";
import { useState } from "react";
import { toast } from "react-toastify";

const GetNotifiedForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmitClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await subscribe({
      email,
    });
    setEmail("");
    setStatus("loading");

    if (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
      setStatus("error");
    }

    toast.success("Success! We'll keep you posted. 🎉");
    setStatus("success");
  };

  const msgMapper: { [key: string]: string } = {
    loading: "Loading...",
    success: "Success! We'll keep you posted. 🎉",
    error: "An error occurred. Please try again.",
  };

  return (
    <form
      onSubmit={handleSubmitClick}
      className="flex flex-col items-center gap-4"
    >
      <div className="flex justify-center">
        <span className="relative flex">
          <input
            className="h-12 border-black rounded-l-lg border-2 focus:outline-none px-2 border-r-0"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
          />

          <button
            type="submit"
            className="h-12 bg-primary text-primary-foreground px-4 py-3 flex items-center rounded-r-lg border-l-0 border-black font-bold"
          >
            Get notified
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            fill="#636363"
            height={60}
            className="absolute right-0 transform -translate-y-[5px] translate-x-[114%]"
          >
            <g transform="rotate(179)" transform-origin="center">
              <path d="M443.98 242.7c-29.51-23.86-71.69-57.28-100.76-81.68-12.76-8.55-40.11-39.55-52.67-40.13-11.37-.46-7.88 17.05-6.6 25.77 3.19 23.34 4.36 31.45 7.81 52.74 0 0-7.95-.63-12.86-1.47-50.09-6.4-100.72-21.16-146.02-44.03-17.18-8.66-33.67-18.6-50.79-27.36-10.17-4.18-25.21-16.01-34.22-4.26-8.34 12.62 2.92 26.8 10.83 36.63 16.75 20.17 35.04 39.09 54.13 57.05 51.5 46.91 116.25 88.94 188.26 88.53 1.29 19.25 3.07 38.45 4.84 57.66.89 6.97-.22 16.05 6.74 20.22 6.72 2.25 12.28-4.87 23.25-16.11 32.42-30.23 61.08-52.43 95.01-79.43 17-12.21 37.15-26.75 13.06-44.12ZM322.16 347.03c-2.23-19.3-2.76-40.96-5.23-60.29-1.6-11.99-20.23-6.7-32.37-8.46-79.05-9.29-143.87-63.49-195.97-120.16 46.2 27.03 95.92 48.03 148.52 58.67 16.79 3.51 45.85 9.08 63.37 9.66 5.91.06 9.73-4.19 9.32-9.44-1.48-26.08-2.85-34.61-6.04-60.53 36.3 32.25 86.49 72.66 124.14 103.32a1595.65 1595.65 0 0 0-105.74 87.22Z"></path>
            </g>
          </svg>
        </span>
      </div>

      {status && <p className="font-bold">{msgMapper[status]}</p>}
    </form>
  );
};

export default GetNotifiedForm;
