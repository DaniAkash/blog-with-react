

const apiCall = (route, method='GET', body={}) => {
    return new Promise((resolve, reject) => {

        const headers = new Headers({
            'Content-Type': 'application/json',
        });

        const requestDetails = {
            method,
            mode: 'cors',
            headers,
        };

        if(method !== 'GET') {
            requestDetails.body = JSON.stringify(body);
        }

        const serverUrl = "http://127.0.0.1:10010";

        const handleErrors = response => {
            if(response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        };

        fetch(`${serverUrl}/${route}`, requestDetails)
            .then(handleErrors)
            .then(data => resolve(data))
            .catch(err => reject(err));

        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        // })
        // .catch(err => {
        //     console.log(err);
        // })

    });
};

export default apiCall;