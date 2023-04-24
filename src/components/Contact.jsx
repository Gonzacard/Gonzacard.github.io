import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineCloudDownload, AiOutlineMail } from 'react-icons/ai'
import { BiPhone } from 'react-icons/bi'

const Contact = () => {
  return (
    <div className='m-10 py-5' id='contact'>
      <div className='text-2xl font-bold text-center'>Contact Me</div>
      <div className='flex justify-evenly items-center mt-10'>
        <div className='w-2/5 shadow-lg p-5 flex flex-col gap-6 bg-white'>
          <div className='flex items-center gap-4'>
            <p className='bg-[#9BA4B5] w-10 h-10 flex justify-center items-center rounded-full'>
              <AiOutlineMail />
            </p>
            <div className='text-sm'>
              <p>Email</p>
              <p>
                <a
                  className='font-bold opacity-70'
                  href='mailto:gonzacard@gmail.com'
                >
                  gonzacard@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <p className='bg-[#9BA4B5] w-10 h-10 flex justify-center items-center rounded-full'>
              <BiPhone />
            </p>
            <div className='text-sm'>
              <p>Call</p>
              <p>
                <a className='font-bold opacity-70' href='tel:+39 3477380244'>
                  +39 3477380244
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className='w-2/5 shadow-lg p-5 flex flex-col gap-6 bg-white'>
          <div className='flex items-center gap-4'>
            <p className='bg-[#9BA4B5] w-10 h-10 flex justify-center items-center rounded-full'>
              <FaLinkedinIn />
            </p>
            <div className='text-sm'>
              <p>Linkedin</p>
              <p>
                <a
                  className='font-bold opacity-70'
                  href='https://www.linkedin.com/gonzacard'
                >
                  linkedin.com/gonzacard
                </a>
              </p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <p className='bg-[#9BA4B5] w-10 h-10 flex justify-center items-center rounded-full'>
              <AiOutlineCloudDownload />
            </p>
            <div className='text-sm'>
              <p>Download</p>
              <p>
                <a className='font-bold opacity-70' href='assets/cv.pdf'>
                  My Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
