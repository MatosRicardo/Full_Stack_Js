// Formas de concatenação e Strings

let primeiroNome = "Ricardo";
let segundoNome = "Matos";

//1.Concatenation (Concatenar)
// let nomeCompleto = primeiroNome.concat(segundoNome);

//2. Append (Adicionar mais textos)
// primeiroNome += " Esse é o meu nome";
// console.log(primeiroNome);

//3. Length (Tamanho)
// console.log(primeiroNome.length);

//4. Cases (letras minusculas e maisculas)
// console.log(primeiroNome.toUpperCase());
// console.log(primeiroNome.toLowerCase());

//5. Slice (Cortar)
// console.log(primeiroNome.slice(0, 3));

//6. Split & join
// console.log(primeiroNome.split("").join("-"));

//7. IndexOf (Encontrar a posição de um caractere)
// console.log(primeiroNome.indexOf("c"));

//8. Replace (Substituir)
// console.log(primeiroNome.replace("Ricardo", "Matos"));

//9. Includes (Verificar se existe)
// console.log(primeiroNome.includes("Ricardo"));

//10. Trim (Remover espaços)
// let nomeCompleto = "   Ricardo Matos   ";
// console.log(nomeCompleto.trim());

//Exercicio
// Crie uma variável chamada favActorFirstName e armazene o primeiro nome do seu ator favorito.
// Crie uma variável chamada favActorLastName e armazene o sobrenome do seu ator favorito.
// Crie uma variável chamada fullName e concatene favActorFirstName e favActorLastName.
// Crie uma variável chamada uppercase e coloque o nome do seu ator favorito em letras maiúsculas.
// Crie uma variável chamada message e armazene "Meu ator favorito é (nome do ator em maiúsculas)" e diga algo sobre ele.
// Agora, adicione esta mensagem na variável message: "Seu melhor show é Silicon Valley".
// Agora, exiba sua mensagem.

let favActorFirstName = "Ryan";
let favActorLastName = "Raynolds";
let fullName = favActorFirstName.concat(" ", favActorLastName);
let nomeMaior = fullName.toUpperCase();
let nomeMenor = fullName.toLowerCase();
let message = `Meu ator favorito é ${favActorFirstName}`;
message += " Seu melhor melhor filme é DeadPool 3";

console.log(message);
