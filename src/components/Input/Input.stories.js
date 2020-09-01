import React from 'react'
import Input from './Input'

export default {
  title: 'Input',
  component: Input
}

export const Small = () => <Input variant='primary' />
export const Medium = () => <Input variant='secondary' />
export const Large = () => <Input variant='success' />
