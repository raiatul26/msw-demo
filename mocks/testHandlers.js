// src/mocks/handlers.js
// For more information on how to use mocks, see: https://mswjs.io/docs/basics
import { rest } from 'msw'
import { mockData } from './constants'

export const handlers = [

    //  *************************** Mocking a get request ***************************
    rest.get(`https://meowfacts.herokuapp.com`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockData.GET_STUDENT_PROFILE))
    }),
]
