import {GraphQLServer} from 'graphql-yoga'

const typeDefs = `
    type Query {
        me: User!
        post: Post!
        greeting(name: String,position:String): String!
        add(a: Float!, b: Float!): Float!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    } 

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
    }
`

const resolvers = {
    Query: {
        add(parent, args, ctx, info){
            return args.a+args.b
        },
        greeting(parent, args, ctx, info){
            if(args.name && args.position){
                return `Hello ${args.name}, you are my favorite ${args.position}!` 
            }else {
             return 'Hello!'
            }
        },
        me(){
            return {
                id:123098,
                name:'mike',
                email:'mike@test.com'
            }
        },
        post(){
            return{
                id:1512123,
                title: 'GraphQL is Cool!',
                body: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum, nulla id finibus varius, mi magna maximus magna, vitae viverra ipsum ipsum ac odio. Ut iaculis dolor sit amet metus volutpat, a dignissim diam accumsan. Phasellus at felis non risus maximus interdum in non massa. Mauris non nunc eleifend, congue ligula id, ultricies diam. Pellentesque congue lorem aliquet nisl sollicitudin elementum. In ultricies consectetur viverra. Morbi suscipit metus vel diam vehicula iaculis. Maecenas lacinia dolor nulla, non pretium enim dignissim ut.
                        Quisque vulputate mauris mauris, at malesuada metus rutrum dignissim. Quisque tristique felis et leo rutrum, vel rhoncus felis dictum. Nullam semper semper odio et luctus. Vestibulum dapibus mi lacus. Pellentesque scelerisque quis nisi a consequat. Vivamus purus magna, interdum in efficitur sit amet, hendrerit non ante. Pellentesque dignissim fermentum ultrices. Proin egestas ante eget sapien placerat, vitae dignissim dolor dictum. Aenean finibus risus eu ultrices scelerisque.
                        Duis vel arcu sit amet risus scelerisque porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris vel sollicitudin augue, ac condimentum felis. Nullam sed volutpat lacus, id ultricies libero. Sed pellentesque lacus neque, varius congue justo finibus a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum massa id efficitur viverra. Maecenas in nisl vitae ex consequat malesuada non ac ex. Donec iaculis urna in leo tincidunt ultrices. In id bibendum felis, eu commodo orci. Integer sed sagittis ligula. Curabitur et bibendum erat. Donec commodo laoreet elit. Ut volutpat facilisis pulvinar. Duis iaculis tortor sed nisl consectetur venenatis.
                        Etiam ornare fringilla libero sed iaculis. Suspendisse eget ligula ut turpis cursus scelerisque. Nulla ornare odio ornare justo fringilla, blandit dictum erat tempor. Integer tempor pharetra arcu, quis condimentum nisi. Quisque efficitur, libero at iaculis commodo, lorem arcu venenatis tellus, eu vestibulum urna tortor at odio. In ut egestas lectus. Maecenas purus risus, pellentesque nec suscipit non, euismod sit amet ante. Nunc erat ante, placerat at est eu, tempus pharetra libero. Vestibulum malesuada turpis eget lorem dapibus placerat nec id enim. Phasellus viverra risus luctus, molestie quam eget, hendrerit odio. Phasellus erat libero, pretium quis est pellentesque, commodo molestie nisl.
                        Nullam et ligula lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet lectus ac lorem commodo, vitae congue libero vestibulum. Cras dapibus sagittis dolor quis pellentesque. Cras ultrices enim vitae dolor porta, id pharetra augue rutrum. Phasellus interdum tincidunt ligula, id placerat orci vestibulum at. Phasellus auctor nunc sed nisi suscipit malesuada. Mauris sit amet dolor in tellus malesuada accumsan eget vel libero. Mauris tempor varius ipsum vel iaculis. Integer quis neque in nisl scelerisque egestas in at justo. Aenean commodo leo vel rutrum dignissim.`,
                published: true
            }
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(()=>{
    console.log('The server is up!')
})