// Write your JS code here
import {Component} from 'react'

import './index.css'
import Projects from '../Projects'

const initalProjectList = [
  {
    id: 1,
    projectName: 'Todos List',
    projectLink:
      'https://2264091154-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LAFAFKB0K7agCFRGoeS%2F-LPlOxKC2OuWN0Tq67DQ%2F-LPlOs1L1y7dFaV0nTgq%2Ftodo-app-final.gif?alt=media&token=67764dd0-91a0-40b4-9b89-97ba2c04fcd8',
    projectDescription: 'User can add list which he want to track',
  },
  {
    id: 2,
    projectName: 'Wikipedia',
    projectLink:
      'https://blog.openreplay.com/images/building-an-encyclopedia-with-react-and-wikipedia-search-api/images/img2.png',
    projectDescription: 'Wikipedia search Engine similar to google',
  },
]

class Home extends Component {
  state = {
    projectName: '',
    projectLink: '',
    projectDescription: '',
    projectList: initalProjectList,
  }

  onChangename = event => {
    this.setState({projectName: event.target.value})
  }

  onChangeLink = event => {
    this.setState({projectLink: event.target.value})
  }

  onChangeDiscription = event => {
    this.setState({projectDescription: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {
      projectName,
      projectLink,
      projectDescription,
      projectList,
    } = this.state

    const newProject = {
      projectName,
      projectLink,
      projectDescription,
      id: projectList.length + 1,
    }
    this.setState(prevState => ({
      projectList: [...prevState.projectList, newProject],
      projectName: '',
      projectLink: '',
      projectDescription: '',
    }))
  }

  onClickProject = () => {}

  render() {
    const {projectList} = this.state

    return (
      <div className="home-container">
        <div className="top-contaern">
          <div className="left-container">
            <h4>UI/UX DESIGNER</h4>
            <h2>Hello, my name is Rahul Reddy,</h2>
            <p>
              Am from Humnabad dist Bidar Karnataka, am graduated in the field
              of Mechanical Engineering in the year of 2018 from Reva college
              Bengaluru, and I have worked for 2 years as an Automobile Data
              Analyst in ClearQuote Technologies Pvt Ltd.
              <br />
              Am trained in fullstack developer
            </p>
            <button
              type="button"
              className="primary-buttton"
              onClick={this.onClickProject}
            >
              Projects
            </button>
            <button type="button" className="secondary-button">
              Linkedln
            </button>
          </div>
          <div className="right-container">
            <img
              src="https://res.cloudinary.com/dookgusbq/image/upload/v1704391701/image_2_qhvi9q.jpg"
              className="mian-image"
              alt="profilePic"
            />
          </div>
        </div>

        <form className="form-container" onSubmit={this.submitForm}>
          <h1 className="add-project-heading">Add Project</h1>
          <label htmlFor="projectNAme">Project Name</label>
          <br />
          <input type="text" id="projectNAme" onChange={this.onChangename} />
          <br />
          <br />
          <label htmlFor="projectLink">Project Link</label>
          <br />
          <input type="text" id="projectLink" onChange={this.onChangeLink} />
          <br />
          <br />
          <label htmlFor="textareaId">Description</label>
          <br />
          <textarea
            id="textareaId"
            rows="10"
            cols="50"
            onChange={this.onChangeDiscription}
          />
          <br />
          <button type="submit" className="add-button">
            Add
          </button>
        </form>
        <ul>
          {projectList.length > 0
            ? projectList.map(eachProject => (
                <Projects
                  eachProjectDetails={eachProject}
                  key={eachProject.id}
                />
              ))
            : null}
        </ul>
      </div>
    )
  }
}

export default Home
