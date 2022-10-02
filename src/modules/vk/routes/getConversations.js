const { createRequest } = require('../utils/factory.js');

const getConversations = async (
    req,
    res,
) => {
    const answer = await createRequest(
        'messages.getConversations',
        new URLSearchParams(req.query),
        null,
    );
    res.send(answer);
};

module.exports = getConversations;
