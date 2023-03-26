import { rest } from 'msw'
import { renderHook, waitFor } from '@testing-library/react'
import { createWrapper } from 'tests/utils'
import { server } from 'mocks/server.js'
import { useGetCatsFact } from 'hooks/cats.hooks.js'

describe('query hook', () => {
    test('successful hook', async () => {
        const { result } = renderHook(() => useGetCatsFact(), {
            wrapper: createWrapper(),
        })
        await waitFor(() => expect(result.current.isSuccess).toBe(true))
        console.log(result.current.data)
        expect(result.current.data).toBeDefined()
    })

    test('failure hook', async () => {
        server.use(
            rest.get('*', (req, res, ctx) => {
                return res(ctx.status(500), ctx.json({}))
            })
        )

        const { result } = renderHook(() => useGetCatsFact(), {
            wrapper: createWrapper(),
        })
        await waitFor(() => result.current.isError)

        expect(result.current.error).toBeDefined()
    })
})
