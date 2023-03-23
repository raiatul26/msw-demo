import { rest } from 'msw'
import { renderHook, waitFor } from '@testing-library/react'
import { createWrapper } from 'tests/utils'
import { server } from 'mocks/server.js'
import { useGetCatsFact } from 'hooks/cats.hooks.js'

describe('query hook', () => {
    test('successful hook', async () => {
        const { result } = renderHook(() => useGetCatsFact({}), {
            wrapper: createWrapper(),
        })
        await waitFor(() => expect(result.current.isSuccess).toBe(true))
        expect(result.current.data).toBeDefined()
    })

    xtest('failure hook', async () => {
        server.use(
            rest.get('*', (req, res, ctx) => {
                return res(ctx.status(500))
            })
        )

        const { result } = renderHook(() => useGetCatsFact({}), {
            wrapper: createWrapper(),
        })
        await waitFor(() => result.current.isError)

        expect(result.current.error).toBeDefined()
    })
})
