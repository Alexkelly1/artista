1. Instead of calling 'listAll' to get all photos from bucket, instead
save an image reference to firestore e.g.
user: {
    posts: [
        id: 1
        image: https://firebase.image.0.Qe234n493j3n4n4
    ]
}

2. Fix Authentication - SignOut | Handling Navigator Errors

3. fetchFirestoreDoc needs to be reusable - currently only gets username