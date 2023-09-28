
const NAME = "malvestida";
const DOMAIN = `https://${NAME}.com`;
const SITE = `${DOMAIN}/wp-json`;
const API_WP = `${SITE}/wp/v2`;
const PER_PAGE =6; ///PAGINACION DE 6 EN 6, Y INFINITA
const POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`;
const POST = `${API_WP}/posts`;
const SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`;
// PAGES = `${API_WP}/pages`;
const CATEGORIES = `${API_WP}/categories`;

let page =1;

export default {
    NAME,
    DOMAIN,
    API_WP,
    PER_PAGE,
    SITE,
    API_WP,
    POSTS,
    POST,
    SEARCH,
    CATEGORIES,
    page
}