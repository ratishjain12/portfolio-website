import { createClient } from '@sanity/client'

const sanityClient = createClient({
    projectId: '2pati86g',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2022-01-12'

    // use current date (YYYY-MM-DD) to target the latest API version
})

export default sanityClient;