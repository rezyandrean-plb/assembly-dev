"use client";

import React from "react";
import { useAuth } from "@/context/auth-context";
import Link from "next/link";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
      data-oid="9aczxtz"
    >
      <div
        className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-8"
        data-oid="idcd0v_"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          data-oid=":t5te31"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            data-oid=":ufr6tx"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
              data-oid="oi:ti59"
            />
          </svg>
        </button>
        <div className="text-center" data-oid="0_-ew_q">
          <h2 className="text-2xl font-bold mb-2" data-oid="fdm4n:.">
            Returning Customers
          </h2>
          <p className="text-sm text-gray-600 mb-2" data-oid="v48oye-">
            Please sign in to enjoy a faster checkout experience.
          </p>
          <p className="text-sm text-gray-600 mb-6" data-oid="ivw46ev">
            Not yet a member?{" "}
            <Link
              href="/signup"
              className="font-semibold text-primary hover:underline"
              data-oid="h0djwmd"
            >
              Sign up
            </Link>
          </p>

          <form data-oid="s0p-rqe">
            <div className="space-y-4 text-left" data-oid="k4tbj4a">
              <div data-oid="s18grh0">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="email"
                  data-oid="eciqxr0"
                >
                  EMAIL*
                </label>
                <input
                  type="email"
                  id="email"
                  className="input input-bordered w-full"
                  defaultValue="pyee.t104@gmail.com"
                  data-oid="ahmgfh2"
                />
              </div>
              <div data-oid="9793t8b">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="password"
                  data-oid="lorlwtw"
                >
                  PASSWORD*
                </label>
                <input
                  type="password"
                  id="password"
                  className="input input-bordered w-full"
                  defaultValue="********"
                  data-oid="p5jngm1"
                />
              </div>
            </div>
            <div
              className="flex justify-between items-center mt-4"
              data-oid="3og:wqt"
            >
              <a
                href="#"
                className="text-sm text-primary hover:underline"
                data-oid="fdjnway"
              >
                Forgotten your password?
              </a>
            </div>
            <button
              type="button"
              onClick={handleLogin}
              className="btn btn-primary w-full mt-6"
              data-oid="u93sqxh"
            >
              CONTINUE TO CHECKOUT
            </button>
            <div className="mt-4 text-left" data-oid="6.gx4lc">
              <label className="flex items-center" data-oid="qhmvjap">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  defaultChecked
                  data-oid="08z6.x5"
                />

                <span className="ml-2 text-sm text-gray-700" data-oid="p:qr45t">
                  Keep me signed in
                </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
