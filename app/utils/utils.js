var bcrypt = require('bcryptjs');

export const encryptpass = (password) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    return hash;
}

export const checkPass = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}



// export const getCurrentUrl = (path) => {
//     const baseUrl = process.env.NEXT_PUBLIC_APP_URL
//     const normalizedPath = path && !path.startsWith('/') ? `/${path}` : path || ''
//     return `${baseUrl}${normalizedPath}`
// }


