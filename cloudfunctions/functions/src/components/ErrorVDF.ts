export class ErrorVDF extends Error{
    public internalMessage:string
    public userMessage:string
    public responseCode:number
    constructor(userMessage,internalMessage,responseCode=0){
        super(userMessage)
        this.internalMessage=internalMessage
        this.userMessage=userMessage
        this.responseCode=responseCode
    }
}