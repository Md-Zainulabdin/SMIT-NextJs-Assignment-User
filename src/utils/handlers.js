import fs from 'fs';
import path from 'path';
import { compare, hash } from 'bcryptjs'

const filePath = path.join(process.cwd(), "data", "db.json");

export const read = () => {
    let data = JSON.parse(fs.readFileSync(filePath));
    return data;
}

export const checkEmail = (email) => {
    const data = read();
    return data.find(user => user.email.toLowerCase() === email.toLowerCase());
}

export const write = async (res) => {

    const filterData = checkEmail(res.email)

    if (filterData) {
        // throw new Error("User already exist..");
       return  console.log("User already exist");
    }

    const data = read();
    const hashedPassword = await hash(res.password, 12);


    data.push({
        id: data.length + 1,
        email: res.email,
        password: hashedPassword,

    })

    fs.writeFileSync(filePath, JSON.stringify(data));
}

export const verifyPassword = async (hashedPassword, password) => {
    const isValid = await compare(password, hashedPassword);
    return isValid;
}