export const authConfig = {
    signInRedirectURL: "http://10.168.250.119:5173/",
    signOutRedirectURL: "http://10.168.250.119:5173/",
    clientID: import.meta.env.VITE_AUTH_CLIENT_ID,
    clientSecret: import.meta.env.VITE_AUTH_CLIENT_SECRET,
    baseUrl: import.meta.env.VITE_BASE_URL,
    scope: ["openid", "profile", "email"],
    // Additional WSO2 IS specific configurations
    // resourceServerURL: import.meta.env.VITE_RESOURCE_SERVER_URL,
    // stsConfig: {
    //     enabled: true,
    //     scope: ["internal_login"]
    // },
    // stsTokenEndpoint: import.meta.env.VITE_STS_URL
}