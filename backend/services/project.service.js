import mongoose from 'mongoose';
import projectModel from '../models/project.model.js';


export const createProject = async ({
    name, userId
}) => {
    if (!name) {
        throw new Error('Project name is required');
    }
    if (!userId ) {
        throw new Error('At least one user ID is required');
    }

   let project;
    try {
        project = await projectModel.create({
            name,
            users: [userId]
        });
    } catch (error) {
        if (error.code === 11000) {
            throw new Error('Project name must be unique');
        }
        throw error;
    }
    return project;
}


export const getAllProject = async ({userId}) => {
    if (!userId) {
        throw new Error('User ID is required');
    }

    const allUserProjects = await projectModel.find({
        users: [userId]
    })

    return allUserProjects;

    
}

export const addUserToProject = async ({ projectId, users, userId }) => {
    
    if (!projectId) {
        throw new Error('Project ID is required');
    }
    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        throw new Error('Invalid Project ID');
    }
    if (!users) {
        throw new Error('At least one user ID is required');
    }
    if (!Array.isArray(users) || users.some(userId => !mongoose.Types.ObjectId.isValid(userId))) {
        throw new Error('Invalid user ID(s)');

    }

    if (!userId) {
        throw new Error('User ID is required');
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new Error("Invalid userId")
    }

    const project = await projectModel.findById({
        _id: projectId,
        users: userId
    })

    console.log(project)

    if (!project) {
        throw new Error('Project not found or user is not part of the project');
    }

    const updatedProject = await projectModel.findByIdAndUpdate ({
        _id: projectId    
    }, {
        $addToSet: { users: { $each: users } }
    }, {
        new: true
    })

    return updatedProject;



}

export const getProjectById = async ({ projectId }) => {
    if (!projectId) {
        throw new Error('Project ID is required');
    }
    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        throw new Error('Invalid Project ID');
    }
    const project = await projectModel.findOne({
        _id: projectId
    }).populate('users');

    return project;
}
