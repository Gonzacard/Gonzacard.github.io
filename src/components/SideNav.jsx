import { AiOutlineHome, AiOutlineMail, AiOutlineProject } from 'react-icons/ai'
import { BsPerson, BsBarChart } from 'react-icons/bs'
import { MdWorkOutline, MdOutlineSchool } from 'react-icons/md'
import { Link } from 'react-scroll'
import profile1 from '../assets/profile1.jpg'

const nav = [
  {
    id: 0,
    icon: <AiOutlineHome />,
    title: 'Home',
    to: 'home',
  },
  {
    id: 1,
    icon: <BsPerson />,
    title: 'About',
    to: 'about',
  },
  {
    id: 2,
    icon: <MdWorkOutline />,
    title: 'personal experience',
    to: 'exp',
  },
  {
    id: 3,
    icon: <BsBarChart />,
    title: 'skills',
    to: 'skill',
  },
  {
    id: 4,
    icon: <AiOutlineProject />,
    title: 'projects',
    to: 'proj',
  },
  {
    id: 5,
    icon: <MdOutlineSchool />,
    title: 'education',
    to: 'edu',
  },
  {
    id: 6,
    icon: <AiOutlineMail />,
    title: 'contact me',
    to: 'contact',
  },
]

const SideNav = () => {
  return (
    <div className='fixed h-screen bg-gradient-to-r from-[#9BA4B5] to-[#394867] w-[20%] text-white flex flex-col justify-around items-center p-5'>
      <div className='flex flex-col items-center'>
        <img className='w-[100px] rounded-full' src={profile1} alt='image' />
        <p className='mt-5 text-lg'>GONZALO CARDOZO</p>
      </div>
      <div className='uppercase flex flex-col gap-2'>
        {nav.map((e) => {
          return (
            <div key={e.id} className='text-[15px] flex items-center gap-4'>
              <div className='text-lg text-[#F1F6F9]'>{e.icon}</div>
              <div className='tracking-wider leading-8 cursor-pointer hover:scale-110 transition'>
                <Link
                  to={e.to}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  {e.title}
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SideNav
