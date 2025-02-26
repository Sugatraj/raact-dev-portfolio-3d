import { projects } from '../constants'

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#1d1836] p-5 rounded-2xl sm:w-[360px] w-full">
      <div className="relative w-full h-[230px]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
        <p className="mt-2 text-[#aaa6c3] text-[14px]">{project.description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>

      <div className="mt-4 flex justify-between">
        <a
          href={project.source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#915EFF] hover:text-[#804dee] transition-colors"
        >
          Source Code
        </a>
        <a
          href={project.live_demo_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#915EFF] hover:text-[#804dee] transition-colors"
        >
          Live Demo
        </a>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="relative w-full min-h-screen mx-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects
        </h2>
        <p className="mt-4 text-[#dfd9ff] text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and live demos.
        </p>

        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 