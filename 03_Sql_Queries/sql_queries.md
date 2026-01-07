# Sql Queries

### BASIC QUERIES

#### 1.Write a SQL query to find the name and year of the movies. Return movie title, movie release year.
```sql
SELECT mov_title, mov_year
FROM movie;
```
#### Result
| mov_title | mov_year |
| :--- | :--- |
| Vertigo | 1958 |
| The Innocents | 1961 |
| Lawrence of Arabia | 1962 |
| The Deer Hunter | 1978 |
| Amadeus | 1984 |
| Blade Runner | 1982 |
| Eyes Wide Shut | 1999 |
| The Usual Suspects | 1995 |
| Chinatown | 1974 |
| Boogie Nights | 1997 |
| Annie Hall | 1977 |
| Princess Mononoke | 1997 |
| The Shawshank Redemption | 1994 |
| American Beauty | 1999 |
| Titanic | 1997 |
| Good Will Hunting | 1997 |
| Deliverance | 1972 |
| Trainspotting | 1996 |
| The Prestige | 2006 |
| Donnie Darko | 2001 |
| Slumdog Millionaire | 2008 |
| Aliens | 1986 |
| Beyond the Sea | 2004 |
| Avatar | 2009 |
| Seven Samurai | 1954 |
| Spirited Away | 2001 |
| Back to the Future | 1985 |
| Braveheart | 1995 | 




#### 2. Write a SQL query to find when the movie 'American Beauty' released. Return movie release year.
```sql
SELECT mov_year FROM movie WHERE mov_title = 'American Beauty';

```
#### Result
| mov_year |
| :--- |
| 1999 |


#### 3. Write a SQL query to find the movie that was released in 1999. Return movie title.
```sql
SELECT mov_title FROM movie WHERE mov_year = 1999;

```
#### Result
| mov_title |
| :--- |
| Eyes Wide Shut |
| American Beauty |

#### 4. Write a SQL query to find those movies, which were released before 1998. Return movie title..
```sql
SELECT mov_title FROM movie WHERE mov_year < 1998;

```
#### Result
| mov_title |
| :--- |
| Vertigo |
| The Innocents |
| Lawrence of Arabia |
| The Deer Hunter |
| Amadeus |
| Blade Runner |
| The Usual Suspects |
| Chinatown |
| Boogie Nights |
| Annie Hall |
| Princess Mononoke |
| The Shawshank Redemption |
| Titanic |
| Good Will Hunting |
| Deliverance |
| Trainspotting |
| Aliens |
| Seven Samurai |
| Back to the Future |
| Braveheart |

#### 5. Write a SQL query to find the name of all reviewers and movies together in a single list.
```sql
SELECT rev_name AS Names FROM movie_reviewer
UNION
SELECT mov_title FROM movie;

```
#### Result
| Names |
| :--- |
| Alec Shaw |
| Aliens |
| Amadeus |
| American Beauty |
| Annie Hall |
| Avatar |
| Back to the Future |
| Beyond the Sea |
| Blade Runner |
| Boogie Nights |
| Brandt Sponseller |
| Braveheart |
| Chinatown |
| Deliverance |
| Donnie Darko |
| Eyes Wide Shut |
| Flagrant Baronessa |
| Good Will Hunting |
| Guest Reviewer |
| Hannah Steele |
| Jack Malvern |
| Josh Cates |
| Krug Stillo |
| Lawrence of Arabia |
| Mike Salvati |
| Neal Wruck |
| Paul Monks |
| Princess Mononoke |
| Richard Adams |
| Righty Sock |
| Sasha Goldshtein |
| Scott LeBrun |
| Seven Samurai |
| Simon Wright |
| Slumdog Millionaire |
| Spirited Away |
| The Deer Hunter |
| The Innocents |
| The Prestige |
| The Shawshank Redemption |
| The Usual Suspects |
| Titanic |
| Trainspotting |
| Unknown |
| Vertigo |
| Victor Woeltjen |
| Vincent Cadena |
| Wesley S. Walker |

#### 6. Write a SQL query to find all reviewers who have rated seven or more stars to their rating. Return reviewer name.
```sql
SELECT rev_name FROM movie_reviewer 
	WHERE rev_id IN (SELECT rev_id FROM movie_rating WHERE rev_stars >= 7);

```
#### Result
| rev_name |
| :--- |
| Righty Sock |
| Jack Malvern |
| Flagrant Baronessa |
| Unknown |
| Victor Woeltjen |
| Simon Wright |
| Mike Salvati |
| Guest Reviewer |
| Sasha Goldshtein |
| Krug Stillo |
| Hannah Steele |
| Vincent Cadena |
| Brandt Sponseller |

#### 7. Write a SQL query to find the movies without any rating. Return movie title.
```sql
SELECT mov_title FROM movie 
WHERE mov_id NOT IN (SELECT mov_id FROM movie_rating);

```
#### Result
| mov_title |
| :--- |
| The Deer Hunter |
| Amadeus |
| Eyes Wide Shut |
| The Shawshank Redemption |
| Deliverance |
| The Prestige |
| Spirited Away |
| Back to the Future |
| Braveheart |

