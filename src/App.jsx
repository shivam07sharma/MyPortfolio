import './App.css'
import Navbar from './components/Navbar'
import ContactPage from './components/ContactMe'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
function Homepage(){
  return(<>
  
      <div className='lg:flex mb-9'>
      <div className=' w-screen md:w-1/2 h-max my-7 md:h-[60vh] md:my-auto'>
        <div className='text-2xl md:text-4xl mt-7 text-white w-5/6 lg:w-2/3 h-max md:h-full  flex flex-col justify-center  py-9 mx-auto '>
          <div className='flex flex-col justify-center w-full h-max gap-2'>

            <div>Hi, My name is Shivam</div>
            <div>and I am a Passionate</div>
            <div className='whitespace-nowrap overflow-hidden typing-animation text-cyan-300'  >Web Developer</div>
          </div>
          <div className=' flex mt-16 '>
            <a href="src\components\SHIVAM SHARMA.pdf">  <div className="w-max h-9 px-2 bg-[#050a44] hover:bg-red-900 my-auto border-white border-2 rounded-lg flex items-center text-white text-base">Download Resume</div>
            </a>    <a href="https://www.github.com/shivam07sharma"> <div className="w-max h-9 px-2 bg-[#050a44]  hover:bg-red-900 mx-4 my-auto border-white border-2 rounded-lg flex items-center  text-white text-base">Visit Github</div></a>

          </div>
        </div>
      </div>
      <div className=' w-screen md:w-1/2 h-auto lg:h-[90vh] grid place-content-center'>
        <img src="src\components\image1.jpg" alt="" className=' mx-auto my-auto mix-blend-lighten w-8/12 h-auto bg-cover rounded-full ' style={{boxShadow:"0px 0px 40px rgb(103 232 249)"}} />
      </div>
      </div>
  </>)
}
function App() {
  
  const router=createBrowserRouter(
    [{
      path:"/",
      element:<><Navbar/><Homepage/></>
    },
    {
      path:"/About",
      element:<><Navbar/><Homepage/></>
    },
    {
      path:"/ContactMe",
      element:<><Navbar/><ContactPage/></>
    },
    {
      path:"/Projects",
      element:<><Navbar/></>
    }]
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
