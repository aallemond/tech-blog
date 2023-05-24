const sequelize = require("../config/connection")
const {User,Blog,Comment} = require("../models")

const users = [
    {
        username: "andrew",
        password: "password"
    },
    {
        username: "zion",
        password: "password"
    },
    {
        username: "brandon",
        password: "password"
    },

]

const blogs = [
    {
        title: "My first blog",
        content: "The New Orleans Pelicans are the greatest basketball team of all time",
        userId: 1
    },
    {
        title: "My second blog",
        content: "Brandon Ingram is a superstar",
        userId: 1
    },
    {
        title: "Zion's first post",
        content: "Number 1 in the West next season",
        userId: 2
    },
    {
        title: "Brandon's first post",
        content: "Playoff bound",
        userId: 3
    },
]

const comments = [
    {
        body: "great post!",
        blogId: 1,
        userId: 1
    },
    {
        body: "i agree!",
        blogId: 3,
        userId: 2
    },
    {
        body: "well said!",
        blogId: 4,
        userId: 1
    },
    {
        body: "Finals Bound!",
        blogId: 2,
        userId: 3
    },

]

const plantSeeds = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        await Comment.bulkCreate(comments);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

plantSeeds()