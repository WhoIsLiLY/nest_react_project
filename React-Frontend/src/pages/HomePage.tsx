import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar */}
      <nav className="navbar bg-base-100 px-10">
        <div className="flex-1">
          <a className="text-xl font-bold">My Portfolio</a>
        </div>
        <div className="flex-none">
          <input type="checkbox" value="winter" className="toggle theme-controller" />;
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hi, I'm Willy</h1>
            <h2 className="text-2xl font-semibold mt-4">Welcome to my portfolio! I'm a web developer passionate about building modern and responsive websites.</h2>
            <br />
            <p className="py-6">This website is built with React TS and a powerful Nest.JS as a backend.</p>
            <button className="btn btn-primary">Explore My Work</button>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto py-10">
        <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card shadow-lg bg-base-100">
            <figure><img src="https://via.placeholder.com/400x300" alt="Project 1" /></figure>
            <div className="card-body">
              <h2 className="card-title">Project 1</h2>
              <p>A brief description of the project.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View More</button>
              </div>
            </div>
          </div>
          <div className="card shadow-lg bg-base-100">
            <figure><img src="https://via.placeholder.com/400x300" alt="Project 2" /></figure>
            <div className="card-body">
              <h2 className="card-title">Project 2</h2>
              <p>A brief description of the project.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View More</button>
              </div>
            </div>
          </div>
          <div className="card shadow-lg bg-base-100">
            <figure><img src="https://via.placeholder.com/400x300" alt="Project 3" /></figure>
            <div className="card-body">
              <h2 className="card-title">Project 3</h2>
              <p>A brief description of the project.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-4 bg-base-100 text-base-content">
        <div>
          <p>© 2024 [Your Name] - All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
