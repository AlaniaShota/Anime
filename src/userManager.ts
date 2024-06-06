import { createUserManager } from 'redux-oidc';

const userManagerConfig = {
    client_id: 'dd031b32d2f56c990b1425efe6c42ad847e7fe3ab46bf1299f05ecd856bdb7dd',
    redirect_uri: 'http://localhost:5173/callback', // Замените на URL вашего приложения
    response_type: 'id_token token',
    scope: 'openid profile email',
    authority: 'https://kitsu.io/api/oauth', // Замените на URL вашего сервера аутентификации
    automaticSilentRenew: true,
    filterProtocolClaims: true,
    loadUserInfo: true
};

const userManager = createUserManager(userManagerConfig);

export default userManager;
