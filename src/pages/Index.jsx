import { FaBookmark, FaPlus } from "react-icons/fa"; // Importing icons

const Index = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">The AI Roster</h1>
          <div>
            <button className="bg-black text-white border border-purple-500 rounded-full px-4 py-2 mr-2">Add My App</button>
            <button className="bg-black text-white border border-purple-500 rounded-full px-4 py-2 mr-2">Sign In</button>
            <button className="bg-black text-white border border-purple-500 rounded-full px-4 py-2">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-black text-white border-r border-purple-500">
          <div className="p-4">
            <h2 className="font-bold text-lg">Sponsored</h2>
            {/* Placeholder for sponsored content */}
          </div>
        </aside>

        {/* Main section */}
        <main className="flex-1">
          <div className="p-4">
            {/* Search Bar */}
            <div className="mb-4">
              <input type="text" placeholder="Search AI Apps..." className="w-full p-2 bg-black border border-purple-500" />
            </div>

            {/* Categories */}
            <div className="flex overflow-x-auto mb-4">
              <div className="mr-2 px-4 py-2 bg-black border border-purple-500 rounded-full">Category 1</div>
              <div className="mr-2 px-4 py-2 bg-black border border-purple-500 rounded-full">Category 2</div>
              <div className="mr-2 px-4 py-2 bg-black border border-purple-500 rounded-full">Category 3</div>
            </div>

            {/* Grid of AI Apps */}
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="bg-black border border-purple-500 rounded-lg p-4 relative">
                  <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3MTM4MTU3NTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Company Logo" className="h-10 w-10 rounded-full" />
                  <h3 className="text-white mt-2">App Name {index + 1}</h3>
                  <a href="#" className="text-purple-500">
                    Visit App
                  </a>
                  <FaBookmark className="absolute right-2 bottom-2 text-purple-500" />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
