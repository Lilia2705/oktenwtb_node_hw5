module.exports = (user_id, userIdFromToken) => {
    console.log(user_id);
    console.log(userIdFromToken);
    if (+user_id !== userIdFromToken) {
        throw new Error('It is not your user');
    }
};