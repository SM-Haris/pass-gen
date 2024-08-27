import React from 'react'
import { InputFieldProps } from '@/lib/types'

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type,
  register,
  error,
  maxLength,
  prefix,
}) => (
  <div>
    <label className="text-lg font-medium text-description-col">{label}</label>
    <input
      className="w-full border-2 border-white/10 placeholder-gray-500 rounded-lg p-4 mt-1 bg-transparent"
      placeholder={placeholder}
      type={type}
      maxLength={maxLength}
      {...register}
      prefix={prefix}
    />
    {error && <p className="text-red-500 mt-2">{error}</p>}
  </div>
)

export default InputField
