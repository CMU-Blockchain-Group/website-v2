import Head from 'next/head'
import { Button } from '../components/button';

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-rows-3 auto-rows-min">
        <div className="flex flex-row justify-end my-12">
          <div className="px-2 transition duration-300 ease-in-out transform hover:scale-105"><h3>link 3</h3></div>
          <div className="px-2 transition duration-150 ease-in-out hover:text-red-500"><h3>link 2</h3></div>
          <div className="px-2"><h3>link 1</h3></div>
        </div>
        <div className="flex flex-row justify-center">
          <h1 className="animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-7xl lg:text-9x my-12">
            I'm a hero!
          </h1>
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col flex-shrink">
            <Button onClick={() => window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Click this button. Trust me, you won't regret it 😉</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
