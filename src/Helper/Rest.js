export const Rest = async (uri, options) => {
    try {
        const url = 'https://front-test-api.herokuapp.com';
        const response = await fetch(url + uri, options);

        return response;
    } catch (error) {
        console.log(error);
    }
}
