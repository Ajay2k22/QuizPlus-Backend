import mongoose from "mongoose"

export const connectDb = async () => {
    try {
        const url = "mongodb+srv://ajay:kumar@cluster0.n3xdw7x.mongodb.net/quizplus?retryWrites=true&w=majority";
        let res = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Database connected sucessfully ...")
    }
    catch (e) {
        console.log(e)
    }
}