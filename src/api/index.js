import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem('profile')).token
        }`
    }

    return req
})

// export const fetchPosts = (page, amount) =>
//     API.get(`/posts/page/${page}/${amount}`)

export const fetchPosts = () => API.get('/posts')
export const fetchPost = (id) => API.get(`/posts/${id}`)
export const fetchPostsByTag = (tag) => API.get(`/posts/tags/${tag}`)
export const fetchPostsByUser = (username) => API.get(`/user/${username}/posts`)

export const fetchProfile = (username) => API.get(`/profiles/${username}`)
export const editProfile = (username, formData) => API.post(`/profiles/${username}/edit`, formData)

export const createPost = (newPost) => API.post('/posts', newPost)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)
export const deletePost = (id) => API.delete(`/posts/${id}`)

export const fetchComments = (id) => API.get(`/posts/${id}/comments`)
export const createComment = (id, newComment) =>
    API.post(`/posts/${id}`, newComment)

export const deleteComment = (id, commentId) =>
    API.patch(`/posts/${id}/comments/${commentId}`)

export const signIn = (formData) => API.post('/users/signin', formData)
export const signUp = (formData) => API.post('/users/signup', formData)
