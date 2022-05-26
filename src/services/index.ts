export const getOffers = async (): Promise<any> => {
    const results = await fetch("api/json_files/offers.json")
    const data = results.json()
    return data
}