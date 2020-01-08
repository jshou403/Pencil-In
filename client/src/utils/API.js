import axios from "axios";

export default {
    getStudents: function(){
        return axios.get("/api/students/")
    },
    getUsers: function(){
        return axios.get("/api/users");
    },
    //this is variable is injecting itself into the route
    updateAttendance: function(id, status){
       return axios.put(`/api/students/${id}`, status)
    },
    retrieveChild: function(id, childData){
        return axios.get(`/api/students/${id}`, childData)
    }
    
}