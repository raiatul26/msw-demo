import { useGetCatsFact } from 'hooks/cats.hooks.js'

export default function Home() {

	const { data } = useGetCatsFact();
	
	console.log(data?.data)

  	return (
		<div>

			{
				data?.data.map(item => {
					return <div>{item}</div>
				})
			}
		</div>
 	)
}
