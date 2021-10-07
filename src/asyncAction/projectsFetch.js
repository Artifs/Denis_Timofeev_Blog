import { addManyProjectsAction } from "../store/projectsReducer"

export const fetchProjects  = () => {
    return function(dispatch){
        var form = new FormData()
        form.append('Projects', true);
        fetch('http://localhost/projects/server_blog/index.php',{
            method: 'POST',
            body: form
        })
            .then (response => response.text())
            .then(response => {
                let a = response.split(';');
                dispatch(addManyProjectsAction(a))
            })
    }
}