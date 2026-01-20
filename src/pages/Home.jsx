import { useState, useTransition } from "react";

const Home = () => {

  const projects = [
    { id: 1, name: "Meco Club", year: "2025", category: "Personal", imageUrl: "https://images.squarespace-cdn.com/content/v1/5de150a7f708ae5ab34c13ee/476066f1-a572-4556-ab22-439e9bf7a644/Precomposizione+1.gif?format=500w" },
    { id: 2, name: "Urban Scope", year: "2025", category: "Personal", imageUrl: "" },
    { id: 3, name: "Delight Weds Fredrick", year: "2024", category: "Clients", imageUrl: "" },
    { id: 4, name: "Mosalak Hub", year: "2026", category: "Clients", imageUrl: "" },
    { id: 5, name: "Yole Couriers", year: "2025", category: "Client", imageUrl: "" },
    { id: 6, name: "Corty", year: "2023", category: "Experiments", imageUrl: "" },
    { id: 7, name: "Amara Reynolds", year: "2024", category: "Experiments", imageUrl: "" },
    { id: 8, name: "Chris Dubem Photography", year: "2026", category: "Client", imageUrl: "" },
    // { id: 9, name: "Zenith Tech", year: "2024", category: "Clients", imageUrl: "" },
    // { id: 10, name: "Pixel Perfect", year: "2025", category: "Experiments", imageUrl: "" },

  ];

  const [filter, setFilter] = useState("All");
  const filteredprojects = filter === "All" ? projects : projects.filter(project => project.category === filter);


  return (
    <section className='container py-10 flex flex-col'>
      <h1 className="font-medium text-xl md:text-[36px] leading-tight tracking-tight">
        Hello! I'm Nathan
        <br/>
        Independent Designer & Developer.
      </h1>

      {/* Filter through Projects */}
      <div className="flex items-center gap-4 mt-6 font-medium text-sm">
        {["All", "Clients", "Personal", "Experiments"].map((cat) => (
          <button key={cat} onClick={() => setFilter(cat)} className={`hover:text-dark/60 ${filter === cat ? "underline font-semibold" : "text-dark/50"}`}> 
            {cat} 
          </button>
        ))}
      </div>


      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2">
        {filteredprojects.map((project) => (
          <div key={project.id} className="flex flex-col items-start gap-1 overflow-hidden truncate whitespace-nowrap">
            <img src={project.imageUrl} alt="" className="w-full h-50 bg-gray-300" />
            <p className="text-sm font-medium"> {project.name} • {project.year} </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Home;