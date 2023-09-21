const bcrypt = require('bcrypt');

// A nova senha que você deseja definir
const novaSenha = 'novaSenha';

// Gere um novo hash para a nova senha
// O número 10 é o custo do hash
const novoHashSenha = bcrypt.hashSync(novaSenha, 10);

// Carregue o arquivo JSON com os dados do usuário
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('db.json', 'utf8'));

// Encontre o usuário com o email "admin@mail.com" (usuário padrão)
const usuarioPadrao = data.users.find(user => user.email === 'admin@mail.com');

if (usuarioPadrao) {
  // Atualize o hash da senha do usuário com o novo hash
    usuarioPadrao.password = novoHashSenha;

  // Salve as alterações de volta no arquivo JSON
    fs.writeFileSync('db.json', JSON.stringify(data, null, 2), 'utf8');

    console.log('Senha do usuário padrão atualizada com sucesso!');
} else {
    console.log('Usuário padrão não encontrado.');
}
