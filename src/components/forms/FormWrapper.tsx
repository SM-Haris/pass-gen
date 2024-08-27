import React from 'react'
import { FormWrapperProps } from '@/lib/types'

const FormWrapper: React.FC<FormWrapperProps> = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit} className="mt-8">
    {children}
  </form>
)

export default FormWrapper
