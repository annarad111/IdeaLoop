
import { Prisma } from '@prisma/client';
import prisma from '../lib/prisma';
import { PasswordProvider } from "./password";

export const fetcher= (url, data) =>
fetch(window.location.origin + url,{
    method: data ? "POST" : "GET",
    credentials: "include",
    headers:{
        "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
}).then((r) =>{
    console.log(r);
    return r.json();
});



