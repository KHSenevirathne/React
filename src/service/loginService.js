import axios from "../axios";



class SignInService{

    postUser = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('auth/login', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }
}
export default new SignInService();