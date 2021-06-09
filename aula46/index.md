USE `cruz-2114883-rafael-orlando`


### Exercício 1


a)```ALTER TABLE Actor DROP COLUMN salary``` - É utilizado para remover a única coluna da tabela

b)```ALTER TABLE Actor CHANGE gender sex VARCHAR(6)``` - É utilizado para renomear uma coluna (gender para sex)

c)```ALTER TABLE Actor CHANGE gender gender VARCHAR(255)``` - É utilizado para alterar uma variável (VARCHAR 6 para VARCHAR 255)

d)```ALTER TABLE Actor CHANGE gender gender VARCHAR(100);```


### Exercício 2



a)UPDATE Actor SET name="Moacyr Franco", birth_date="2020-02-10" WHERE id="003";

b)```UPDATE Actor SET name="JULIANA PAES" WHERE name="Juliana Paes";```
  ```UPDATE Actor SET name="Juliana Paes" WHERE name="JULIANA PAES";```	

c)```UPDATE Actor SET name="Carla Perez", salary=20000, birth_date="1980-03-04", gender="female" WHERE id="005";```

d)```UPDATE Actor SET name="Sergio Malandro" WHERE id="45";``` (Não apontou nenhum erro a alteração do nome no Id que não existia)


### Exercício 3


a)```DELETE FROM Actor WHERE name="Fernanda Montenegro";```

b)```DELETE FROM Actor WHERE gender="male" AND salary > 1000000;```


### Exercício 4


a)```SELECT MAX(salary) FROM Actor;```

b)```SELECT MIN(salary) FROM Actor WHERE gender="female";```

c)```SELECT COUNT(*) FROM Actor WHERE gender="female";```

d)```SELECT SUM(salary) FROM Actor;```


### Exercício 5


a)Retronou a quantidade especifica de cada grupo de (gender), 3 male e 1 female.

b)```SELECT id, name FROM Actor ORDER BY name DESC;```

c)```SELECT name FROM Actor ORDER BY salary;```

d)```SELECT name FROM Actor ORDER BY salary DESC LIMIT 3;```

e)```SELECT AVG(salary), gender FROM Actor GROUP BY gender;```


### Exercício 6


a)```ALTER TABLE Movie ADD playing_limit_date DATE;```

b)```ALTER TABLE Movie CHANGE rating rating FLOAT;```

c)```UPDATE Movie SET playing_limit_date="2021-06-30" WHERE id="001";```
  ```UPDATE Movie SET playing_limit_date="2021-04-30" WHERE id="002";```

d)```DELETE FROM Movie WHERE id="004";```
  ```UPDATE Movie SET synopsis="Deus é Brasileiro, não sabia não?" WHERE id="004";``` (Não ocorreu nenhum erro.)


### Exercício 7


a)```SELECT COUNT(*) FROM Movie WHERE rating > 7.5;``` (2 filmes com média acima de 7.5)

b)```SELECT AVG(rating) FROM Movie;``` (A média de avaliaçoes dos filmes é de 8.33) 

c)```SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();``` (A quantidade de filmes em cartaz é de 2)

d)```SELECT COUNT(*) FROM Movie WHERE release_Date > CURDATE();``` (A quantidade de filmes a lançar é de 0)

e)```SELECT MAX(rating) FROM Movie;``` (A maior nota dos filmes é de 10)

f)```SELECT MIN(rating) FROM Movie;``` (A menor nota dos filmes é de 7)


### Exercício 8


a)```SELECT title FROM Movie ORDER BY title ASC;```

b)```SELECT title FROM Movie ORDER BY title DESC LIMIT 5;```

c)```SELECT title FROM Movie WHERE release_Date < CURDATE() ORDER BY release_Date DESC LIMIT 3;```

d)```SELECT title FROM Movie ORDER BY rating DESC LIMIT 3;```