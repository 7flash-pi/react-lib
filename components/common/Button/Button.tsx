import React from 'react'
import {VariantProps , cva} from 'class-variance-authority'
import { FC } from 'react'

interface ButtonProps  {

}

const buttonVariants = cva()

const Button:FC<ButtonProps> = ({}) => {
  return (
    <div>Button</div>
  )
}

export default Button