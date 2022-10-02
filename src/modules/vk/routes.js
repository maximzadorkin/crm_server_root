const get = [
    {
        path: '/messages.getConversations',
        callback: require('./routes/getConversations.js'),
    },
];

module.exports = {
    ROUTES: [
        {
            method: 'get',
            handlers: get,
        },
    ],
};