#### 8. Write a SQL query to find the movies with ID 905 or 907 or 917. Return movie title.
```sql
SELECT mov_title FROM movie WHERE mov_id IN (905, 907, 917);

```
#### Result
No result 

#### 9. Write a SQL query to find the movie titles that contain the word 'Boogie Nights'. Sort the result-set in ascending order by movie year. Return movie ID, movie title and movie release year.
```sql
SELECT mov_id, mov_title, mov_year FROM movie 
WHERE mov_title LIKE '%Boogie Nights%' ORDER BY mov_year ASC;
```
#### Result
| mov_id | mov_title | mov_year |
| :--- | :--- | :--- |
| 10 | Boogie Nights | 1997 |

#### 10. Write a SQL query to find those actors with the first name 'Woody' and the last name 'Allen'. Return actor ID.
```sql
SELECT act_id FROM actor WHERE act_fname = 'Woody' AND acrt_lname = 'Allen';

```
#### Result
| act_id |
| :--- |
| 11 |

---

### Sub-Queries

#### 11. Write a SQL query to find the actors who played a role in the movie 'Annie Hall'. Return all the fields of actor table.
```sql
SELECT * FROM actor WHERE act_id IN (
    SELECT act_id FROM movie_cast WHERE mov_id = (
        SELECT mov_id FROM movie WHERE mov_title = 'Annie Hall'
    )
);
```
#### Result
| act_id | act_fname | acrt_lname | act_gender |
| :--- | :--- | :--- | :--- |
| 11 | Woody | Allen | M |

#### 12. Write a SQL query to find the director of a film that cast a role in 'Eyes Wide Shut'. Return director first name, last name.
```sql
SELECT dir_fname, dir_lname FROM director WHERE dir_id IN (
    SELECT dir_id FROM movie_direction WHERE mov_id = (
        SELECT mov_id FROM movie WHERE mov_title = 'Eyes Wide Shut'
    )
);
```
#### Result
| dir_fname | dir_lname |
| :--- | :--- |
| Stanley | Kubrick |

#### 13. Write a SQL query to find those movies that have been released in countries other than the United Kingdom. Return movie title, movie year, movie time, and date of release, releasing country.
```sql
SELECT mov_title, mov_year, mov_time, mov_dt_rel, mov_rel_country 
FROM movie WHERE mov_rel_country <> 'UK';
```
#### Result
| mov_title | mov_year | mov_time | mov_dt_rel | mov_rel_country |
| :--- | :--- | :--- | :--- | :--- |
| The Innocents | 1961 | 100 | 1962-02-19 | SW |
| Annie Hall | 1977 | 93 | 1977-04-20 | USA |
| Seven Samurai | 1954 | 207 | 1954-04-26 | JP |

#### 14. Write a SQL query to find for movies whose reviewer is unknown. Return movie title, year, release date, director first name, last name, actor first name, last name.
```sql
SELECT m.mov_title, m.mov_year, m.mov_dt_rel, d.dir_fname, d.dir_lname, a.act_fname, a.acrt_lname
FROM movie m
JOIN movie_direction md ON m.mov_id = md.mov_id
JOIN director d ON md.dir_id = d.dir_id
JOIN movie_cast mc ON m.mov_id = mc.mov_id
JOIN actor a ON mc.act_id = a.act_id
WHERE m.mov_id IN (
    SELECT mov_id FROM movie_rating WHERE rev_id IN (
        SELECT rev_id FROM movie_reviewer WHERE rev_name = '' OR rev_name IS NULL
    )
);


```
#### Result
No Result

#### 15. Write a SQL query to find those movies directed by the director whose first name is Woddy and last name is Allen. Return movie title.
```sql
SELECT mov_title FROM movie WHERE mov_id IN (
    SELECT mov_id FROM movie_direction WHERE dir_id = (
        SELECT dir_id FROM director WHERE dir_fname = 'Woody' AND dir_lname = 'Allen'
    )
);

```
#### Result
| mov_title |
| :--- |
| Annie Hall |

#### 16. Write a SQL query to determine those years in which there was at least one movie that received a rating of at least three stars. Sort the result-set in ascending order by movie year. Return movie year.
```sql
SELECT DISTINCT mov_year FROM movie WHERE mov_id IN (
    SELECT mov_id FROM movie_rating WHERE rev_stars >= 3
) ORDER BY mov_year ASC;

```
#### Result
| mov_year |
| :--- |
| 1954 |
| 1958 |
| 1961 |
| 1962 |
| 1977 |
| 1982 |
| 1986 |
| 1995 |
| 1997 |
| 1999 |
| 2001 |
| 2004 |
| 2008 |
| 2009 |


#### 17. Write a SQL query to search for movies that do not have any ratings. Return movie title.
```sql
SELECT mov_title FROM movie WHERE mov_id NOT IN (SELECT mov_id FROM movie_rating);
```
#### Result
| mov_title |
| :--- |
| The Deer Hunter |
| Amadeus |
| Eyes Wide Shut |
| The Shawshank Redemption |
| Deliverance |
| The Prestige |
| Spirited Away |
| Back to the Future |
| Braveheart |

