import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params, url, route, depends, parent }) => {
    await parent();
    

    return {
        category: params.slug
    }

    // if (! databases.include(params.slug)) {
    //     error(404, "Not found")
    // }


};