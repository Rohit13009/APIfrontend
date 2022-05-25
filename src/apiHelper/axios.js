const axios = require("axios");
const { response } = require("express");

const getHomePageData = async()=>{
    let url = `http://localhost:2000/getData`;
    let response;
    response = await axios.get(url)
    console.log("res--", response);
    return {
        message: response.statusText,
        data: response.data.data
    };
}

const postData = async(data)=>{
    let url = `http://localhost:2000/submitForm`;
    let response;
    response = await axios.post(url, data);
    return {
        message: response.data.status,
        data: response.data.data
    };
}

module.exports = {
    postData,
    getHomePageData
}