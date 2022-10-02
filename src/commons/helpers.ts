export function createPaginationOptions(limit: number, page: number, count: number): any {
    if(isNaN(page)) page = 0;
    if(isNaN(limit)) limit = 10;

    limit = Math.abs(limit);
    page = Math.abs(page);

    return {
        total: count,
        current_page: page,
        total_page: Math.ceil(count / limit),
        limit: limit
    }
}


export function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}