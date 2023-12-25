import React from 'react'
import ProductMainLayout from '@/layouts/product/main'

type Props = {
  children: React.ReactNode
}

const Product = (props: Props) => {
  return <>{props.children}</>
}

export default Product
