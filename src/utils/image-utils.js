
function getImageURL(name) {
    return new URL(`../assets/icons_assets/${name}`, import.meta.url) .href
}

export {getImageURL}