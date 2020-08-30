const URL = '/api/sessions';
let sessions = [];
export const getSessions = () =>
    fetch(URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error('No response from server');
            }
            console.log(response);
            return response.json();
        })
        .then((result) => {
            console.log(result);
            console.table(result.data);
            sessions = result.data;
            return sessions;
        });
export const getSession = (sessionId) => {
    return sessions.find((session) => {
        return session.id === sessionId;
    });
};
