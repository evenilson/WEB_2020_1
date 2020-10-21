import firebase from 'firebase/app'

import 'firebase/firestore'

import 'firebase/auth'

import firebase_key from '../keys/firebase_keys'

export default class Firebase{
    constructor(){
        firebase.initializeApp(firebase_key)
    }

    getFirestore(){
        return firebase.firestore()
    }
}
