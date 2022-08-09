import axios from "../axios";



class SignUpService{

submitProduct = async (data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post('products', data)    // 20s
            .then((res) => {
                return resolve(res)
            })
            .catch((err) => {
                return resolve(err)
            })
    });

    return await promise;
}


    putProduct = async (id,data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('products/'+id,data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }




    fetchProduct = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }


    fetchProductByCategories = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products/categories')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }




    fetchSingleProduct = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products/'+data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }


    deleteProduct = async (id) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products/'+id)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }


    fetchAllProductLimit = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products',{params:params})
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