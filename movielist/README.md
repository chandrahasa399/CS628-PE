This React project implements a Movie List component with filtering functionality. The component displays a list of movies, allowing users to filter them based on their genre. Additionally, clicking on a movie triggers an alert showing the movie's title.

Input: The Movie List component accepts an array of movie objects as input. Each movie object includes the following properties:
Title (string): The name of the movie.
Genre (string): The genre of the movie.
ReleaseYear (number): The year the movie was released.
The movie data is predefined within the component itself as the moviesData array.

Process: The Movie List component processes the input data through the following steps:

Rendering the List of Movies:
Iterates over the moviesData array to display each movie as a distinct list item or card.
Each movie card shows the title, genre, and release year.
Filter Functionality:
Provides a dropdown menu with all unique genres from the movie data.
When a user selects a genre, the list dynamically updates to display only movies matching the selected genre.
If "All Genres" is selected, all movies are displayed.
Handling User Events:
When a user clicks on a movie, an alert pops up displaying the movie title.

Output:The Movie List component renders the following:

A visually organized list of movies showing the title, genre, and release year for each movie. A dropdown menu to filter movies by genre. An alert displaying the movie title when a movie is clicked.