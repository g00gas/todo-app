import {QueryClient} from "@tanstack/react-query";

const client = new QueryClient({
    defaultOptions:{
        queries:{
            refetchOnWindowFocus:"always",
            retry:1
        }
    }
})

export default client