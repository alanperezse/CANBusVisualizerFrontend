import {useState} from 'react'
import NewProjectForm from './NewProjectForm'
import ProjectState from './ProjectState'
import './index.css';

function NewProject() {
    const [state, setState] = useState<ProjectState>({
        name: '',
        baud_rate: 9600,
        initials: '',
        dbc_file: null,
        blacklist_file: null,
    })

    return (
        <div className='new-project'>
            <h1 className='new-project-title'>New Project</h1>
            <NewProjectForm state={state} setState={setState}/>
        </div>
    )
}

export default NewProject