const initState = {
    posts : [{
        "userId": 10,
        "id": 93,
        "title": "beatae soluta recusandae",
        "body": "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam\nvoluptatem quis enim recusandae ut sed sunt\nnostrum est odit totam\nsit error sed sunt eveniet provident qui nulla"
      },
      {
        "userId": 10,
        "id": 94,
        "title": "qui qui voluptates illo iste minima",
        "body": "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis"
      },
      {
        "userId": 10,
        "id": 95,
        "title": "id minus libero illum nam ad officiis",
        "body": "earum voluptatem facere provident blanditiis velit laboriosam\npariatur accusamus odio saepe\ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt"
      },
      {
        "userId": 10,
        "id": 96,
        "title": "quaerat velit veniam amet cupiditate aut numquam ut sequi",
        "body": "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
      },
      {
        "userId": 10,
        "id": 97,
        "title": "quas fugiat ut perspiciatis vero provident",
        "body": "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
      },
      {
        "userId": 10,
        "id": 98,
        "title": "laboriosam dolor voluptates",
        "body": "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores"
      },
      {
        "userId": 10,
        "id": 99,
        "title": "temporibus sit alias delectus eligendi possimus magni",
        "body": "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia"
      }]
}
const rootReducer = (state=initState, action) =>{
    console.log(action)
    if(action.type === 'DELETE_POST'){
        const posts = state.posts.filter(post => {
            return post.id !== action.id
        })
        return{
            ...state,
            posts : posts
        }
            
        
    }
   
    return state;
}

export default rootReducer;