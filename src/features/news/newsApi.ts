import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
    imageUrl?: string; // Enhanced field
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => 'posts',
            transformResponse: (response: Post[]) => {
                // Add a random image to each post to simulate real news
                return response.slice(0, 20).map(post => ({
                    ...post,
                    imageUrl: `https://picsum.photos/seed/${post.id}/600/400`
                }));
            }
        }),
        getUsers: builder.query<User[], void>({
            query: () => 'users',
        }),
        getPost: builder.query<Post, string>({
            query: (id) => `posts/${id}`,
            transformResponse: (response: Post) => ({
                ...response,
                imageUrl: `https://picsum.photos/seed/${response.id}/1200/800`
            }),
        }),
        getUser: builder.query<User, number>({
            query: (id) => `users/${id}`,
        }),
    }),
});

export const { useGetPostsQuery, useGetUsersQuery, useGetPostQuery, useGetUserQuery } = newsApi;
