function makeAccordion(...props) {
  let string = ``;
  const projectInfo = {
  title: "TITLE",
  text: `
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Client</h2>
      <p>NAME</p>
    </div>
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Project Description</h2>
      <p>DESCRIPTION</p>
    </div>
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Project Duration</h2>
      <p>September 2023 &rarr; May 2024</p>
    </div>
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Links</h2>
      <p>Github Repository: REPO LINK</p>
    </div>
  `,
};
  for (const k in props) {
    string += `
      <div class='accordion-item w-full ${k == 0 && 'rounded-t-xl'}'>
        <div class='header cursor-pointer flex justify-between items-center p-5 font-medium text-gray-500 border ${k != props.length-1 && "border-b-0"} border-gray-200 ${k == 0 && 'rounded-t-xl'} hover:bg-blue-100'>
          <p>${props[k].title}</p>
          <svg xmlns='http://www.w3.org/2000/svg' class='circle border border-gray-500 rounded-full p-1 flex-none' width='30' height='30' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
            <path class='line' d='M12 5l0 14'></path>
            <path d='M5 12l14 0'></path>
          </svg>
        </div>
        <div class='hidden toggle border border-gray-200'>
          <div class='p-5 text-black'>
            ${props[k].text}
          </div>
        </div>
      </div>
    `;
  }
  return `<div class='w-full mb-5'>${string}</div>`;
}
const projectInfoMPI001 = {
  title: "MPI-001-Employment-Interest-Tool",
  text: `
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Client</h2>
      <p>MPI-001 Employment Interesse Test</p>
    </div>
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Project Description</h2>
      <p>Placement test for people with disability, the project was done using the TALL stack</p>
    </div>
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Project Duration</h2>
      <p>September 2025 &rarr; October 2025</p>
    </div>
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Links</h2>
      <p>Github Repository: https://github.com/Thomas-More-Digital-Innovation/2526-MPI-001-Employment-Interest-Tool.git</p>
    </div>
  `,
};
const projectInfoMOBI009 = {
  title: "MOBI-009-Game-for-children-with-disabilities",
  text: `
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Client</h2>
      <p>MOBILAB</p>
    </div>
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Project Description</h2>
      <p>MOBILAB wanted a VR application that uses mixed reality (with reality passthrough) to train children that have motor disabilities. The application scans the environment, finds a type of furniture the user defined as a table in the headset settings and places and scales the car track according to it</p>
    </div>
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Project Duration</h2>
      <p>October 2025 &rarr; On-going</p>
    </div>
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Links</h2>
      <p>Github Repository: https://github.com/Thomas-More-Digital-Innovation/2526-MOBI-009-Game-for-children-with-disabilities.git</p>
    </div>
  `,
};
const projectInfoMOBI016 = {
  title: "MOBI-016-I-m-in-tales-project",
  text: `
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Client</h2>
      <p>MOBILAB</p>
    </div>
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Project Description</h2>
      <p>MOBILAB requested a revision of an old project that got abandoned, We we're required to create an application that communicates with an NFC reader to give it interactivity, the scanned object with a nfc tag would change the outcome in the choose your own adventure type game</p>
    </div>
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Project Duration</h2>
      <p>October 2025 &rarr; On-going</p>
    </div>
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Links</h2>
      <p>Github Repository: https://github.com/Thomas-More-Digital-Innovation/2526-MOBI-016-I-m-in-tales-project.git</p>
    </div>
  `,
};