const getSuggestions = ({ list, limit, searchString }) =>
    list
        .filter(({ value }) => value.indexOf(searchString.toLowerCase()) > -1)
        .slice(0, limit);

export { getSuggestions };