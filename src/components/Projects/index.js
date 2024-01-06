import './index.css'

const Projects = props => {
  const {eachProjectDetails} = props

  const {projectName, projectLink, projectDescription} = eachProjectDetails
  console.log(eachProjectDetails)
  return (
    <li className="list-style">
      <div>
        <h1>{projectName}</h1>
        <p>{projectDescription}</p>
        <button type="button">View Project</button>
      </div>
      <img src={projectLink} alt="projectImage" className="projectImage" />
    </li>
  )
}

export default Projects
