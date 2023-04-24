import { profSkill, softSkill } from '../Data'

const Skills = () => {
  return (
    <div className='m-10 py-5' id='skill'>
      <div className='text-2xl font-bold text-center'>Skills</div>
      <div className='flex justify-around items-center mt-10'>
        <div className='w-2/5'>
          <p className='text-lg font-semibold text-center underline underline-offset-4'>
            Professional Skills
          </p>
          <ul className='shadow-lg mt-10 px-10 py-5 bg-white'>
            {profSkill.map((e) => {
              return (
                <div className='flex gap-4 items-center'>
                  <p className='text-[#394867]'>{e.icon}</p>
                  <li key={e.id}>{e.skill}</li>
                </div>
              )
            })}
          </ul>
        </div>
        <div className='w-2/5'>
          <p className='text-lg font-semibold text-center underline underline-offset-4'>
            Soft Skills
          </p>
          <ul className='shadow-lg mt-10 px-10 py-5 bg-white'>
            {softSkill.map((e) => {
              return (
                <div className='flex gap-4 items-center'>
                  <p className='text-[#394867]'>{e.icon}</p>
                  <li key={e.id}>{e.skill}</li>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
