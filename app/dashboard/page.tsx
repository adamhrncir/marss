import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<>
<div className='main'>

        <div className="bg-orange-500 py-10 px-4 text-white flex justify-center items-center">
          <div className="rounded-full overflow-hidden mr-4">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={80}
              height={80}
            />
          </div>
          <h1 className="text-4xl font-bold">MARSS name</h1>
        </div>

    <div className="flex flex-wrap justify-center py-40 ">
          <div className="flex w-full sm:w-1/2 md:w-1/4 bg-red-500 rounded-md p-10 m-2">
            <p className="text-2xl font-bold">1</p>
          </div>
          <div className="flex w-full sm:w-1/2 md:w-1/4 bg-green-500 rounded-md p-10 m-2">
          <p className="text-2xl font-bold">2</p>
          </div>
          <div className="flex w-full sm:w-1/2 md:w-1/4 bg-yellow-500 rounded-md p-10 m-2">
          <p className="text-2xl font-bold">3</p>
          </div>
          <div className="flex w-full sm:w-1/2 md:w-1/4 bg-purple-500 rounded-md p-10 m-2">
          <p className="text-2xl font-bold">4</p>
          </div>
        </div>


</div>



<footer className="bg-gray-800 py-4 w-full bottom-0 fixed">
      <div className="container mx-auto text-center text-gray-400">
        <p className="mb-4">Footer Content</p>
        <p className="mt-4">&copy; <script>document.write(new Date().getFullYear())</script> MARSS</p>
      </div>
    </footer>


</>
  )
}
