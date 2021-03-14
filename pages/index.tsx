import Head from 'next/head'
import { Button } from '../components/button';
import { Navbar } from '../components/navbar';
import { Sectionheader } from '../components/sectionheader';
import { Card, CardContent } from '../components/card';
import Image from 'next/image'

export default function Home() {
  const funButton = (
    <div className="flex flex-col flex-shrink">
      <Button onClick={() => window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Click this button. Trust me, you won't regret it 😉</Button>
    </div>
  )
  return (
    
    <div className="container mx-auto min-w-full">
      <Navbar/>
      <div className="flex flex-col auto-rows-min">
        <div className="h-screen flex flex-col justify-center">
          <div className="flex flex-row justify-center">
            <h1 className="animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-7xl lg:text-9xl my-12">
              I'm a hero!
            </h1>
          </div>
          <div className="flex flex-row justify-center">
            {funButton}
          </div>
        </div>

        <Sectionheader headerName="Section Header"/>

        <div className="p-2 grid grid-cols-3 gap-x-2">
          <Card>
            {/* <CardContent
              title={<h2 className="text-center text-4xl font-bold">Hello World</h2>}
              footer={funButton}
            >
              <Image
                  src="/favicon.ico"
                  alt="picture"
                  width={500}
                  height={500}
                />
                <p>aaaaaaaaaaaaaaaaaaaa
                  aaaaaaaaaaaaaaaaaaaaaaa
                  aaaaaaaaaaaaaaaaaaaaa
                  aaaaaaaaaaaaaaaaaaaaaaa
                  aaaaaaaaaaaaaaaaaaaaaa
                </p>
            </CardContent> */}
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:w-48" src="/favicon.ico" alt="Man looking at item at a store"/>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
              </div>
            </div>
          </Card>
          <Card />
          <Card />
        </div>

      </div>
    </div>
  )
}
