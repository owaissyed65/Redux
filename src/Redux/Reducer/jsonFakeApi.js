const iniState = {
    data: []
}
const jsonFakeApi = async (state = iniState, action) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await res.json();

}
export default jsonFakeApi;