"use client";


const LanguageSelector = () => {

  return (
    <div className="flex gap-2 items-center">
      <select
        id="language"
        className="p-1 rounded text-sm bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        <option value="en" className="text-black">English</option>
        <option value="es" className="text-black">Español</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
