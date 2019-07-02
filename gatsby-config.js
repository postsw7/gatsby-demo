module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'RickAndMorty',
        // This is field under which it's accessible
        fieldName: 'rickAndMorty',
        // Url to query from
        url: 'https://rickandmortyapi.com/graphql',
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: 'rickandmorty',
      },
    }
  ],
};
