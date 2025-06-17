// ------------- signin -------------
export type signin = {
    name: string;
    psw: string;
}

// response
// res = {
//     code: number; // 200 for success, 300 if token is invalid, 400 for deny, 500 for error
//     data?:{ // could be no response user data for cases like 300 or 400
//         id: number;
//         name: string;
//         avartat_url: string;
//         token: string; // JWT token
//     }
// }

// -------------- overview --------------
export type overview = {
    token: string; // JWT token
}
// response
// res = {
//     code: number; // 200 for success, 300 if token is invalid, 400 for deny, 500 for error
//     data?: {
//         file: string; // file path
//         post_count: number; // post count
//         image_count: number; // image count
//         diary_count: number; // diary count
//     }
// }

// --------------visit_count_by_date--------------
export type visit_count = {
    token: string; // JWT token
    date_length: number; // length of date array
}
// response
// res = {
//     code: number; // 200 for success, 300 if token is invalid, 400 for deny, 500 for error
//     data?: {
//         date: string[]; // date array
//         count: number[]; // visit count array
//     }

// ----------------visit_survey---------------
export type visit_survey = {
    token: string; // JWT token
    date_length: number; // length of date array
}

// res = {
//     code : number; // 200 for success, 300 if token is invalid, 400 for deny, 500 for error
//     data?: {
//         device: {
//             key: 'mobile' | 'desktop' | 'tablet'; // device type
//             value: number; // visit count
//         }[];
//         webpage: {
//             key: 'article' | 'image' | 'diary' | 'shareable' ;
//             value: number; // visit count
//         }[];
//     }
// }

// --------------new_comments--------------
export type new_comments = {
    token: string; // JWT token
    // count of comments to fetch perpage
    perpage: number;
    current_page: number; // current page number
    total_count?: number; // only needed for the first request to get total count of comments
}

// res = {
//     code: number; // 200 for success, 300 if token is invalid, 400 for deny, 500 for error
//     data?: {
//         comments: {
//             total_count?: number; // total count of comments, only needed for the first request
//             comment_list:{
//                 id: number; // comment id
//                 post?: {
//                     id: number; // post id
//                     title: string; // post title
//                 };
//                 user:{
//                     id: string|number; // user id or guest id
//                     name: string; // user name
//                     avatar_url: string; // user avatar url
//                 };
//                 content: string; // comment content
//                 created_at: string; // comment created at date
//                 report_count: number; // report count
//             }
//         }[];
//     }
// }

// --------------new_messages--------------
export type new_messages = {
    token: string; // JWT token
    // count of comments to fetch perpage
    perpage: number;
    current_page: number; // current page number
    total_count?: number; // only needed for the first request to get total count of comments
}

// res = {
//     code: number; // 200 for success, 300 if token is invalid, 400 for deny, 500 for error
//     data?: {
//         messages: {
//             total_count?: number; // total count of comments, only needed for the first request
//             message_list:{
//                 id: number; // comment id
//                 user:{
//                     id: string|number; // user id or guest id
//                     name: string; // user name
//                 };
//                 content: string; // comment content
//                 created_at: string; // comment created at date
//             }
//         }[];
//     }
// }

// -------------- return post_list--------------
export type post_list = {
    token: string; // JWT token
    query?: string; // search query for posts
    perpage: number; // count of posts to fetch perpage
    current_page: number; // current page number
    status?: 'draft' | 'published'; // state of posts to fetch
    category_id?: number; // category id to filter posts
    total_count?: number; // only needed for the first request to get total count of posts
}

// res = {
//     code: number; // 200 for success, 300 if token is invalid, 400 for deny, 500 for error
//     data?: {
//         posts: {
//             total_count?: number; // total count of posts, only needed for the first request
//             post_list: {
//                 id: number; // post id
//                 title: string; // post title
//                 summary: string; // post summary
//                 front_image_url: string; // post cover image url
//                 created_at: string; // post created at date
//                 status: 'draft' | 'published'; // post status
//                 category_id?: number; // category id of the post
//                 tags?: string[]; // tags of the post
//                 views: number; // post views count
//                 comments: number; // post comments count
//                 likes: number; // post likes count
//             }[];
//         }
//     }
// }

// -------------- publish / unpublish post --------------
export type change_post_status = {
    token: string; // JWT token
    post_id: number; // post id
}
// res = {
//     code: number; // 200 for success, 300 if token is invalid, 400 for deny, 500 for error

// }
// -------------- delete post --------------
export type delete_post = {
    token: string; // JWT token
    post_id: number; 
}
// res = {
//     code: number; // 200 for success, 300 if token is invalid, 400 for deny, 500 for error
// }


