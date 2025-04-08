import ExperienceList from "../components/Experience"

export default function About() {

  const textExample = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet consectetur adipiscing elit. "

  return (
    <>
      <div className="h-[200vh] w-[99vw] font-mono text-black bg-white pl-14 pr-2 pt-2 pb-2 flex justify-center items-center cursor-none">
        <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden relative font-mont">
          <div className="w-full h-full px-24 pt-16 flex flex-col">
            <h1 className="text-5xl font-semibold font-mont">About Me</h1>
            <div className="mt-12 flex flex-row h-1/3 gap-12  ">
              <div className="w-[150vw] h-full bg-red-500"></div>
              <div className="flex flex-col">

              <h1 className="text-md font-semibold font-mont h-min w-2/3">{textExample}</h1>
              <MyInformationText/>
              </div>

            </div>
            <div className="w-full mt-12">
              <ExperienceList/>
            </div>
            <div className="w-full h-1/4 bg-yellow-500 mt-12">

            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export function MyInformationText() {

  const info = {
    name:"Breno Amorim", 
    email:"brenoamorim11@gmail.com", 
    phone:"+55 (11) 94327-1046", 
    age: 23, 
    postal:"São Paulo - SP, Brasil"
  }

  return (
  <>
  <div className="w-full h-2/3 mt-5 flex flex-col gap-4 pt-4">
    <h1 className="text-purple-400 font-semibold">Nome: <a className="text-black ">{info.name}</a></h1>
    <h1 className="text-purple-400 font-semibold">E-mail: <a className="text-black ">{info.email}</a></h1>
    <h1 className="text-purple-400 font-semibold">Telefone: <a className="text-black ">{info.phone}</a></h1>
    <h1 className="text-purple-400 font-semibold">Idade: <a className="text-black ">{info.age}</a></h1>
    <h1 className="text-purple-400 font-semibold">Moro: <a className="text-black">{info.postal}</a></h1>
  </div>
  </>)
}

