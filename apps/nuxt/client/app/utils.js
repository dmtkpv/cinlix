export async function useData (key) {
    const { data } = await useFetch(`/api/${key}`);
    return data.value;
}
