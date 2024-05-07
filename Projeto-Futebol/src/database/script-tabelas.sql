create database projetoFutebol;
use projetoFutebol;

create user "corinthians"@'localhost'identified by "2012";

grant all on projetoFutebol.*TO'corinthians'@'localhost';
flush privileges;

create table usuario(
idUsuario int primary key auto_increment,
nomeUsuario varchar(45),
email varchar(100) unique,
senha varchar(20)
);

create table usuarioSeguidor(
idSeguidor int auto_increment,
fkUsuarioSeguido int,
fkUsuarioSeguidor int,
primary key(idSeguidor, fkUsuarioSeguido, fkUsuarioSeguidor),
foreign key(fkUsuarioSeguido) references usuario(idUsuario),
foreign key(fkUsuarioSeguidor) references usuario(idUsuario)
);

create table pontuacao(
idPontuacao int primary key auto_increment,
pontuacao int,
fkUsuario int,
foreign key(fkUsuario) references usuario(idUsuario)
);

select * from usuarioSeguidor;

create table pergunta(
idPergunta int primary key auto_increment,
descricao varchar(150),
valor int,
resposta varchar(45)
);

create table alternativa (
idAlt int primary key auto_increment,
descricao varchar(45),
fkPergunta int,
foreign key(fkPergunta) references pergunta(idPergunta)
);

insert into pergunta values
(default, "Quem venceu a copa do mundo de 1970?", 3000, "Brasil"),
(default, "Qual time possui mais titulos da Champions League?", 1000, "Real Madrid"),
(default, "Quem é o maior artilheiro da história da Champions League?", 3000, "Cristiano Ronaldo");

insert into alternativa values
(default, "Alemanha", 1),
(default, "Brasil", 1),
(default, "Mexico", 1),
(default, "Italia", 1),

(default, "Real Madrid", 2),
(default, "Criciúma", 2),
(default, "Milan", 2),
(default, "Barcelona", 2),

(default, "Henrique Dourado", 3),
(default, "Erling Haaland", 3),
(default, "Cristiano Ronaldo", 3),
(default, "Xavi", 3);

select * from pontuacao;

insert into pontuacao (pontuacao, fkUsuario) values(
10000, 2
);
truncate pontuacao;

select usuario.nomeUsuario, pontuacao.pontuacao 
    from usuario join pontuacao on pontuacao.fkUsuario = usuario.idUsuario
