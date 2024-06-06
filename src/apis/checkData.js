import axios from "axios";

export const sendDataApi = async (values) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_URL_SERVER}/api/resgister`, values);

        return response;
    } catch (error) {
        throw error; 
    }

}