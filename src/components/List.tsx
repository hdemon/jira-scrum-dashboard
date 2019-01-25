import * as React from 'react'

const List = (props: any): any => (
  <>
    {props.list.map((item: any) => (
      <p>{item}</p>
    ))}
  </>
)

export default List