#### 18. Write a SQL query to find those reviewers who have not given a rating to certain films. Return reviewer name.
```sql
SELECT rev_name FROM movie_reviewer WHERE rev_id IN (
    SELECT rev_id FROM movie_rating WHERE rev_stars IS NULL
);
```
#### Result
| rev_name |
| :--- |
| Neal Wruck |
| Scott LeBrun |

#### 19. Write a SQL query to find movies that have been reviewed by a reviewer and received a rating. Sort the result-set in ascending order by reviewer name, movie title, review Stars. Return reviewer name, movie title, review Stars.
```sql
SELECT r.rev_name, m.mov_title, rt.rev_stars 
FROM movie_reviewer r, movie m, movie_rating rt
WHERE r.rev_id = rt.rev_id AND m.mov_id = rt.mov_id AND rt.rev_stars IS NOT NULL
ORDER BY r.rev_name, m.mov_title, rt.rev_stars;
```
#### Result
| rev_name | mov_title | rev_stars |
| :--- | :--- | :--- |
| Brandt Sponseller | Aliens | 8.4 |
| Flagrant Baronessa | Lawrence of Arabia | 8.3 |
| Guest Reviewer | Princess Mononoke | 8.4 |
| Hannah Steele | Donnie Darko | 8.1 |
| Jack Malvern | The Innocents | 7.9 |
| Josh Cates | Good Will Hunting | 4 |
| Krug Stillo | Seven Samurai | 7.7 |
| Mike Salvati | Annie Hall | 8.1 |
| Paul Monks | Boogie Nights | 3 |
| Richard Adams | Beyond the Sea | 6.7 |
| Righty Sock | Titanic | 7.7 |
| Righty Sock | Vertigo | 8.4 |
| Sasha Goldshtein | American Beauty | 7 |
| Simon Wright | The Usual Suspects | 8.6 |
| Unknown | Blade Runner | 8.2 |
| Victor Woeltjen | Avatar | 7.3 |
| Vincent Cadena | Slumdog Millionaire | 8 |

#### 20. Write a SQL query to find movies that have been reviewed by a reviewer and received a rating. Group the result set on reviewer’s name, movie title. Return reviewer’s name, movie title.
```sql
SELECT r.rev_name, m.mov_title 
FROM movie_reviewer r 
JOIN movie_rating rt ON r.rev_id = rt.rev_id 
JOIN movie m ON rt.mov_id = m.mov_id 
GROUP BY r.rev_name, m.mov_title;
```
#### Result
| rev_name | mov_title |
| :--- | :--- |
| Brandt Sponseller | Aliens |
| Flagrant Baronessa | Lawrence of Arabia |
| Guest Reviewer | Princess Mononoke |
| Hannah Steele | Donnie Darko |
| Jack Malvern | The Innocents |
| Josh Cates | Good Will Hunting |
| Krug Stillo | Seven Samurai |
| Mike Salvati | Annie Hall |
| Neal Wruck | Chinatown |
| Paul Monks | Boogie Nights |
| Richard Adams | Beyond the Sea |
| Righty Sock | Titanic |
| Righty Sock | Vertigo |
| Sasha Goldshtein | American Beauty |
| Scott LeBrun | Trainspotting |
| Simon Wright | The Usual Suspects |
| Unknown | Blade Runner |
| Victor Woeltjen | Avatar |
| Vincent Cadena | Slumdog Millionaire |

#### 21. Write a SQL query to find those movies, which have received highest number of stars. Group the result set on movie title and sorts the result-set in ascending order by movie title. Return movie title and maximum number of review stars.
```sql
SELECT m.mov_title, MAX(rt.rev_stars) 
FROM movie m JOIN movie_rating rt ON m.mov_id = rt.mov_id 
GROUP BY m.mov_title ORDER BY m.mov_title;

```
#### Result
| mov_title | MAX(rt.rev_stars) |
| :--- | :--- |
| Aliens | 8.4 |
| American Beauty | 7 |
| Annie Hall | 8.1 |
| Avatar | 7.3 |
| Beyond the Sea | 6.7 |
| Blade Runner | 8.2 |
| Boogie Nights | 3 |
| Chinatown | |
| Donnie Darko | 8.1 |
| Good Will Hunting | 4 |
| Lawrence of Arabia | 8.3 |
| Princess Mononoke | 8.4 |
| Seven Samurai | 7.7 |
| Slumdog Millionaire | 8 |
| The Innocents | 7.9 |
| The Usual Suspects | 8.6 |
| Titanic | 7.7 |
| Trainspotting | |
| Vertigo | 8.4 |

#### 22. Write a SQL query to find all reviewers who rated the movie 'American Beauty'. Return reviewer name.
```sql
SELECT rev_name FROM movie_reviewer WHERE rev_id IN (
    SELECT rev_id FROM movie_rating WHERE mov_id = (
        SELECT mov_id FROM movie WHERE mov_title = 'American Beauty'
    )
);

```
#### Result
| rev_name |
| :--- |
| Sasha Goldshtein |

