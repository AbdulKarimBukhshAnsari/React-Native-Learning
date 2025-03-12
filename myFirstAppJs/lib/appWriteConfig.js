import { Alert } from 'react-native';
import { Client , Account , ID, Avatars, Databases} from 'react-native-appwrite';
import 'react-native-url-polyfill/auto'

export const config = {
    endPoint : 'https://cloud.appwrite.io/v1',
    platForm : 'com.karim.aora',
    projectId : '67ce57c9002bed183f2a',
    dataBaseId : '67ce596d001ddd40eab9',
    userCollectionId : '67ce598300306a1eb1e7',
    videoCollectionId : '67ce59a60026fd092f2d',
    storageId : '67ce65800019f0a350c7'
};


// Init your React Native SDK
const client = new Client();


client
    .setEndpoint(config.endPoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platForm) // Your application ID or bundle ID.
;


const account = new Account(client);

const avatars = new Avatars(client);

const databases = new Databases(client);

export const createUser = async (email , password , username ) =>{
    try{
        console.log('Entering into function ... ')
        const newAccount = await account.create(ID.unique() , email , password  , username);
        console.log('Successfully created the user')
        if(!newAccount) throw Error ;
        
        // to generate the avatar for the user and it will generate the avatar according to the username
        const avatarUrl = avatars.getInitials(username);

        // await signIn(email , password);

        // to create new user in database
        console.log("New Account ID:", newAccount.$id); // Debugging check
        const newUser = await databases.createDocument(
            config.dataBaseId , 
            config.userCollectionId , 
            ID.unique() ,
            {
                accountid : newAccount.$id,
                email,  // equal to the email : email 
                username,
                avatar :avatarUrl,
            }
    

        )
        console.log(config.dataBaseId);
        console.log(config.userCollectionId);

    // returnng that newly created user 
    return newUser;
    } catch (error) {
        Alert.alert('Error' , error.message)

    }
}


export async function signIn(email , password){
    try{
        account.deleteSession('current'); // to delete the session 
        console.log('Session is Deleting ');
        const session = await account.createEmailPasswordSession(email , password);
        console.log('Signing in...')
        return session;
    }
    catch(error) {
        throw new Error(error);
    }


}
