import axios from "../axios";



class SignUpService{

submitCart = async (data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post('carts', data)    // 20s
            .then((res) => {
                return resolve(res)
            })
            .catch((err) => {
                return resolve(err)
            })
    });

    return await promise;
}


    putCart = async (id,data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('carts/'+id,data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }




    fetchCart = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('carts')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    fetchSingleCart = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('carts/'+data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }


    deleteCart = async (id) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('carts/'+id)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }


    fetchAllCartsLimit = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('carts',{params:params})
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