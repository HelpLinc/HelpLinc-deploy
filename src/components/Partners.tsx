

const PartnersSlider = () => {
  return (
    <div className="overflow-hidden py-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg border-blue-500 border-2 rounded-lg p-5 m-4">
      <h1 className="text-4xl font-bold text-[#060644] mb-8 text-center">Our Partners</h1>
      
      {/* Scrolling container */}
      <div className="relative overflow-x-hidden">
        <div className="flex flex-wrap items-center p-4 justify-center space-x-8 animate-scroll">
          {/* Partner images */}
          <img src="/Faisal.PNG" alt="Partner 1" className="w-20 h-20 object-contain" />
          <img src="/holberton-logo.PNG" alt="Partner 2" className="w-20 h-20 object-contain" />
          <img src="/HelpLogo.webp" alt="Partner 3" className="w-20 h-20 object-contain" />
          <img src="/tool.png" alt="Partner 4" className="w-20 h-20 object-contain" />
          <img src="/partner4.JPG" alt="Partner 5" className="w-20 h-20 object-contain" />
          <img src="/vite.svg" alt="Partner 5" className="w-20 h-20 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default PartnersSlider;