#### 23. Write a SQL query to find the movies that have not been reviewed by any reviewer body other than 'Paul Monks'. Return movie title.
```sql
SELECT m.mov_title
FROM movie m
WHERE m.mov_id IN (
    SELECT mr.mov_id
    FROM movie_rating mr
    JOIN movie_reviewer r ON mr.rev_id = r.rev_id
    WHERE r.rev_name = 'Paul Monks'
)
AND m.mov_id NOT IN (
    SELECT mr.mov_id
    FROM movie_rating mr
    JOIN movie_reviewer r ON mr.rev_id = r.rev_id
    WHERE r.rev_name <> 'Paul Monks'
);
```
#### Result
| mov_title |
| :--- |
| Boogie Nights |

#### 24. Write a SQL query to find the movies with the lowest ratings. Return reviewer name, movie title, and number of stars for those movies.
```sql
SELECT r.rev_name, m.mov_title, rt.rev_stars 
FROM movie_reviewer r JOIN movie_rating rt ON r.rev_id = rt.rev_id 
JOIN movie m ON rt.mov_id = m.mov_id 
WHERE rt.rev_stars = (SELECT MIN(rev_stars) FROM movie_rating);
```
#### Result
| rev_name | mov_title | rev_stars |
| :--- | :--- | :--- |
| Paul Monks | Boogie Nights | 3 |

#### 25. Write a SQL query to find the movies directed by 'James Cameron'. Return movie title.
```sql
SELECT mov_title FROM movie WHERE mov_id IN (
    SELECT mov_id FROM movie_direction WHERE dir_id = (
        SELECT dir_id FROM director WHERE dir_fname = 'James' AND dir_lname = 'Cameron'
    )
);
```
#### Result
| mov_title |
| :--- |
| Titanic |
| Aliens |

#### 26. Write a query in SQL to find the movies in which one or more actors appeared in more than one film.
```sql
SELECT mov_title FROM movie WHERE mov_id IN (
    SELECT mov_id FROM movie_cast WHERE act_id IN (
        SELECT act_id FROM movie_cast GROUP BY act_id HAVING COUNT(mov_id) > 1
    )
);
```
#### Result
| mov_title |
| :--- |
| American Beauty |
| Beyond the Sea |


---

### Joins


#### 27. Write a SQL query to find all reviewers whose ratings contain a NULL value. Return reviewer name.
```sql
SELECT r.rev_name FROM movie_reviewer r 
JOIN movie_rating rt ON r.rev_id = rt.rev_id WHERE rt.rev_stars IS NULL;

```
#### Result
| rev_name |
| :--- |
| Neal Wruck |
| Scott LeBrun |

#### 28. Write a SQL query to find out who was cast in the movie 'Annie Hall'. Return actor first name, last name and role.
```sql
SELECT a.act_fname, a.acrt_lname, mc.role 
FROM actor a JOIN movie_cast mc ON a.act_id = mc.act_id 
JOIN movie m ON mc.mov_id = m.mov_id WHERE m.mov_title = 'Annie Hall';

```
#### Result
| act_fname | acrt_lname | role |
| :--- | :--- | :--- |
| Woody | Allen | Alvy Singer |

#### 29. Write a SQL query to find the director who directed a movie that featured a role in 'Eyes Wide Shut'. Return director first name, last name and movie title.
```sql
SELECT d.dir_fname, d.dir_lname, m.mov_title 
FROM director d JOIN movie_direction md ON d.dir_id = md.dir_id 
JOIN movie m ON md.mov_id = m.mov_id WHERE m.mov_title = 'Eyes Wide Shut';

```
#### Result
| dir_fname | dir_lname | mov_title |
| :--- | :--- | :--- |
| Stanley | Kubrick | Eyes Wide Shut |

#### 30. Write a SQL query to find the director of a movie that cast a role as Sean Maguire. Return director first name, last name and movie title.
```sql
SELECT d.dir_fname, d.dir_lname, m.mov_title 
FROM director d JOIN movie_direction md ON d.dir_id = md.dir_id 
JOIN movie m ON md.mov_id = m.mov_id 
JOIN movie_cast mc ON m.mov_id = mc.mov_id WHERE mc.role = 'Sean Maguire';

```
#### Result
| dir_fname | dir_lname | mov_title |
| :--- | :--- | :--- |
| Gus | Van Sant | Good Will Hunting |

#### 31. Write a SQL query to find out which actors have not appeared in any movies between 1990 and 2000 (Begin and end values are included.). Return actor first name, last name, movie title and release year.
```sql
SELECT a.act_fname, a.acrt_lname, m.mov_title, m.mov_year 
FROM actor a JOIN movie_cast mc ON a.act_id = mc.act_id 
JOIN movie m ON mc.mov_id = m.mov_id 
WHERE m.mov_year NOT BETWEEN 1990 AND 2000;
```
#### Result
| act_fname | acrt_lname | mov_title | mov_year |
| :--- | :--- | :--- | :--- |
| James | Stewart | Vertigo | 1958 |
| Deborah | Kerr | The Innocents | 1961 |
| Peter | O'Toole | Lawrence of Arabia | 1962 |
| Robert | De Niro | The Deer Hunter | 1978 |
| F. Murray | Abraham | Amadeus | 1984 |
| Harrison | Ford | Blade Runner | 1982 |
| Woody | Allen | Annie Hall | 1977 |
| Jon | Voight | Deliverance | 1972 |
| Maggie | Gyllenhaal | Donnie Darko | 2001 |
| Dev | Patel | Slumdog Millionaire | 2008 |
| Sigourney | Weaver | Aliens | 1986 |
| Kevin | Spacey | Beyond the Sea | 2004 |
| Jack | Nicholson | Chinatown | 1974 |
| Christian | Bale | Chinatown | 1974 |

