function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}

console.log(truncate('The shot hit by me during football match in my school is memorable', 6));
