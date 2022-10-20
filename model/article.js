const { Schema, model, Types } = require('mongoose')

const articleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    paragraf: {
        type: String,
        required: true
    },
    categoryId:{
        type: Types.ObjectId,
        required: true,
    }
})

module.exports = model('article', articleSchema)