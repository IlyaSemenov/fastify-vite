import { useState, useLayoutEffect, useEffect } from 'react'
import { useServerData } from 'fastify-vite/react'
export default function Home(props) {
  let [count, setCount] = useState(0);
  let [msg, setMsg] = useState('');

  const fetchFromEcho = async () => {
    const { json } = await props.$api.echo({ msg: `hello from client -> ` });

    setMsg(json.msg)
  }
  // const getData = useServerData.bind(Object.assign({}, props));
  // const data = async () => {
  //   console.log('1')
  //   console.log(getData(async () => {
  //     console.log('2')

  //     const { json } = await props.$api.echo({ msg: 'hello from server ' });
  //     console.log(json);
  //     setMsg(json.msg)
  //     // return data
  //   }))
  // }

  useEffect(() => {
    console.log('daaa')
  })

  return (
    <div>
      <h1>Home</h1>
      <p>Here's some data from the server: {props.$global}</p>
      <button onClick={() => { console.log('hit'); setCount(++count) }}>count is: {count}</button>
      <button onClick={fetchFromEcho} > msg is: {msg}</button >
    </div>
  )
}

