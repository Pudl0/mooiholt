"use client";

import { SetStateAction, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted:", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
    // Close the form
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-amber-50 p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-amber-900">
            Kontaktieren Sie uns
          </h2>
          <button
            onClick={onClose}
            className="text-amber-900 hover:text-amber-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-amber-900"
            >
              Name
            </label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e: { target: { value: SetStateAction<string> } }) =>
                setName(e.target.value)
              }
              required
              className="mt-1 block w-full rounded-md border-amber-300 bg-amber-100 shadow-sm focus:border-amber-500 focus:ring-amber-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-amber-900"
            >
              E-Mail
            </label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e: { target: { value: SetStateAction<string> } }) =>
                setEmail(e.target.value)
              }
              required
              className="mt-1 block w-full rounded-md border-amber-300 bg-amber-100 shadow-sm focus:border-amber-500 focus:ring-amber-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-amber-900"
            >
              Nachricht
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e: { target: { value: SetStateAction<string> } }) =>
                setMessage(e.target.value)
              }
              required
              className="mt-1 block w-full rounded-md border-amber-300 bg-amber-100 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              rows={4}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-amber-600 text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Senden
          </Button>
        </form>
      </div>
    </div>
  );
}
