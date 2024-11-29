import { motion } from 'framer-motion';
import Image1 from './ProjectImage/Screenshot 2024-11-28 213318.png'

// Projects array with GitHub links and images
const projects = [
  {
    id: 1,
    title: 'Personal-Portfolio-Website',
    description: 'Using HTML, CSS, PHP and JavaScript to build a personal portfolio website.',
    image: Image1, // Replace with the image URL
    github: 'https://github.com/Chanuka-Sandeepa/Portfolio-01', // Replace with your GitHub link
  },
  {
    id: 2,
    title: 'Online Food Ordering System',
    description: 'Using HTML, CSS, PHP and JavaScript to build an online food ordering system.',
    image: 'https://via.placeholder.com/300', // Replace with the image URL
    github: 'https://github.com/yourusername/online-food-ordering-system', // Replace with your GitHub link
  },
  {
    id: 3,
    title: 'Online Vehicle Rent System',
    description: 'Java Language Use To Build Online Vehicle Rent System.',
    image: 'https://via.placeholder.com/300', // Replace with the image URL
    github: 'https://github.com/yourusername/online-vehicle-rent-system', // Replace with your GitHub link
  },
  {
    id: 4,
    title: 'Mobile Shop Management System',
    description: 'Mern Stack (React, Node.js, Express.js and MongoDB) use to build a mobile shop management system.',
    image: 'https://via.placeholder.com/300', // Replace with the image URL
    github: 'https://github.com/yourusername/mobile-shop-management-system', // Replace with your GitHub link
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto pt-20">
        {/* Section title */}
        <h2 className="text-4xl font-bold text-center text-white mb-12">Projects</h2>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition duration-300"
            >
              {/* Project Image */}
              <div className="rounded-t-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                {/* Project title */}
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>

                {/* Project description */}
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* More details button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition duration-300"
                >
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
