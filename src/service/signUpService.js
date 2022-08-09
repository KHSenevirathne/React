import axios from "../axios";



class SignUpService{

postUserCustomer = async (data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post('users', data)    // 20s
            .then((res) => {
                return resolve(res)
            })
            .catch((err) => {
                return resolve(err)
            })
    });

    return await promise;
}


    putUser = async (id,data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('users/'+id,data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }




    fetchCustomers = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('users')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    fetchSingleCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('users/'+data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }


    deleteCustomer = async (id) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('users/'+id)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }


    fetchAllCustomersLimit = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('users',{params:params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }


}
export default new SignUpService();