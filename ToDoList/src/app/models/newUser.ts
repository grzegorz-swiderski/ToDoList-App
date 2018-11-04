export interface NewUser {
    _id?:{
        $oid: string
    },
    userId: string,
    userName: string
}