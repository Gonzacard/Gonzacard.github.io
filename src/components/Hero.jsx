import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { AiOutlineCloudDownload } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='bg-[url(assets/bg.jpg)] bg-cover h-screen text-white' id='home'>
      <div className='flex justify-center items-center h-full'>
        <div className='flex flex-col justify-center items-start gap-4'>
          <div>
            <p className='text-4xl font-bold'>GONZALO CARDOZO</p>
            <p className='text-lg font-semibold underline underline-offset-4'>
              I am a Data & BI Analyst
            </p>
          </div>
          <div className='flex gap-4 items-center text-lg'>
            <a
              href='assets/cv.pdf'
              download='Gonzalo Cardozo - CV'
              className='bg-black opacity-50 py-2 px-3 rounded-lg flex items-center gap-2'
            >
              <AiOutlineCloudDownload />
              Download Resume
            </a>
            <a href='https://www.linkedin.com/gonzacard'>
              <FaLinkedinIn />
            </a>
            <a href='http://wa.me/+393477380244'>
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
