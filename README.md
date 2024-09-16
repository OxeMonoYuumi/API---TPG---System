# Exemplo de documentação de API
![NPM](https://img.shields.io/npm/l/react)

# API_Habilidades_PI
Esta API é utilizada para gerenciar o cadastro de Skills para o projeto integrador "Jogo Sério para Capacitação de Trilhas Pedagógicas", permitindo operações de CRUD (criar, ler, atualizar e deletar).

## Endpoints
### - GET /skills
Esse endpoint é responsável por retornar a listagem de todas as habilidades cadsatras no banco de dados.

#### Parâmetros:
Nenhum

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, você vai receber a listagem de todos os jogos.

Exemplo de resposta:

```
{
	"skills": [
		{
			"_id": "66e3756fa76fd6db7d47e010",
			"component": "Artes Visuais",
			"year_range": "1º Ano",
			"skill": "Identificar e Apreciar Formas",
			"comment": "Formas de como aplicar",
			"skill_code": [
				{
					"cp": "ESO1T1",
					"_id": "66e3756fa76fd6db7d47e011"
				},
				{
					"bncc": "CODEBNCC",
					"_id": "66e3756fa76fd6db7d47e012"
				}
			],
			"__v": 0
		}
	]
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor. Motivos podem incluir falhas na comunicação com o banco de dados.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```

### - POST /skill
Esse endpoint é responsável por cadastrar uma nova habilidade no banco de dados.

#### Parâmetros:
component: Nome do Componente (Linguagem). <br>
year_range: Faixa/Ano. <br>
skill: Descrição da habilidade. <br>
comment: Dados complementares da habilidade. <br>
skill_code: Códigos das habilidades. <br>
           cp: Código Curriculo Paulista.
           bncc: Código Base Naciona Comum Curricular.

Exemplo de requisição:

```
{
	"component":"Artes Visuais",
	"year_range":"1º Ano",
	"skill":"Identificar e Apreciar Formas",
    "comment":"Formas de como aplicar",
	"skill_code": [{"cp":"EF01AR01"},
				   {"bncc":"EF15AR01"}]
}
```

#### Respostas:
##### Criado! 201
Caso essa resposta aconteça, a nova habilidade foi criada com sucesso.

Exemplo de resposta: Nenhum conteúdo retornado.

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```


### - DELETE /skill
Esse endpoint é responsável por deletar uma habilidade específica do banco de dados pelo seu ID.

#### Parâmetros:
id: ID da habilidade a ser deletada.

#### Respostas:
##### Sem Conteúdo! 204
Caso essa resposta aconteça, a habilidade foi deletada com sucesso. Não há conteúdo para retornar ao cliente.

Exemplo de resposta: Nenhum conteúdo retornado.

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

Exemplo de resposta:

```
{
    "error": "ID inválido!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```

### - PUT /skill
Esse endpoint é responsável por atualizar as informações de uma habilidade específica pelo seu ID.

#### Parâmetros:
id: ID da habilidade a ser atualizada.<br>
component: Nome do Componente (Linguagem). <br>
year_range: Faixa/Ano. <br>
skill: Descrição da habilidade. <br>
comment: Dados complementares da habilidade. <br>
skill_code: Códigos das habilidades. <br>
           cp: Código Curriculo Paulista.
           bncc: Código Base Naciona Comum Curricular.

Exemplo de requisição:

```
{
	"component":"Artes Visuais",
	"year_range":"1º Ano",
	"skill":"Identificar e Apreciar Formas",
    "comment":"Formas de como aplicar",
	"skill_code": [{"cp":"EF01AR01"},
				   {"bncc":"EF15AR01"}]
}
```

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, as informações da habilidade foram atualizadas com sucesso.

Exemplo de resposta:

```
{
	"skills": [
		{
			"_id": "66e3756fa76fd6db7d47e010",
			"component": "Artes Visuais",
			"year_range": "1º Ano",
			"skill": "Identificar e Apreciar Formas",
			"comment": "Formas de como aplicar",
			"skill_code": [
				{
					"cp": "ESO1T1",
					"_id": "66e3756fa76fd6db7d47e011"
				},
				{
					"bncc": "CODEBNCC",
					"_id": "66e3756fa76fd6db7d47e012"
				}
			],
			"__v": 0
		}
	]
}
```

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido ou a requisição contém dados malformados.

Exemplo de resposta:

```
{
    "error": "ID inválido ou dados malformados!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```

### - GET /Skill
Esse endpoint é responsável por retornar as informações de uma habilidade específica pelo seu ID.

#### Parâmetros:
id: ID da habilidade a ser consultada.

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, você vai receber as informações da habilidade solicitada.

Exemplo de resposta:

```
{
	"skills": [
		{
			"_id": "66e3756fa76fd6db7d47e010",
			"component": "Artes Visuais",
			"year_range": "1º Ano",
			"skill": "Identificar e Apreciar Formas",
			"comment": "Formas de como aplicar",
			"skill_code": [
				{
					"cp": "ESO1T1",
					"_id": "66e3756fa76fd6db7d47e011"
				},
				{
					"bncc": "CODEBNCC",
					"_id": "66e3756fa76fd6db7d47e012"
				}
			],
			"__v": 0
		}
	]
}
```

##### Não Encontrado! 404
Caso essa resposta aconteça, significa que a habilidade com o ID fornecido não foi encontrada.

Exemplo de resposta:

```
{
    "error": "Jogo não encontrado!"
}
```

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

Exemplo de resposta:

```
{
    "error": "ID inválido!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```
