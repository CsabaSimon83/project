export default function passwordValidation(userName){
    const user = new Map()
    user.set("Zoltan", "secret")
    user.set("Csaba", "secret")
    return user.get(userName)
}