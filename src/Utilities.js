import { createContext, useState, useEffect } from "react"

//Expiration time is in hours
function SetCookie(name, value, exp_time) {
    if (exp_time !== undefined) {
        let now = new Date()
        now.setTime(now.getTime() + exp_time * 3600 * 1000)
        document.cookie = name + "=" + value + "; expires=" + now.toUTCString() + "; path=/";
    }
    else {
        document.cookie = name + "=" + value + "; path=/";
    }
}

function DeleteCookie(name) {
    document.cookie = name + "=; expires=" + new Date().toUTCString();
}

function GetCookie(name) {
    let match = document.cookie.match(new RegExp(`${name}=[^;]*`));
    if (match)
        return match[0].slice(name.length + 1);
}

export { SetCookie, GetCookie, DeleteCookie };

function GetAPIUrl(endpoint) {
    return "http://localhost:8080/" + endpoint
}

export { GetAPIUrl }

export const themeContext = createContext(null);

export const cookiesContext = createContext(false);

export function CookiesAcceptedProvider(props) {
    let [accepted, SetIsAccept] = useState(true);

    function Accept() {
        SetIsAccept(true);
        SetCookie("agreedCookies", true, 24 * 30);
    }

    useEffect(() => {
        let cookie = GetCookie("agreedCookies");
        console.log(cookie);
        SetIsAccept(true && cookie);
    }, [])

    return (
        <cookiesContext.Provider value={{ accepted, Accept }}>
            {props.children}
        </cookiesContext.Provider>
    )
}
