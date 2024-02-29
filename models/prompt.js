import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creator:{
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    prompt:{
        type: String,
        required: [true, 'Prompt is required'],
    },
    tag:{
        type: String,
        required: [true, 'Tag is required'],
    }
})

// Vamos checar se o model ja existe, se nao existir vai criar um model chamado prompt baseado no promptSchema

const Prompt = models.Prompt || model('Prompt', PromptSchema)

export default Prompt;