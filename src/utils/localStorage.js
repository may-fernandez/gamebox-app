// WISHLIST
export const getWishlist = () => JSON.parse(localStorage.getItem("wishlist")) || [];

export const addToWishlist = (game) => {
    const wishlist = getWishlist();
    const existe = wishlist.some((g) => g.id === game.id);

    if(!existe){
        wishlist.push(game);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
}

export const isInWishlist = (gameId) => {
    const wishlist = getWishlist();
    return wishlist.includes(gameId);
};


export const removeFromWishlist = (gameId) => {
    const wishlist = getWishlist().filter((g) => g.id !== gameId);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

// RATINGS

export const getRatings = () => JSON.parse(localStorage.getItem("ratings")) || {};

export const setRating = (gameId, rating) => {
    const ratings = getRatings();
    ratings[gameId] = rating;
    localStorage.setItem("ratings", JSON.stringify(ratings));
}

export const getRatingForGame = (gameId) => getRatings()[gameId] || 0;