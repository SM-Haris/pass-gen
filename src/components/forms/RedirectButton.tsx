import React from 'react'
import Link from 'next/link'
import { RedirectButtonProps } from '@/lib/types'

const RedirectButton: React.FC<RedirectButtonProps> = ({ text, path }) => (
  <button
    type="submit"
    className="active:scale-[.98] active:duration-300 transition-all py-3 rounded-xl bg-black text-white text-lg font-bold"
  >
    <Link href={path}>{text}</Link>
  </button>
)

export default RedirectButton
