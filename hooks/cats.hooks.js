import { useQuery } from 'react-query'


const getFacts = () => {
    return fetch("https://meowfacts.herokuapp.com/?count=3").then((response)=>{
        return response.json();
    }).then(data => data)
}


export const useGetCatsFact = () => {
    return useQuery(
        ['cats', 'random'], getFacts,
    )
}