
/**
 * React action creator
 * @param site
 * @returns {{}}
 */
export function selectSite(site) {
    return{
        type: 'SWITCHSITE',
        site: site
    };
}

/**
 * React Action creator
 * @param site
 */
export function siteTapped(site) {
    return{
        type: 'OPEN'
    };
}

export function siteClosed() {
    return{
        type: 'CLOSE'
    };
}

