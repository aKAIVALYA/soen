import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../src/context/user.context'
import axios from '../src/config/axios'
import { useNavigate } from 'react-router-dom'

function Home() {
  const { user } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [projectName, setProjectName] = useState("");
  const [project, setproject] = useState([])

  const navigate = useNavigate();

  function createProject(e) {
    e.preventDefault();
    console.log({ projectName })

    axios.post('/projects/create', { name: projectName })
      .then((res) => {
        console.log("CREATE RESPONSE:", res.data);

        const newProject = res.data.project || res.data; // fallback if not nested

        if (!newProject || !newProject._id) {
          console.error("Invalid project response format");
          return;
        }

        setproject([...project, newProject]);
        setIsModalOpen(false);
        setProjectName("");
      })
      .catch((err) => {
        console.log("Error creating project:", err.response?.data || err.message);
      });
  } 

 useEffect(() => {
        axios.get('/projects/all').then((res) => {
            setproject(res.data.projects)

        }).catch(err => {
            console.log(err)
        })

    }, [])

  return (
    <main className='p-4'>
      <div className='projects flex flex-wrap gap-3'>
        <button
          onClick={() => setIsModalOpen(true)}
          className='project p-4 border border-late-300 rounded-md'>
          NEW PROJECT
          
          <i className="ri-flashlight-fill ml-2.5"></i> 
        </button>
                  {project.map((proj, index) => {
          if (!proj || !proj.name) return null;

          return (
            <div key={proj._id || index}
              onClick={() => navigate('/project', { state: { project: proj } })}
              className="project flex flex-col gap-2 cursor-pointer p-4 border border-slate-300 rounded-md min-w-52 hover:bg-slate-200">

              <h2 className='font-semibold'>{proj.name}</h2>

              <div className="flex gap-2">
                <p><small><i className="ri-user-line"></i> Collaborators</small> :</p>
                {proj.users?.length ?? 0}
              </div>
            </div>
          );
        })}
                
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Create New Project</h2>
            <form onSubmit={createProject}>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Project Name
                <input
                  onChange={(e) => setProjectName(e.target.value)}
                  value={projectName}
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </label>
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() =>{ setIsModalOpen(false);
                    setProjectName("");

                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}

export default Home