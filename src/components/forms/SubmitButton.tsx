import React from 'react'
import { SubmitButtonProps } from '@/lib/types'

const SubmitButton: React.FC<SubmitButtonProps> = ({
  isLoading,
  text,
  disable,
}) => (
  <button
    type="submit"
    disabled={isLoading || disable}
    className="active:scale-[.98] active:duration-300 transition-all py-3 w-full rounded-xl bg-black text-white text-lg font-bold"
  >
    {isLoading ? 'Loading...' : text}
  </button>
)

export default SubmitButton
