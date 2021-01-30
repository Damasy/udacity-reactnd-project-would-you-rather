const formateUsersList = (usersList) => {
    const formatedList = [];
    for (const uId in usersList) {
        if (usersList.hasOwnProperty(uId)) {
            const user = usersList[uId];
            formatedList.push({
                key: user.id,
                text: user.name,
                value: user.id,
                image: { avatar: true, src: '/assets/' + user.id + '.png' },
            });
        }
    }
    return formatedList
};

const getUserImage = (userId) => {
    return '/assets/'+ userId +'.png'
}

const isPhoneWindow = () => {
    return window.innerWidth <= 600;
}

export { formateUsersList, getUserImage, isPhoneWindow };