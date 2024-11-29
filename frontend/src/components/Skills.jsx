import { motion } from 'framer-motion'

const skills = [
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Express', level: 75 },
  { name: 'MongoDB', level: 70 },
  { name: 'Next.js', level: 50 },
  { name: 'Python', level: 60 },
  { name: 'SQL', level: 65 },
  { name: 'Tailwind CSS', level: 55 },
  { name: 'HTML', level: 80 },
  { name: 'CSS', level: 60 },
  { name: 'PHP', level: 63 },
  { name: 'C++', level: 62 },
  { name: 'Java', level: 45 },
  { name: 'C', level: 80 },
  { name: 'Kotlin', level: 50 },
  { name: 'R', level: 72 },
]

export default function Skills() {
  return (
    <section className="pt-40 py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg p-6 text-center text-white"
            >
              <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
              {/* Animated Progress Bar */}
              <div className="w-full bg-gray-600 rounded-full h-2 mb-4">
                <motion.div
                  initial={{ width: '0%' }} // Start at 0% width
                  animate={{ width: `${Math.min(skill.level, 100)}%` }} // Animate to skill.level width
                  transition={{ duration: 1.5, ease: 'easeInOut' }} // Smooth animation
                  className="bg-blue-500 h-2 rounded-full"
                />
              </div>
              <p className="text-sm text-gray-400">{skill.level}% proficiency</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
