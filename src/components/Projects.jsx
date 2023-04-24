import { projectData } from "../Data"

const Projects = () => {
  return (
    <div className='m-10 py-5' id="proj">
      <div className='text-2xl font-bold text-center'>Projects</div>
      {projectData.map((e) => {
        return (
          <div key={e.id} className='mt-10 p-5 shadow-lg bg-white'>
            <div className=''>
              <p>
                <span className='font-bold'>Project Title:</span>
                <a
                  className='text-[#394867] hover:text-blue-600 ml-2'
                  href={e.titleLink}
                >
                  {e.title}
                </a>
              </p>
              <p className='font-bold mt-4'>Techniques Used:</p>
              <p className='mt-4'>{e.techiniqueUsed}</p>
            </div>
            <div className='flex my-10 justify-between items-center'>
              <ul className='list-disc list-inside pl-5'>
                {e.list.map((e) => {
                  return <li key={e.id}>{e.item}</li>
                })}
              </ul>
              <img
                className='w-[400px] h-[250px] shadow-lg'
                src={e.img}
                alt='image'
              />
            </div>
            <div className='mt-4'>
              <p>
                <span className='font-bold pr-2'>Summary: </span> {e.summary}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Projects
