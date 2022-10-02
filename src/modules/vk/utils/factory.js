const { SECRET_KEY } = require('./secret.js');
const fetch = require('node-fetch-commonjs');

const initFactory = () => {
    // TODO: Вынести в конфигурацию
    const APIVersion = '5.194';
    const APIURI = 'https://api.vk.com/';
    const BASE_PATH = 'method';

    const ROUTE = new URL(APIURI);
    ROUTE.searchParams.set('v', APIVersion)
    ROUTE.searchParams.set('access_token', SECRET_KEY)

    return async (
        route,
        searchParams,
        params,
    ) => {
        ROUTE.pathname = `/${BASE_PATH}/${route}`;

        searchParams?.forEach?.((value, key) => {
            if (value) { ROUTE.searchParams.set(key, value); }
        });

        try{
            const response = await fetch(ROUTE.href, params ?? {});
            if (!response.ok) {
                return new Error('VK request completed with error');
            }
            const json = await response.json();
            return json ?? null;
        } catch (error) {
            return error;
        }
    };
};

module.exports = {
    createRequest: initFactory(),
};
