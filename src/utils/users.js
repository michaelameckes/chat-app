const users = [];

// ADD USER
const addUser = ({ id, username, room }) => {
    // CLEAN THE DATA
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // VALIDATE DATA
    if (!username || !room) {
        return {
            error: 'Username and room are required'
        }
    }

    // CHECK FOR EXISTING USER
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // VALIDATE USERNAME
    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // STORE USER
    const user = { id, username, room };
    users.push(user);
    return { user }
}

// DELETE USER
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

// FIND USER
const getUser = (id) => {
    return users.find((user) => user.id === id)
}

// FIND ALL USERS IN ROOM
const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase();
    return users.filter((user) => user.room === room) 
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}
