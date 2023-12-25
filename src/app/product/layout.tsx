import React from 'react'

type Props = {
  children: React.ReactNode
}

const Product = (props: Props) => {
  return <>{props.children}</>
}

export default Product
