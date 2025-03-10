import { FileQuestion, Gamepad2, Users, Dices } from 'lucide-react';

const App = () => {
  const links = [
    { 
      title: 'IMO Sosialisasi DIAMOND CORE VALUE + CACA',
      url: '/IMO.pdf',
      icon: <FileQuestion className="w-6 h-6" />
    },
    { 
      title: 'Daftar Karyawan yang belum ikut dan lulus DIAMOND CORE VALUE + CACA',
      url: '/DATA.pdf',
      icon: <FileQuestion className="w-6 h-6" />
    },
    { 
      title: 'Link Product Knowledge',
      url: 'https://pkdiamond.vercel.app/',
      icon: <FileQuestion className="w-6 h-6" />
    },
    { 
      title: 'Peraturan Games Kahoot',
      url: '/peraturan.pdf',
      icon: <FileQuestion className="w-6 h-6" />
    },
    { 
      title: 'Tutorial Bermain Kahoot',
      url: '/tutorial.pdf',
      icon: <Gamepad2 className="w-6 h-6" />
    },
    { 
      title: 'Link Microsoft Teams Kahoot',
      url: 'https://tinyurl.com/TEAMSKahoot',
      icon: <Users className="w-6 h-6" />
    },
    { 
      title: 'Link ID Generator',
      url: 'https://uid-gen.vercel.app',
      icon: <Dices className="w-6 h-6" />
    },

    
  ];

  return (
    <div className="min-h-screen w-full bg-[url('./img/bg.jpg')] p-4 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 rounded-2xl backdrop-blur-xl bg-white/60 shadow-xl">
        {/* Profile Section */}
        <div className="text-center space-y-4">
          <div className="relative w-24 h-24 mx-auto">
            <img
              src="https://www.diamondfoodindonesia.com/cfind/source/images/logo.png"
              alt="Profile"
            />
          </div>
          <h1 className="text-2xl font-bold text-black">GET Diamond 💎</h1>
          <p className="text-black/80">Corporate Training & Development</p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={`group flex items-center p-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                index < 2 
                ? 'bg-red-600 hover:bg-red-700' 
                : 'bg-white/80 hover:bg-white/20 border border-white/10'
              }`}
            >
              <div className={`flex items-center space-x-4 w-full ${
                index < 2 ? 'text-white font-bold' : 'text-black'
              }`}>
                <span className="transition-transform duration-300 group-hover:rotate-12">
                  {link.icon}
                </span>
                <span className="text-lg font-medium">{link.title}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-8 text-center">
          <p className="text-black/60 text-sm">
            © 2025 Diamond Group | Corporate Training & Development
          </p>
        </div>
      </div>
    </div>
  );
};

export default App
