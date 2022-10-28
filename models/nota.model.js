import mongoose from "mongoose"

const notaSchema = new mongoose.Schema({
    Todoslosdias: {
        type: Boolean,
        required: true
    },
    FechaInicial: {
        type: Date,
        required: true
    },
    FechaFinal: {
        type: Date,
        required: true
    },
    Notificaciones: {
        type: Boolean,
        required: true
    } 
},
    {
        timestamps: true,
        versionKey: false
    }
)

const Nota = mongoose.model('Nota', notaSchema)

export default Nota