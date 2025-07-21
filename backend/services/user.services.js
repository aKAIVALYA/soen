import  usermodel from '../models/user.model.js';



export const createUser = async  ({
email, password 
}) => {
    
    if (!email || !password) {
        throw new Error('Email and password are required');
    }

    const hashedPassword = await usermodel.hashPassword(password);

    const user = await usermodel.create({
        email,
        password: hashedPassword
    });

    return user;
}

export const getAllUsers = async ({ userId }) => {
    try {
        const users = await usermodel.find({
            _id: { $ne: userId } 

        });
        return users;
    } catch (error) {
        throw new Error('Error fetching users: ' + error.message);
    }
}