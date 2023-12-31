import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://boighor-server-electra51.vercel.app',
  }),
  tagTypes: ['comments'],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
    }),
    getBookDetail: builder.query({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      query: (id) => `/book/${id}`,
      providesTags: ['comments'],
    }),
    postAddBook: builder.mutation({
      query: (data) => ({
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        url: '/addbooks',
        method: 'POST',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        body: data,
      }),
    }),

    getRecentBooks: builder.query({
      query: () => '/getbooks',
    }),

    postWishList: builder.mutation({
      query: (data) => ({
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        url: '/addwishlist',
        method: 'POST',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        body: data,
      }),
    }),

    getWishlist: builder.query({
      query: () => '/wishlists',
    }),

    deleteBook: builder.mutation({
      query: ({ id, data }) => ({
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        url: `/book/${id}`,
        method: 'Delete',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        body: data,
      }),
    }),

    postComment: builder.mutation({
      query: ({ id, data }) => ({
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        url: `/comment/${id}`,
        method: 'POST',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        body: data,
      }),
      invalidatesTags: ['comments'],
    }),
    getBookReview: builder.query({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      query: (id) => `/comment/${id}`,
      providesTags: ['comments'],
    }),

    register: builder.mutation({
      query: (data) => ({
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        url: `/user`,
        method: 'POST',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        body: data,
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookDetailQuery,
  usePostCommentMutation,
  useGetBookReviewQuery,
  useRegisterMutation,
  usePostAddBookMutation,
  useDeleteBookMutation,
  usePostWishListMutation,
  useGetWishlistQuery,
  useGetRecentBooksQuery,
} = api;
