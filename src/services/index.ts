export const getOffers = (): any => {
    return fetch("api/json_files/offers.json", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
        },
    }).then((res) => res.json()).then(data => data)
}