#### 32. Write a SQL query to find the directors who have directed films in a variety of genres. Group the result set on director first name, last name and generic title. Sort the result-set in ascending order by director first name and last name. Return director first name, last name and number of genres movies.
```sql
SELECT d.dir_fname, d.dir_lname, g.gen_title, COUNT(g.gen_id) AS genre_count
FROM director d JOIN movie_direction md ON d.dir_id = md.dir_id 
JOIN movie_genres mg ON md.mov_id = mg.mov_id 
JOIN genres g ON mg.gen_id = g.gen_id 
GROUP BY d.dir_fname, d.dir_lname, g.gen_title 
ORDER BY d.dir_fname, d.dir_lname;
```
#### Result
| dir_fname | dir_lname | gen_title | genre_count |
| :--- | :--- | :--- | :--- |
| Alfred | Hitchcock | Mystery | 1 |
| Bryan | Singer | Crime | 1 |
| Danny | Boyle | Drama | 2 |
| David | Lean | Adventure | 1 |
| Frank | Darabont | Crime | 1 |
| Hayao | Miyazaki | Animation | 1 |
| Jack | Clayton | Horror | 1 |
| James | Cameron | Action | 1 |
| John | Boorman | Adventure | 1 |
| Kevin | Spacey | Music | 1 |
| Michael | Cimino | War | 1 |
| Ridley | Scott | Thriller | 1 |
| Sam | Mendes | Romance | 1 |
| Stanley | Kubrick | Mystery | 1 |
| Woody | Allen | Comedy | 1 |

#### 33. Write a SQL query to find the movies with year and genres. Return movie title, movie year and generic title.
```sql
SELECT m.mov_title, m.mov_year, g.gen_title 
FROM movie m JOIN movie_genres mg ON m.mov_id = mg.mov_id 
JOIN genres g ON mg.gen_id = g.gen_id;
```
#### Result
| mov_title | mov_year | gen_title |
| :--- | :--- | :--- |
| Aliens | 1986 | Action |
| Deliverance | 1972 | Adventure |
| Lawrence of Arabia | 1962 | Adventure |
| Princess Mononoke | 1997 | Animation |
| Annie Hall | 1977 | Comedy |
| The Usual Suspects | 1995 | Crime |
| The Shawshank Redemption | 1994 | Crime |
| Spirited Away | 2001 | Drama |
| Braveheart | 1995 | Drama |
| Trainspotting | 1996 | Drama |
| Slumdog Millionaire | 2008 | Drama |
| The Innocents | 1961 | Horror |
| Beyond the Sea | 2004 | Music |
| Eyes Wide Shut | 1999 | Mystery |
| Back to the Future | 1985 | Mystery |
| Vertigo | 1958 | Mystery |
| American Beauty | 1999 | Romance |
| Blade Runner | 1982 | Thriller |
| The Deer Hunter | 1978 | War |

#### 34. Write a SQL query to find all the movies with year, genres, and name of the director.
```sql
SELECT m.mov_title, m.mov_year, g.gen_title, d.dir_fname, d.dir_lname 
FROM movie m JOIN movie_genres mg ON m.mov_id = mg.mov_id 
JOIN genres g ON mg.gen_id = g.gen_id 
JOIN movie_direction md ON m.mov_id = md.mov_id 
JOIN director d ON md.dir_id = d.dir_id;
```
#### Result
| mov_title | mov_year | gen_title | dir_fname | dir_lname |
| :--- | :--- | :--- | :--- | :--- |
| Aliens | 1986 | Action | James | Cameron |
| Deliverance | 1972 | Adventure | John | Boorman |
| Lawrence of Arabia | 1962 | Adventure | David | Lean |
| Princess Mononoke | 1997 | Animation | Hayao | Miyazaki |
| Annie Hall | 1977 | Comedy | Woody | Allen |
| The Usual Suspects | 1995 | Crime | Bryan | Singer |
| The Shawshank Redemption | 1994 | Crime | Frank | Darabont |
| Trainspotting | 1996 | Drama | Danny | Boyle |
| Slumdog Millionaire | 2008 | Drama | Danny | Boyle |
| The Innocents | 1961 | Horror | Jack | Clayton |
| Beyond the Sea | 2004 | Music | Kevin | Spacey |
| Eyes Wide Shut | 1999 | Mystery | Stanley | Kubrick |
| Vertigo | 1958 | Mystery | Alfred | Hitchcock |
| American Beauty | 1999 | Romance | Sam | Mendes |
| Blade Runner | 1982 | Thriller | Ridley | Scott |
| The Deer Hunter | 1978 | War | Michael | Cimino |

