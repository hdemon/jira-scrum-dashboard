import * as React from 'react'

const List = (props: any): any => {
  const { list } = props

  return (
    <>
      {list.map((item: any) => (
        <p>{item}</p>
      ))}
    </>
  )
}

export default List
