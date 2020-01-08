import axios from "axios";

export default {
    getStudents: function(){
        return axios.get("/api/students/")
    },
    getUsers: function(){
        return axios.get("/api/users");
    },
    
}