import React from 'react';
import { motion } from 'framer-motion';

const Studies = () => {
  // Education timeline data
  const academicData = {
    university: 'APJ Abdul Kalam Technological University, Kerala (KTU)',
    scheme: '2019 Regulation',
    graduationYear: '2026',
    subjectsAndSkills: {
      programming: [
        'Programming Fundamentals (C, Python, Java)',
        'Object-Oriented Programming',
        'Data Structures & Algorithms',
        'Web Development (HTML, CSS, JS, Backend Frameworks)',
        'Digital Logic Design',
        'Operating Systems',
        'Database Systems (SQL, NoSQL)',
      ],
      mathematics: [
        'Mathematics for AI (Linear Algebra, Calculus, Probability)',
        'Discrete Mathematics',
        'Numerical Methods',
        'Optimization Techniques',
      ],
      coreAI: [
        'Introduction to Artificial Intelligence',
        'Machine Learning',
        'Deep Learning',
        'Computer Vision',
        'Natural Language Processing',
        'Big Data Analytics',
        'Data Preprocessing and Cleaning',
        'Data Visualization',
        'Data Mining',
      ],
      systemsAndTools: [
        'Cloud Computing',
        'Data Warehousing',
        'Software Engineering Principles',
      ],
      toolsAndFrameworks: [
        'YOLOv5',
        'TensorFlow, PyTorch',
        'Scikit-learn',
        'Pandas, NumPy',
        'OpenCV',
        'Tableau / Power BI',
      ],
    },
    academicTimeline: [
      {
        year: '2022',
        period: 'Second Year',
        courses: [
          'Programming Fundamentals',
          'Mathematics for AI',
          'Introduction to AI',
          'Digital Logic Design',
        ],
        
      },
      {
        year: '2023',
        period: 'Third Year',
        courses: [
          'Machine Learning',
          'Data Structures',
          'Database Systems',
          'Web Development',
        ],
      },
      {
        year: '2024',
        period: 'Final Year',
        courses: [
          'Big Data Analytics',
          'Deep Learning',
          'Computer Vision',
          'Natural Language Processing',
        ],
      },
    ],
    majorProject: {
      title: 'Electricity Management using AI',
      description: [
        'Developed an AI-powered system for optimizing electricity consumption and distribution.',
        'Implemented predictive models for demand forecasting and anomaly detection.',
        'Designed a user-friendly interface for monitoring and controlling energy usage.',
      ],
    },

    technicalCompetencies: {
      languages: ['Python', 'C/C++', 'Java', 'SQL'],
      libraries: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'],
      bigDataTools: ['Hadoop', 'Spark (basics)'],
      web: ['HTML', 'CSS', 'JavaScript', 'Flask/Django'],
      visualization: ['Matplotlib', 'Seaborn', 'Tableau'],
      versionControl: ['Git'],
    },
    softSkills: [
      'Problem-solving',
      'Research & analytical thinking',
      'Communication and presentation',
      'Team collaboration',
      'Time management',
    ],
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="studies" className="py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Academic Profile</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16 lg:space-y-20">
          {/* University Details */}
          <motion.div
            className="glass rounded-xl p-6 neon-border"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4">University Details</h3>
            <p><strong>University:</strong> {academicData.university}</p>
            <p><strong>Scheme:</strong> {academicData.scheme}</p>
            <p><strong>Graduation Year:</strong> {academicData.graduationYear}</p>
          </motion.div>

          {/* Subjects & Skills Acquired */}
          <motion.div
            className="glass rounded-xl p-6 neon-border"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Subjects & Skills Acquired</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400 mb-3">Programming & Software Development:</h4>
                <div className="flex flex-wrap gap-2">
                  {academicData.subjectsAndSkills.programming.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400 mb-3">Mathematics & Computational Foundations:</h4>
                <div className="flex flex-wrap gap-2">
                  {academicData.subjectsAndSkills.mathematics.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400 mb-3">Core AI & Data Science:</h4>
                <div className="flex flex-wrap gap-2">
                  {academicData.subjectsAndSkills.coreAI.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">Systems & Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  {academicData.subjectsAndSkills.systemsAndTools.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">Tools and Frameworks:</h4>
                <div className="flex flex-wrap gap-2">
                  {academicData.subjectsAndSkills.toolsAndFrameworks.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Academic Timeline & Achievements */}
          <motion.div
            className="glass rounded-xl p-6 neon-border"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-3">Academic Timeline & Achievements</h3>
            <div className="timeline-container pl-10 relative">
              <div className="timeline-line"></div>
              {academicData.academicTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="mb-12 relative"
                  variants={itemVariants}
                >
                  <div className="timeline-dot" style={{ top: '6px' }}></div>
                  <div className="absolute -left-10 top-0 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-bold">
                    {item.year}
                  </div>
                  <div className="glass rounded-xl p-6 neon-border">
                    <h4 className="text-lg font-semibold mb-2">{item.period}</h4>
                    <p className="font-medium mb-2">Key Courses:</p>
                    <ul className="list-disc list-inside mb-2">
                      {item.courses.map((course, i) => (
                        <li key={i} className="text-sm">{course}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Major Project */}
          <motion.div
            className="glass rounded-xl p-6 neon-border"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-3">Major Project</h3>
            <h4 className="text-lg font-semibold mb-2">{academicData.majorProject.title}</h4>
            <ul className="list-disc list-inside">
              {academicData.majorProject.description.map((desc, i) => (
                <li key={i} className="text-sm">{desc}</li>
              ))}
            </ul>
          </motion.div>



          {/* Technical Competencies */}
          <motion.div
            className="glass rounded-xl p-6 neon-border"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-3">Technical Competencies</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">Languages:</h4>
                <div className="flex flex-wrap gap-2">
                  {academicData.technicalCompetencies.languages.map((lang, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">Libraries:</h4>
                <div className="flex flex-wrap gap-2">
                  {academicData.technicalCompetencies.libraries.map((lib, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                      {lib}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">Big Data Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  {academicData.technicalCompetencies.bigDataTools.map((tool, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">Web:</h4>
                <div className="flex flex-wrap gap-2">
                  {academicData.technicalCompetencies.web.map((web, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                      {web}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">Visualization:</h4>
                <div className="flex flex-wrap gap-2">
                  {academicData.technicalCompetencies.visualization.map((viz, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                      {viz}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">Version Control:</h4>
                <div className="flex flex-wrap gap-2">
                  {academicData.technicalCompetencies.versionControl.map((vc, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                      {vc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            className="glass rounded-xl p-6 neon-border"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-3">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {academicData.softSkills.map((skill, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Studies;