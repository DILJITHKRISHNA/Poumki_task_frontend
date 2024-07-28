'use client'
import HomeImage from '../../assets/Images/HomeImage.jpg'
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react"
import Header from './Header';

type Characters = string | '';


const Home: React.FC = () => {

  const [char, setChar] = useState<Characters>('')
  const [displayChar, setDisplayChar] = useState<Characters>('')

  const HandleReverse = (str: string) => {
    const nonAlphabeticRegex = /[^A-Za-z]/;

    const chars = str.split('');
    const alphabets = chars.filter(char => !nonAlphabeticRegex.test(char));

    const reversedAlphabets = alphabets.reverse();

    let result = '';
    let reversedIndex = 0;

    for (const char of chars) {
      if (nonAlphabeticRegex.test(char)) {
        result += char;
      } else {
        result += reversedAlphabets[reversedIndex++];
      }
    }
    setDisplayChar(result)
  }

  const handleCloseClick = () => {
    setDisplayChar('')
  }

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <div className="container mx-auto mt-10 px-6 lg:px-8 mb-20">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="relative lg:w-1/2">
              <div className="rounded-t-full overflow-hidden shadow-lg">
                <img src={HomeImage} alt="Product" className="object-cover w-full h-[32rem]" />
              </div>
              <div className="absolute top-10 left-10 bg-white p-4 rounded-md shadow-lg">
                <p className="font-semibold text-green-700">Yoda Youhou:</p>
                <p className="text-gray-600">Introducing something special for you.</p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-10 flex flex-col gap-2">
              <h1 className="text-4xl font-bold text-gray-800">let's give it a <span className="text-green-700">Try</span></h1>
              <div className="flex mt-6 flex-row  ">
                <input type="text" placeholder="Alphanumeric and special characters" className="p-3 border border-gray-300 rounded-md w-full" onChange={(e) => setChar(e.target.value)} />
                <button className="ml-2 p-2 bg-green-700 text-white rounded-md font-semibold" onClick={() => HandleReverse(char)}>Let's see</button>
              </div>
              <span className="relative w-full">
                <input
                  type="text"
                  placeholder="Your output"
                  className="p-3 pl-4 pr-10 border border-gray-300 rounded-md w-full"
                  value={displayChar}
                />
                <IoIosCloseCircle
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer w-6 h-6 "
                  onClick={handleCloseClick}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

