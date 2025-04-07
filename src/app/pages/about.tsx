export default function About() {

  const textExemple = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."

  return (
    <>
      <div className="h-[200vh] w-[99vw] font-mono text-black bg-white pl-14 pr-2 pt-2 pb-2 flex justify-center items-center cursor-none">
        <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden relative font-mont">
          <div className="w-full h-full px-24 pt-16 ">
            <h1 className="text-5xl font-semibold font-mont">About Me</h1>
            <div className="mt-12 flex flex-row h-full gap-12">
              <div className="w-1/3 h-1/3 bg-red-500"></div>
              <h1 className="text-md font-semibold font-mont h-min w-2/3">{textExemple}</h1>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}
