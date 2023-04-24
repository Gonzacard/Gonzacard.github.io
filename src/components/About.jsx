import profile1 from '../assets/profile1.jpg'

const About = () => {
  return (
    <div
      className='flex items-center gap-10 m-10 p-5 shadow-xl py-10 bg-white'
      id='about'
    >
      <div className='flex flex-col gap-6 tracking-wide leading-7'>
        <div className=''>
          <p className='text-2xl font-bold text-center'>About</p>
          <p className='mt-5'>
            Motivated Data Analyst & Business Intelligence Analyst with
            experience working with data from a variety of industries.
            Passionate about BI development, modelling and architecture to build
            models that resolve business issues. I consider myself enthusiastic
            and capable of showing optimism and responsibility as part of a
            team.
          </p>
          <p>
            Connect with me on{' '}
            <a
              className='text-[#4949ff]'
              href='https://www.linkedin.com/gonzacard'
            >
              Linkedin
            </a>
          </p>
        </div>
        <div className='flex gap-[5rem]'>
          <div className=''>
            <p>Email:</p>
            <p>Location:</p>
            <p>Whatsapp:</p>
            <p>Language:</p>
          </div>
          <div className=''>
            <p>gonzacard@gmail.com</p>
            <p>Málaga, Spain</p>
            <p>+39 3477380244</p>
            <p>English</p>
          </div>
        </div>
      </div>
      <img
        className='shadow-sm w-[300px] h-[300px]'
        src={profile1}
        alt='image'
      />
    </div>
  )
}

export default About
