import ApiService from "./ApiService";

type LoginProps = {
    username: string;
    password: string;
}

export default class LoginService {

    static async TryToLogin(username: string, password: string) {
        try {
            const response = await ApiService.api.post('/user/login', {
                username: username,
                password: password,
                expiresInMins: 30, 
            }, {
                headers: { 
                    'Content-Type': 'application/json' 
                },
            });
            console.log(response.data);
            return response.data;
            
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            throw error;
        }
    }
}