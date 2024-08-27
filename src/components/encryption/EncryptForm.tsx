"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerAction } from "zsa-react";
import * as z from "zod";
import FormWrapper from "../forms/FormWrapper";
import InputField from "../forms/InputField";
import SelectField from "../forms/SelectField";
import SubmitButton from "../forms/SubmitButton";
import { encryptionSchema } from "@/lib/schemas";
import { ENCRYPTION_TYPES } from "@/lib/constants/encryption";

// Define the form type based on the schema
type EncryptFormData = z.infer<typeof encryptionSchema>;

const EncryptForm: React.FC<{ formAction: any }> = ({ formAction }) => {
  // Initialize the form with zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EncryptFormData>({
    resolver: zodResolver(encryptionSchema),
  });

  // Define the server action
  const { execute, isPending, isError, error, isSuccess, data } =
    useServerAction(formAction);

  // Handle form submission
  const onSubmit: SubmitHandler<EncryptFormData> = async (data) => {
    await execute(data);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Text"
        type="text"
        placeholder="Enter text to encrypt"
        register={register("text")}
        error={errors.text?.message}
      />
      <SelectField
        label="Encryption Type"
        options={ENCRYPTION_TYPES.map((type) => ({ value: type, label: type }))}
        register={register("encryptionType")}
        error={errors.encryptionType?.message}
      />
      <InputField
        label="Secret Key"
        type="text"
        placeholder="Enter secret key"
        register={register("secretKey")}
        defaultValue="your_secret_key"
        error={errors.secretKey?.message}
      />
      <div className="flex justify-center">
        <SubmitButton isLoading={isSubmitting || isPending} text="Encrypt" />
      </div>
      {isError && <p className="text-red-500 mt-2">{error.message}</p>}
      {isSuccess && (
        <div className="mt-4">
          <p className="text-white">Result:</p>
          <pre className="bg-gray-100 p-4 rounded text-black">{data}</pre>
        </div>
      )}
    </FormWrapper>
  );
};

export default EncryptForm;
