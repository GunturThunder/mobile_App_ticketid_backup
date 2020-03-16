import axios from 'axios';

export const getAllHotell = () => {
    return {
        type: 'GET_HOTELS',
        payload: axios({
            method: "GET",
            url: `http://192.168.1.39:8282/v1/hotel`
        })
    }
}