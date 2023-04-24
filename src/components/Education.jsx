// import imagename from '../assets/imagename.jpg'

const educationData = [
  {
    id: 0,
    year: '2022',
    course: 'Master of Science, Data Science',
    place: 'DREXEL UNIVERSITY | PHILADELPHIA, PA',
    // img: imagename, // please use image as img: imagename (see on top to import imagename)
  },
  {
    id: 1,
    year: '2022',
    course: 'Master of Science, Data Science',
    place: 'DREXEL UNIVERSITY | PHILADELPHIA, PA',
    // img: imagename,
  },
]
const Education = () => {
  return (
    <div className='m-10 py-10' id='edu'>
      <div className='text-2xl font-bold text-center'>Education</div>
      {educationData.map((e) => {
        return (
          <div
            key={e.id}
            className='my-10 flex items-center justify-around shadow-lg p-5 bg-white'
          >
            <img
              className='w-[250px] h-[250px] border-[2px]'
              src={e.img}
              alt='image'
            />
            <div className='py-5 px-5'>
              <div className='text-xl font-bold'>{e.course}</div>
              <div className='text-lg font-bold opacity-50 text-[#000000] uppercase'>
                {e.place}
              </div>
            </div>
            <p className='font-bold'>{e.year}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Education
