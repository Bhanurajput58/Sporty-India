const{username,password}=process.env
export const connectStr="mongodb+srv://"+username+":"+password+"@cluster0.exkci.mongodb.net/sportyDB?retryWrites=true&w=majority&appName=Cluster0"