import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), "data", "db.json");

export const read = () => {
    let data = JSON.parse(fs.readFileSync(filePath));
    return data;
}

export const write = (res) => {
    let data = read();

    const filterData = data.find(user => user.email === res.email);

    if (filterData) {
        console.log("User Already Exist");
        return;
    }

    else {
        data.push({
            id: data.length + 1,
            email: res.email,
            password: res.password

        })
    }

    fs.writeFileSync(filePath, JSON.stringify(data));
}