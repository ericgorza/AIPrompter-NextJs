import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email:{
        type:String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],
    },
    image: {
        type: String,
    }
})

const User = models.User || model("User", UserSchema); //checa se o User ja existe, se nao, model('user', UserSchena)

export default User;


//O objeto models vem da livraria do Mongoose e guarda todos os modelos que estao registrados.
// Se o modelo chamado User ja existir no models object, it assigns that existing model to the User variable
// Isso nos previne de ter que redefenir o modelo e nos permite utilizar o modelo existente.

