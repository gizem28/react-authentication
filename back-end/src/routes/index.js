
import { logInRoute } from './logInRoute';
import { signUpRoute } from './signUpRoute';
import { testRoute } from './testRoute';
import { updateUserInfoRoute } from './updateUserInfoRoute';
// import { testEmailRoute} from './testEmailRoute'
import { forgotPasswordRoute } from './forgotPasswordRoute';
import { resetPasswordRoute } from './resetPasswordRoute';
import { getGoogleOauthUrlRoute } from './getGoogleOauthUrlRoute';
import { googleOauthCallbackRoute } from './googleOauthCallbackRoute';


export const routes = [
    logInRoute,
    signUpRoute,
    testRoute,
    updateUserInfoRoute,
    // testEmailRoute,
    forgotPasswordRoute,
    resetPasswordRoute,
    getGoogleOauthUrlRoute,
    googleOauthCallbackRoute,


];