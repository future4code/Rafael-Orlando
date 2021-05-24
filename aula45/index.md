USE `cruz-2114883-rafael-orlando`


### Exercício 1


a)VARCHAR(n) - string no máximo (n) caracteres
  DATE - representa uma data

b)SHOW DATSBASE - demonstra em tabela as informaçoes do (Database do usuário e shcema)
  SHOW TABLES -   demonstra em tabela, onde está localizada a tabela no Database e o titulo da tabela que está sendo utilizada

c)DESCRIBE - demonstra em tabela, as informaçoes passadas na criação da tabela Actor, como ( id, name, salary )


### Exercício 2


a)
```
INSERT INTO Actor (d, salary , birth_date, gender)
VALUES(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female",
);
```

b)Erro 1064 (Erro de sintaxe)

c)Erro 1136 (A contagem de colunas não corresponde a contagem de valores)

d)Erro 1364 (O campo 'name' não tem um valor padrão)

e)Erro 1292 (Valor de data incorreto '1950' para a coluna 'birth_date')


### Exercício 3


a)```SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";```

b)```SELECT salary from Actor WHERE id = "001";```

c)```SELECT gender from Actor WHERE gender = "invalid";``` 

d)```SELECT id, name, salary from Actor WHERE salary <= 500000;```

e)Erro 1054 (Coluna desconhecida 'nome' na lista de campos)


### Exercício 4


a)A query utiliza o LIKE para comparar as strings, solicitando como parametro a informação dentro de 'name'
  letras A ou J com o salário superior de 300000.

b)```SELECT id, name from Actor WHERE name NOT LIKE "A%" AND salary > 350000;```

c)```SELECT id, name from Actor WHERE name  LIKE "%G%" OR name LIKE "%g%";```

d)```SELECT id, name from Actor WHERE name  LIKE "%G%" OR name LIKE "%g%" AND name LIKE "%A%" OR name LIKE "%a%" AND salary > 350000 AND salary < 900000;```


### Exercício 5


a)TEXT - não possui um limite de tamanho, diferente do VARCHAR

b)
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-06-01",
    "7"
);
```

c)
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
	"002",
    "Doce de Mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    "10"
);
```

d)
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    "8"
);
```

e)
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    "9"
);
```

### Exercício 6


a)```SELECT id, title, rating From Movie WHERE id = "002";```

b)```SELECT id, title, rating From Movie WHERE title = "Se Eu Fosse Você";```

c)```SELECT title From Movie WHERE rating > "9";```


### Exercício 7


a)```SELECT title From Movie WHERE title LIKE "%vida%";```

b)```SELECT title From Movie WHERE title LIKE "%Doce%";```

c)```SELECT  title, release_Date From Movie WHERE release_Date < "2021-05-23";``` 

d)```SELECT title from Movie WHERE release_Date < "2021-05-23" AND (title LIKE "%Dois%" OR synopsis LIKE "%sedutora professora%") AND rating > 7;```