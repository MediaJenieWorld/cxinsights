"use server";

const { cookiesKey } = require("@/utils/temp_tokenKey");
const { decodingToken } = require("@/utils/token");
const { cookies } = require("next/headers");

const serverCookies  = cookies().get(cookiesKey);

function  serverAuthUser(){
     const serverAuth = cookies().get(cookiesKey);
    if(serverAuth){
        const token = decodingToken(serverAuth?.value);
        return token;
        }
        else{
            return null;
     }
 }
 
 function updatedCookies (){
   return cookies().get(cookiesKey).value;
 }

module.exports = { serverAuth: decodingToken(serverCookies?.value) || undefined,serverAuthUser,updatedCookies};

