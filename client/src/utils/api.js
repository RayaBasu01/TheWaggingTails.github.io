import axios from "axios";
const params = {
    headers:{
        Authorization: "bearer " + process.env.REACT_APP_API_KEY,
    },
};

export const fetchDataFromApi = async (url) => {

    try {
        const {data}  = await axios.get(process.env.REACT_APP_URL + url , params);
        return data;
    } catch (error) {
        console.log(error);
        return error
    }
}

