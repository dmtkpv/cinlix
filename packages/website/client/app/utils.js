export async function useFetchData (url) {
    const { data } = await useFetch(url);
    return data.value;
}

export function useAppState () {
    const state = useState('app', () => ({}));
    return state.value;
}

