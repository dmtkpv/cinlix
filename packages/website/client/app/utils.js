export async function useFetchData () {
    const { data } = await useFetch(`/api/pages`);
    return data.value;
}

export function useAppState () {
    const state = useState('app', () => ({}));
    return state.value;
}

