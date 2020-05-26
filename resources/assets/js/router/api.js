//export const BASE_URL = "https://docs.envisagemobile.com";
export const BASE_URL = "http://127.0.0.1:10000";
//http://192.168.10.217:10000/login; 0716 649 562
// Comments
export const RTC_BASE_URL = "localhost";
export const RTC_HIS_PORT = "8090";
// API url:
export const BASE_API_URL = BASE_URL + '/api';
// Authentication:
export const LOGIN_API = `${BASE_API_URL }/oauth/login`;
export const CHANGE_PASSWORD = `${BASE_API_URL }/oauth/change/password`;
export const VALIDATE_TOKEN_API = `${BASE_API_URL }/oauth/validate/token`;
export const USER_ACCEPT_INVITATION_URL = `${BASE_API_URL }/oauth/invitation`;
export const USER_INVITED_LOAD_URL = `${BASE_API_URL }/oauth/invitation/users`;
export const PRACTICE_ROLE_URL = `${BASE_API_URL }/practices/roles`

