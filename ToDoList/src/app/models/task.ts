export interface Task {
    _id?:{
        $oid: string
    },
    userName: string,
    userId: string,
    text: string,
    status: string,
    sort: number,
    create: Date,
    timer: number,
    intervalId: number
}