import axios from 'axios';

const API_KEY = 'at_pgu5AlssTyRLb9VKh8OJqjiSOdwey';

/**
 * Get Ip Address Info on Ipify Server.
 * @param {*} ip_address
 * @return mixed (bool || obj)
 */
const getIpAddress = async function (ip_address = '') {
    try {
        const { data } = await axios.get('https://geo.ipify.org/api/v1', {
            params: {
                apiKey: API_KEY,
                ipAddress: ip_address
            },
        });
        return data;
    } catch (error) {
        alert("Oops! Something went wrong.");
        console.alert(error.response);
        return false;
    }
};

export { getIpAddress };