#### 35. Write a SQL query to find the movies released before 1st January 1989. Sort the result-set in descending order by date of release. Return movie title, release year, date of release, duration, and first and last name of the director.
```sql
SELECT m.mov_title, m.mov_year, m.mov_dt_rel, m.mov_time, d.dir_fname, d.dir_lname 
FROM movie m JOIN movie_direction md ON m.mov_id = md.mov_id 
JOIN director d ON md.dir_id = d.dir_id 
WHERE m.mov_dt_rel < '1989-01-01' ORDER BY m.mov_dt_rel DESC;
```
#### Result
| mov_title | mov_year | mov_dt_rel | mov_time | dir_fname | dir_lname |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Aliens | 1986 | 1986-08-29 | 137 | James | Cameron |
| Amadeus | 1984 | 1985-01-07 | 160 | Milos | Forman |
| Deliverance | 1972 | 1982-10-05 | 109 | John | Boorman |
| Blade Runner | 1982 | 1982-09-09 | 117 | Ridley | Scott |
| The Deer Hunter | 1978 | 1979-03-08 | 183 | Michael | Cimino |
| Annie Hall | 1977 | 1977-04-20 | 93 | Woody | Allen |
| Chinatown | 1974 | 1974-08-09 | 130 | Roman | Polanski |
| Lawrence of Arabia | 1962 | 1962-12-11 | 216 | David | Lean |
| The Innocents | 1961 | 1962-02-19 | 100 | Jack | Clayton |
| Vertigo | 1958 | 1958-08-24 | 128 | Alfred | Hitchcock |

#### 36. Write a SQL query to calculate the average movie length and count the number of movies in each genre. Return genre title, average time and number of movies for each genre.
```sql
SELECT g.gen_title, AVG(m.mov_time) AS avg_time, COUNT(m.mov_id) AS movie_count 
FROM genres g JOIN movie_genres mg ON g.gen_id = mg.gen_id 
JOIN movie m ON mg.mov_id = m.mov_id GROUP BY g.gen_title;

```
#### Result
| gen_title | avg_time | movie_count |
| :--- | :--- | :--- |
| Action | 137 | 1 |
| Adventure | 162.5 | 2 |
| Animation | 134 | 1 |
| Comedy | 93 | 1 |
| Crime | 124 | 2 |
| Drama | 129.25 | 4 |
| Horror | 100 | 1 |
| Music | 118 | 1 |
| Mystery | 134.33 | 3 |
| Romance | 122 | 1 |
| Thriller | 117 | 1 |
| War | 183 | 1 |

#### 37. Write a SQL query to find movies with the shortest duration. Return movie title, movie year, director first name, last name, actor first name, last name and role.
```sql
SELECT m.mov_title, m.mov_year, d.dir_fname, d.dir_lname, a.act_fname, a.acrt_lname, mc.role 
FROM movie m JOIN movie_direction md ON m.mov_id = md.mov_id 
JOIN director d ON md.dir_id = d.dir_id 
JOIN movie_cast mc ON m.mov_id = mc.mov_id 
JOIN actor a ON mc.act_id = a.act_id 
WHERE m.mov_time = (SELECT MIN(mov_time) FROM movie);
```
#### Result
| mov_title | mov_year | dir_fname | dir_lname | act_fname | acrt_lname | role |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Annie Hall | 1977 | Woody | Allen | Woody | Allen | Alvy Singer |

#### 38. Write a SQL query to find the years in which a movie received a rating of 3 or 4. Sort the result in increasing order on movie year.
```sql
SELECT DISTINCT m.mov_year FROM movie m 
JOIN movie_rating rt ON m.mov_id = rt.mov_id 
WHERE rt.rev_stars IN (3, 4) ORDER BY m.mov_year;
```
#### Result
| mov_year |
| :--- |
| 1997 |

#### 39. Write a SQL query to get the reviewer name, movie title, and stars in an order that reviewer name will come first, then by movie title, and lastly by number of stars.
```sql
SELECT r.rev_name, m.mov_title, rt.rev_stars 
FROM movie_reviewer r JOIN movie_rating rt ON r.rev_id = rt.rev_id 
JOIN movie m ON rt.mov_id = m.mov_id 
ORDER BY r.rev_name, m.mov_title, rt.rev_stars;
```
#### Result
| rev_name | mov_title | rev_stars |
| :--- | :--- | :--- |
| Brandt Sponseller | Aliens | 8.4 |
| Flagrant Baronessa | Lawrence of Arabia | 8.3 |
| Guest Reviewer | Princess Mononoke | 8.4 |
| Hannah Steele | Donnie Darko | 8.1 |
| Jack Malvern | The Innocents | 7.9 |
| Josh Cates | Good Will Hunting | 4 |
| Krug Stillo | Seven Samurai | 7.7 |
| Mike Salvati | Annie Hall | 8.1 |
| Neal Wruck | Chinatown | |
| Paul Monks | Boogie Nights | 3 |
| Richard Adams | Beyond the Sea | 6.7 |
| Righty Sock | Titanic | 7.7 |
| Righty Sock | Vertigo | 8.4 |
| Sasha Goldshtein | American Beauty | 7 |
| Scott LeBrun | Trainspotting | |
| Simon Wright | The Usual Suspects | 8.6 |
| Unknown | Blade Runner | 8.2 |
| Victor Woeltjen | Avatar | 7.3 |
| Vincent Cadena | Slumdog Millionaire | 8 |

