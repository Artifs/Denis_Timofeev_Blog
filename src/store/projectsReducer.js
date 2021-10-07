const defaultState = {
    projects:[]
 }

 const addManyProjects = "addManyProjects"
 
 export const projectReducer = (state = defaultState, action) => {
     switch (action.type) {
         case addManyProjects:
             return {...state, projects: [...action.payload]}
         default:
             return state
     }
   }
   
export const addManyProjectsAction = (payload) => ({type: addManyProjects, payload})
