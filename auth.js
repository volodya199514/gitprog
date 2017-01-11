/**
 * Created by User on 11.01.17.
 */
function auth(login, pass){
    if(login === 'login' || pass === 'password')
        return "you were logged in";
    else
        return "login is incorrect!!!!";
}