#### 40. Write a SQL query to find those movies that have at least one rating and received the most stars. Sort the result-set on movie title. Return movie title and maximum review stars.
```sql
SELECT m.mov_title, MAX(rt.rev_stars) 
FROM movie m JOIN movie_rating rt ON m.mov_id = rt.mov_id 
GROUP BY m.mov_title HAVING MAX(rt.rev_stars) IS NOT NULL ORDER BY m.mov_title;

```
#### Result
| mov_title | MAX(rt.rev_stars) |
| :--- | :--- |
| Aliens | 8.4 |
| American Beauty | 7 |
| Annie Hall | 8.1 |
| Avatar | 7.3 |
| Beyond the Sea | 6.7 |
| Blade Runner | 8.2 |
| Boogie Nights | 3 |
| Donnie Darko | 8.1 |
| Good Will Hunting | 4 |
| Lawrence of Arabia | 8.3 |
| Princess Mononoke | 8.4 |
| Seven Samurai | 7.7 |
| Slumdog Millionaire | 8 |
| The Innocents | 7.9 |
| The Usual Suspects | 8.6 |
| Titanic | 7.7 |
| Vertigo | 8.4 |

#### 41. Write a SQL query to find out which movies have received ratings. Return movie title, director first name, director last name and review stars.
```sql
SELECT m.mov_title, d.dir_fname, d.dir_lname, rt.rev_stars 
FROM movie m JOIN movie_direction md ON m.mov_id = md.mov_id 
JOIN director d ON md.dir_id = d.dir_id 
JOIN movie_rating rt ON m.mov_id = rt.mov_id;
```
#### Result
| mov_title | dir_fname | dir_lname | rev_stars |
| :--- | :--- | :--- | :--- |
| Vertigo | Alfred | Hitchcock | 8.4 |
| The Innocents | Jack | Clayton | 7.9 |
| Lawrence of Arabia | David | Lean | 8.3 |
| Blade Runner | Ridley | Scott | 8.2 |
| The Usual Suspects | Bryan | Singer | 8.6 |
| Chinatown | Roman | Polanski | |
| Boogie Nights | Paul | Thomas Anderson | 3 |
| Annie Hall | Woody | Allen | 8.1 |
| Princess Mononoke | Hayao | Miyazaki | 8.4 |
| American Beauty | Sam | Mendes | 7 |
| Titanic | James | Cameron | 7.7 |
| Good Will Hunting | Gus | Van Sant | 4 |
| Trainspotting | Danny | Boyle | |
| Donnie Darko | Richard | Kelly | 8.1 |
| Slumdog Millionaire | Danny | Boyle | 8 |
| Aliens | James | Cameron | 8.4 |
| Beyond the Sea | Kevin | Spacey | 6.7 |

#### 42. Write a SQL query to find movies in which one or more actors have acted in more than one film. Return movie title, actor first and last name, and the role.
```sql
SELECT m.mov_title, a.act_fname, a.acrt_lname, mc.role 
FROM movie m JOIN movie_cast mc ON m.mov_id = mc.mov_id 
JOIN actor a ON mc.act_id = a.act_id 
WHERE a.act_id IN (SELECT act_id FROM movie_cast GROUP BY act_id HAVING COUNT(*) > 1);

```
#### Result
| mov_title | act_fname | acrt_lname | role |
| :--- | :--- | :--- | :--- |
| American Beauty | Kevin | Spacey | Lester Burnham |
| Beyond the Sea | Kevin | Spacey | Bobby Darin |

#### 43. Write a SQL query to find the actor whose first name is 'Claire' and last name is 'Danes'. Return director first name, last name, movie title, actor first name and last name, role.
```sql
SELECT d.dir_fname, d.dir_lname, m.mov_title, a.act_fname, a.acrt_lname, mc.role 
FROM actor a JOIN movie_cast mc ON a.act_id = mc.act_id 
JOIN movie m ON mc.mov_id = m.mov_id 
JOIN movie_direction md ON m.mov_id = md.mov_id 
JOIN director d ON md.dir_id = d.dir_id 
WHERE a.act_fname = 'Claire' AND a.acrt_lname = 'Danes';
```
#### Result
| dir_fname | dir_lname | mov_title | act_fname | acrt_lname | role |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Hayao | Miyazaki | Princess Mononoke | Claire | Danes | San |

#### 44. Write a SQL query to find for actors whose films have been directed by them. Return actor first name, last name, movie title and role.
```sql
SELECT a.act_fname, a.acrt_lname, m.mov_title, mc.role 
FROM actor a JOIN movie_cast mc ON a.act_id = mc.act_id 
JOIN movie m ON mc.mov_id = m.mov_id 
JOIN movie_direction md ON m.mov_id = md.mov_id 
JOIN director d ON md.dir_id = d.dir_id 
WHERE a.act_fname = d.dir_fname AND a.acrt_lname = d.dir_lname;
```
#### Result
| act_fname | acrt_lname | mov_title | role |
| :--- | :--- | :--- | :--- |
| Woody | Allen | Annie Hall | Alvy Singer |
| Kevin | Spacey | Beyond the Sea | Bobby Darin |

