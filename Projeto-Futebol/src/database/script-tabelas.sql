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
foreign key(fkUsuario) references usuario(idUsuario),
tempoDecorrido time,
acerto int
);


select * from usuario;

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
(default, "Quem foi o autor do gol da final do mundial de clubes de 2006?", 3000, "Adriano Gabiru"),
(default, "Quem perdeu o penalti decicivo na disputa de penaltis da final da copa de 1994?", 5000, "Baggio"),
(default, "Qual seleção venceu a primeira Copa do mundo em 1930?", 5000, "Uruguai"),

(default, "Qual o último time não europeu a vencer o mundial de clubes FIFA?", 3000, "Corinthians"),
(default, "Qual seleção ficou conhecida como 'Laranja mecânica' pela sua forma de jogar na copa de 1974?", 3000, "Holanda"),
(default, "No último lance da prorrogação da copa do mundo de 2022, um jogador perdeu um gol cara a cara com o goleiro, quem é esse jogador?", 7000, "Kolo Muani"),
(default, "Qual jogador levou uma cabeçada na final da copa do mundo de 2006?", 7000, "Materazzi");

insert into alternativa values
(default, "Ronaldinho Gaucho", 4),
(default, "Fernandão", 4),
(default, "Messi", 4),
(default, "Adriano Gabiru", 4),

(default, "Bebeto", 5),
(default, "Baggio", 5),
(default, "Dunga", 5),
(default, "Zola", 5),

(default, "Hungria", 6),
(default, "Uruguai", 6),
(default, "União Soviética", 6),
(default, "Espanha", 6),

(default, "Corinthians", 7),
(default, "River Plate", 7),
(default, "Grêmio", 7),
(default, "Indepediente Del Valle", 7),

(default, "Turquia", 8),
(default, "Argentina", 8),
(default, "Alemanha", 8),
(default, "Holanda", 8),

(default, "Mac Allister", 9),
(default, "Dembelé", 9),
(default, "Kolo Muani", 9),
(default, "Otamendi", 9),

(default, "Pirlo", 10),
(default, "Materazzi", 10),
(default, "Henry", 10),
(default, "Buffon",10);

delete from usuario where idUsuario = 1;

select * from pontuacao order by pontuacao.pontuacao desc;
select * from usuarioSeguidor join pontuacao on usuarioSeguidor.fkUsuarioSeguido = pontuacao.fkUsuario where fkUsuarioSeguidor = 4 order by pontuacao.pontuacao desc;

SELECT * FROM usuario;
select * from usuarioSeguidor;
update pontuacao set pontuacao = 30000, tempoDecorrido = '00:00:01' where fkUsuario = 1;
select usuario.idUsuario, usuario.nomeUsuario, pontuacao.pontuacao 
    from usuario join pontuacao on pontuacao.fkUsuario = usuario.idUsuario order by pontuacao.pontuacao desc;

delete from pontuacao where fkUsuario = 2;

drop table pontuacao;



insert into pontuacao values
(default, "30000", 2, '00:01:30'),
(default, "38000", 1, '00:00:30');