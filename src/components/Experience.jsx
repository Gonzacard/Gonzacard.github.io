import { experienceData } from '../Data'

const Experience = () => {
  return (
    <div className='m-10 py-10' id='exp'>
      <div className='text-2xl font-bold text-center'>
        Professional Experience
      </div>
      {experienceData.map((e) => {
        return (
          <div key={e.id} className='my-10 flex shadow-lg'>
            <div className='w-1/2 bg-gradient-to-b from-[#394867] to-[#212A3E] text-white flex flex-col justify-center items-center text-center gap-4 text-sm'>
              <p className='px-5'>{e.year}</p>
              <p className='px-5'>{e.title}</p>
              <p className='px-5'>{e.place}</p>
            </div>
            <div className='py-5 px-5 bg-white'>
              <div className='text-xl'>{e.title2}</div>
              <div className='text-sm'>
                <ul className='list-disc ml-10 leading-6 tracking-wide'>
                  {e.list.map((item) => {
                    return <li key={item.id}>{item.content}</li>
                  })}
                </ul>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Experience