#### 45. Write a SQL query to find the cast list of the movie ‘Chinatown’. Return first name, last name.
```sql
SELECT a.act_fname, a.acrt_lname 
FROM actor a JOIN movie_cast mc ON a.act_id = mc.act_id 
JOIN movie m ON mc.mov_id = m.mov_id WHERE m.mov_title = 'Chinatown';

```
#### Result
| act_fname | acrt_lname |
| :--- | :--- |
| Jack | Nicholson |
| Christian | Bale |

#### 46. Write a SQL query to find those movies where actor’s first name is 'Harrison' and last name is 'Ford'. Return movie title.
```sql
SELECT m.mov_title FROM movie m 
JOIN movie_cast mc ON m.mov_id = mc.mov_id 
JOIN actor a ON mc.act_id = a.act_id 
WHERE a.act_fname = 'Harrison' AND a.acrt_lname = 'Ford';
```
#### Result
| mov_title |
| :--- |
| Blade Runner |

#### 47. Write a SQL query to find the highest-rated movies. Return movie title, movie year, review stars and releasing country.
```sql
SELECT m.mov_title, m.mov_year, rt.rev_stars, m.mov_rel_country 
FROM movie m JOIN movie_rating rt ON m.mov_id = rt.mov_id 
WHERE rt.rev_stars = (SELECT MAX(rev_stars) FROM movie_rating);

```
#### Result
| mov_title | mov_year | rev_stars | mov_rel_country |
| :--- | :--- | :--- | :--- |
| The Usual Suspects | 1995 | 8.6 | UK |

#### 48. Write a SQL query to find the highest-rated ‘Mystery Movies’. Return the title, year, and rating.
```sql
SELECT m.mov_title, m.mov_year, rt.rev_stars 
FROM movie m JOIN movie_genres mg ON m.mov_id = mg.mov_id 
JOIN genres g ON mg.gen_id = g.gen_id 
JOIN movie_rating rt ON m.mov_id = rt.mov_id 
WHERE g.gen_title = 'Mystery' AND rt.rev_stars = (
    SELECT MAX(rt2.rev_stars) FROM movie_rating rt2 
    JOIN movie_genres mg2 ON rt2.mov_id = mg2.mov_id 
    JOIN genres g2 ON mg2.gen_id = g2.gen_id WHERE g2.gen_title = 'Mystery'
);
```
#### Result
| mov_title | mov_year | rev_stars |
| :--- | :--- | :--- |
| Vertigo | 1958 | 8.4 |

#### 49. Write a SQL query to find the years when most of the ‘Mystery Movies’ produced. Count the number of generic title and compute their average rating. Group the result set on movie release year, generic title. Return movie year, generic title, number of generic title and average rating.
```sql
SELECT m.mov_year, g.gen_title, COUNT(g.gen_title) AS count_genres, AVG(rt.rev_stars) AS avg_rating 
FROM movie m JOIN movie_genres mg ON m.mov_id = mg.mov_id 
JOIN genres g ON mg.gen_id = g.gen_id 
JOIN movie_rating rt ON m.mov_id = rt.mov_id 
WHERE g.gen_title = 'Mystery' GROUP BY m.mov_year, g.gen_title;

```
#### Result
| mov_year | gen_title | count_genres | avg_rating |
| :--- | :--- | :--- | :--- |
| 1958 | Mystery | 1 | 8.4 |

#### 50. Write a query in SQL to generate a report, which contain the fields movie title, name of the female actor, year of the movie, role, movie genres, the director, date of release, and rating of that movie.
```sql
SELECT m.mov_title, a.act_fname, a.acrt_lname, m.mov_year, mc.role, g.gen_title, d.dir_fname, d.dir_lname, m.mov_dt_rel, rt.rev_stars
FROM movie m 
JOIN movie_cast mc ON m.mov_id = mc.mov_id 
JOIN actor a ON mc.act_id = a.act_id 
JOIN movie_genres mg ON m.mov_id = mg.mov_id 
JOIN genres g ON mg.gen_id = g.gen_id 
JOIN movie_direction md ON m.mov_id = md.mov_id 
JOIN director d ON md.dir_id = d.dir_id 
LEFT JOIN movie_rating rt ON m.mov_id = rt.mov_id 
WHERE a.act_gender = 'F';
```
#### Result
| mov_title | act_fname | acrt_lname | mov_year | role | gen_title | dir_fname | dir_lname | mov_dt_rel | rev_stars |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| The Innocents | Deborah | Kerr | 1961 | Miss Giddens | Horror | Jack | Clayton | 1962-02-19 | 7.9 |
| Eyes Wide Shut | Nicole | Kidman | 1999 | Alice Harford | Mystery | Stanley | Kubrick | | |
| Princess Mononoke | Claire | Danes | 1997 | San | Animation | Hayao | Miyazaki | 2001-10-19 | 8.4 |
| Aliens | Sigourney | Weaver | 1986 | Ripley | Action | James | Cameron | 1986-08-29 | 8.4 |



