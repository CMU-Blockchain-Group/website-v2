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

        <Sectionheader headerName="Card Samples"/>

        <div className="p-2 grid grid-cols-3 gap-x-2 h-80">
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
            <div className="flex">
              <div className="flex-shrink-0">
                <img className="h-50 w-full object-cover md:w-48" src="/favicon.ico" alt="Man looking at item at a store"/>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.aaaaaaaa </p>
              </div>
            </div>
          </Card>
          <Card>
           <CardContent
              title={<h2 className="text-center text-4xl font-bold">Hello World</h2>}
              orientation="col"
              footer={funButton}
            >
            <div className="flex flex-row justify-center">
              <Image
                  src="/favicon.ico"
                  alt="picture"
                  width={100}
                  height={100}
                  layout='fixed'
                />
            </div>
            <div className="flex flex-row justify-center w-full">
              <p className="break-all">
                 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
            </div>
               
            </CardContent> 
          </Card>
          <Card />
        </div>
      <div className="flex flex-col h-screen">
      <Sectionheader headerName="About us" />
      <div className="grid grid-cols-2 h-full">
        <Card>
          <CardContent
          title={<h2 className="text-center text-5xl font-bold">Who we are</h2>}
          orientation="col"
          >
            <div className=" flex flex-col">
              <div className=" flex flex-shrink-0 flex-row justify-center">
                <div className="h-80">
                <img className="h-80 w-full object-cover md:w-96" src="/favicon.ico" alt="Man looking at item at a store"/>
                </div>
              </div>
              <div className="p-8">
                <p className="mt-2 text-gray-500">The CMU Blockchain Group is a software developer focused group of students dedicated to bringing high-quality presentations and workshops to the students of CMU and citizens of Pittsburgh overall. We want to equip people with the foundational knowledge to reason blockchain developments from an engineering perspective, taking into account technical, economic and policy factors. We want to build a community where students
                 and faculty can come together to network and learn from each other,
                 as well as to collaborate on new and existing ideas.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent
          title={<h2 className="text-center text-5xl font-bold">What we do</h2>}
          orientation="col"
          >
            <div className=" flex flex-col">
              <div className="h-80 pt-20">
              <div className=" flex flex-shrink-0 flex-row justify-center">
                <img className=" w-full object-cover md:w-96" src="/favicon.ico" alt="Man looking at item at a store"/>
                <img className=" w-full object-cover md:w-96" src="/filler.jpg" alt="Man looking at item at a store"/>
                <img className=" w-full object-cover md:w-96" src="/favicon.ico" alt="Man looking at item at a store"/>
              </div>
              </div>
              <div className="p-8">
              <p className="mt-2 text-gray-500">The CMU Blockchain Group is a software developer focused group of students dedicated to bringing high-quality presentations and workshops to the students of CMU and citizens of Pittsburgh overall. We want to equip people with the foundational knowledge to reason blockchain developments from an engineering perspective, taking into account technical, economic and policy factors. We want to build a community where students
                 and faculty can come together to network and learn from each other,
                 as well as to collaborate on new and existing ideas.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
      </div>
    </div>
  )
}
