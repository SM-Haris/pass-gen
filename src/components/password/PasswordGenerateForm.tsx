"use client";

import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { passwordSchema } from "@/lib/schemas";
import { useServerAction } from "zsa-react";
import SubmitButton from "../forms/SubmitButton";
import InputField from "../forms/InputField";
import FormWrapper from "../forms/FormWrapper";

type PasswordFormValues = z.infer<typeof passwordSchema>;

const PasswordForm: React.FC<{ formAction: any }> = ({ formAction }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      includeUppercase: true,
      includeLowercase: true,
      includeNumbers: true,
      includeSymbols: false,
      length: 12,
    },
  });

  const { execute, isPending, isError, error, isSuccess, data } =
    useServerAction(formAction);

  // Handle form submission
  const onSubmit: SubmitHandler<PasswordFormValues> = async (data) => {
    await execute(data);
  };

  //   const onSubmit = (data: PasswordFormValues) => {
  //     const {
  //       includeUppercase,
  //       includeLowercase,
  //       includeNumbers,
  //       includeSymbols,
  //       length,
  //     } = data;
  //     let charset = "";
  //     if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //     if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  //     if (includeNumbers) charset += "0123456789";
  //     if (includeSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  //     let password = "";
  //     for (let i = 0; i < length; i++) {
  //       const randomIndex = Math.floor(Math.random() * charset.length);
  //       password += charset[randomIndex];
  //     }
  //     setGeneratedPassword(password);
  //   };

  const handlePasswordCopy = () => {
    navigator.clipboard.writeText(data);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <InputField
          label="Include Uppercase Letters"
          type="checkbox"
          register={register("includeUppercase")}
          error={errors.includeUppercase?.message}
        />
        <InputField
          label="Include Lowercase Letters"
          type="checkbox"
          register={register("includeLowercase")}
          error={errors.includeLowercase?.message}
        />
        <InputField
          label="Include Numbers"
          type="checkbox"
          register={register("includeNumbers")}
          error={errors.includeNumbers?.message}
        />
        <InputField
          label="Include Symbols"
          type="checkbox"
          register={register("includeSymbols")}
          error={errors.includeSymbols?.message}
        />
      </div>

      <div className="flex items-center space-x-4">
        <label className="block text-white font-medium">Password Length</label>
        <Controller
          name="length"
          control={control}
          render={({ field }) => (
            <>
              <input
                type="range"
                min={6}
                max={25}
                step={1}
                {...field}
                className="w-full"
              />
              <span className="text-white ml-2">{field.value}</span>
            </>
          )}
        />
        {errors.length && (
          <span className="text-red-500">{errors.length.message}</span>
        )}
      </div>

      <div className="flex justify-center">
        <SubmitButton
          isLoading={isSubmitting || isPending}
          text="Generate Password"
        />
      </div>
      {isError && <p className="text-red-500 mt-2">{error.message}</p>}
      {isSuccess && (
        <div className="mt-4">
          <p className="text-white">Result:</p>
          <div className="flex items-center space-x-2">
            <p>{data}</p>
            <button
              type="button"
              onClick={handlePasswordCopy}
              className="bg-blue-500 text-white px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 hover:bg-blue-700 transition duration-300"
            >
              Copy
            </button>
          </div>
        </div>
      )}
    </FormWrapper>
  );
};

export default PasswordForm;
