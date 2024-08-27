import React from 'react'
import { SelectFieldProps } from '@/lib/types'

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  register,
  error,
}) => (
  <div>
    <label className="text-lg font-medium text-description-col">{label}</label>
    <select
      className="w-full border-2 border-white/10 rounded-lg p-4 mt-1 bg-transparent appearance-none"
      {...register}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 mt-2">{error}</p>}
  </div>
)

export default SelectField
