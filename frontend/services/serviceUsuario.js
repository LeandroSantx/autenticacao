import axios from 'axios';


var usuarioService = {


    postUsuario: async (Cadastro) => {
        var usuarioAPI = axios.post(`http://localhost:5000/apiusuario/`,Cadastro);
        return await usuarioAPI;
      },

    /*postUsuario: async (email, senha) => {
    var usuarioAPI = axios.post(`http://localhost:5000/apiusuario/user`,formData);
    return await clienteAPI;
    }*/
}
export default usuarioService;