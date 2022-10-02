"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = exports.createPaginationOptions = void 0;
function createPaginationOptions(limit, page, count) {
    if (isNaN(page))
        page = 0;
    if (isNaN(limit))
        limit = 10;
    limit = Math.abs(limit);
    page = Math.abs(page);
    return {
        total: count,
        current_page: page,
        total_page: Math.ceil(count / limit),
        limit: limit
    };
}
exports.createPaginationOptions = createPaginationOptions;
function shuffle(array) {
    var currentIndex = array.length, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
exports.shuffle = shuffle;
//# sourceMappingURL=helpers.js.map