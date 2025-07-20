import { Pinterest, ArrowRight } from 'lucide-react';
import AkaiVermelho from '../../assets/akaiVermelho.jpg';
import Image from 'next/image';
// Main component to display the Pinterest projects section
export default function PinterestGallery() {
  // Updated data structure to include both image source and Pinterest link for each project.
  // Replace these with your actual project data.
  const projects = [
    {
      imgSrc: "https://i.pinimg.com/736x/38/42/35/38423597b8e2a5a622d032bc32549cb1.jpg",
      pinterestUrl: "https://pin.it/7iXjvJxI7",
    },
    {
      imgSrc: "https://i.pinimg.com/736x/31/bb/5b/31bb5b1484cdcdfdf863f5dd19ddbdf4.jpg",
      pinterestUrl: "https://pin.it/8YZE27Kkh",
    },
    {
      imgSrc: "https://i.pinimg.com/736x/ce/c4/2f/cec42f47046e04962342c4facdeed07e.jpg",
      pinterestUrl: "https://pin.it/kxQCqog54",
    },
    {
      imgSrc: "https://i.pinimg.com/736x/ec/c2/90/ecc2908a888e94a352114f3bb223de1b.jpg",
      pinterestUrl: "https://pin.it/6rEInO2qx",
    },
    {
      imgSrc: "https://i.pinimg.com/736x/53/c3/53/53c3535305915572adcbd0f9987a5065.jpg",
      pinterestUrl: "https://pin.it/2RWCGYs7V",
    },
    {
      imgSrc: "https://i.pinimg.com/736x/06/d7/40/06d74039fa8634b8cc0d78a76830cf6e.jpg",
      pinterestUrl: "https://pin.it/2rEFd4qBp",
    },
    {
      imgSrc: "https://i.pinimg.com/736x/a8/2f/94/a82f940463c287137bc730c2ea081700.jpg",
      pinterestUrl: "https://pin.it/2PECfRa8z",
    },
    {
      imgSrc: "https://i.pinimg.com/736x/5d/04/3d/5d043d9fa623b86b06f141fcde893507.jpg",
      pinterestUrl: "https://pin.it/1kovOQQvG",
    },
    {
      imgSrc: "https://i.pinimg.com/736x/19/65/9a/19659a54b46eba263151be5bed1a592e.jpg",
      pinterestUrl: "https://i.pinimg.com/736x/5d/04/3d/5d043d9fa623b86b06f141fcde893507.jpg",
    },
    {
      imgSrc: "https://i.pinimg.com/736x/15/84/4c/15844c32830764e2190b5c192e066c83.jpg",
      pinterestUrl: "https://pin.it/46YuJjtTR",
    },
    {
      imgSrc: "https://i.pinimg.com/736x/36/68/11/366811a95b8b7b752260ce177c847465.jpg",
      pinterestUrl: "https://pin.it/6rljuxnlZ",
    },
    {
      imgSrc: "https://i.pinimg.com/736x/54/c0/8e/54c08ebfd533ee33945879ef7ff068bb.jpg",
      pinterestUrl: "https://pin.it/61quoPALS",
    },
    {
      imgSrc: "https://i.pinimg.com/736x/d1/39/ce/d139cefafe76c96a00c1c9507ba8145f.jpg",
      pinterestUrl: "https://pin.it/5tAZ7mWcI",
    },
    {
      imgSrc: "https://i.pinimg.com/736x/c1/a0/32/c1a0323fafd1e9361776e8dc4853278d.jpg",
      pinterestUrl: "https://pin.it/1SFqj4rnS",
    },
    {
      imgSrc: "https://i.pinimg.com/736x/ed/f0/af/edf0af40567f9674f6c3f3543abf6e13.jpg",
      pinterestUrl: "https://pin.it/sgD8IHbRL",
    },
    {
      imgSrc: "https://i.pinimg.com/736x/cc/2d/1c/cc2d1c58c443b7296b4d659d35e6a24b.jpg",
      pinterestUrl: "https://pin.it/6Yi7vmKjh",
    },
    {
      imgSrc: "https://i.pinimg.com/736x/2f/94/f5/2f94f5f8ef3b372d481dde9c21512997.jpg",
      pinterestUrl: "https://pin.it/52XBkoTIc",
    }
  ];

  return (
    <div className="bg-gray-50/50 font-sans flex items-center justify-center min-h-screen p-4 py-16" id="projetos">
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center space-y-8">
        
        {/* Header Section */}
        <div className="text-center max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Nossos Projetos
          </h2>
        </div>

        {/* Pinterest Showcase Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-16 w-full">
          {/* Profile Header */}
          <div className="flex items-center mb-4">
            {/* <img
              src={AkaiVermelho}
              alt="NOMS DECOR profile"
              className="w-10 h-10 rounded-full mr-3"
            /> */}
            <Image
              src={AkaiVermelho}
              alt="NOMS DECOR profile"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="font-semibold text-gray-800">AKAI MÓVEIS</span>
          </div>

          {/* Scrollable Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6 max-h-[40vh] overflow-y-auto p-2">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.pinterestUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden"
              >
                <img
                  src={project.imgSrc}
                  alt={`Projeto ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/300x400/fecaca/991b1b?text=Error'; }}
                />
              </a>
            ))}
          </div>
          
          {/* Follow Link */}
          <div className="text-center">
            <a
              href="https://br.pinterest.com/akaimoveiseplanejados/" // Direct link to the profile
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
            >
              Siga-nos no
              <span className="ml-1 font-bold text-red-600">Pinterest</span>
            </a>
          </div>
        </div>

        {/* Call to Action Button */}
        <div>
          <a className="bg-zinc-800 text-sm whitespace-nowrap max-[768px]:w-90 max-[768px]:m-auto text-white font-bold py-3 px-8 rounded-lg hover:bg-zinc-700 transition-colors duration-300 shadow-md cursor-pointer" href="#contato">
            QUERO UM PROJETO PERSONALIZADO
          </a>
        </div>
        
      </div>
    </div>
  );
}
