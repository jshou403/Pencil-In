import axios from "axios";

export default {
    getStudents: function(){
        return axios.get("/api/students")
    }
}