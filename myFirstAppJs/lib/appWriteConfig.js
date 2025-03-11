
// Init your React Native SDK
const client = new Client();


client
    .setEndpoint(config.endPoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platForm) // Your application ID or bundle ID.
;


const account = new Account(client);


export const createUser = () =>{
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
}

