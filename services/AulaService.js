import axios from "axios";

class AulaService {

    async pegarAulas() {
        return axios({
            // url: "http://localhost:3000/aula/listar",
            url: "http://172.16.17.191:3000/aula/listar",
            method: "GET",
            timeout: 5000,
            headers: {
                Accept: 'application/json'
            }
        })
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }
}

const aulaService = new AulaService();
export default aulaService;