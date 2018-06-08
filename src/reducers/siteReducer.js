import sites from '../sites/globalSites.json';

/**
 * App state reducer function, might be better broken out to separate module
 * @param state
 * @param action
 * @returns {*}
 */
function siteReducer(
  state = { sites, site: sites[0], details: false },
  action
) {
  switch (action.type) {
    case 'OPEN':
      return { details: true };
    case 'SWITCHSITE':
      return { site: action.site, details: false };
    case 'CLOSE':
      return { details: false };
    default:
      return state;
  }
}

export default siteReducer;
