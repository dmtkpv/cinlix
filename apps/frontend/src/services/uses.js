import { reactive, watch, inject } from 'vue'
import { useRoute } from 'vue-router'
import { empty } from '~/services/utils.js'

export function useState () {
    return inject('state');
}

export function usePreload () {
    const route = useRoute();
    const data = reactive(route.meta.preload);
    watch(() => route.meta.preload, value => {
        empty(data);
        Object.assign(data, value)
    })
    return data;
}

