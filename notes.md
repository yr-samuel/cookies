# Cookies: Definições e Considerações

## 1. Definição e Controle
- Cookies definidos pelo servidor com a flag **HttpOnly** não podem ser alterados ou removidos pelo lado do cliente. No entanto, o servidor pode alterar qualquer cookie definido pelo cliente.

## 2. Escopo dos Cookies
- Cookies são baseados em domínios e subdomínios. Se um cookie é definido sem especificar o domínio, ele estará disponível apenas para a mesma **origin**.
- Para permitir o acesso a cookies em diferentes origens e subdomínios, é necessário definir o domínio como **.dominio.com.br**. Assim, qualquer subdomínio pode acessar os cookies definidos para o domínio principal.

## 3. Envio de Cookies em Requisições Cross-Origin
- Para que o navegador envie cookies em requisições para um servidor em uma origem diferente, o servidor deve incluir o cabeçalho **Access-Control-Allow-Credentials: true** na resposta.
- Além disso, o cookie precisa ser marcado como **SameSite: None;** e **Secure: true;**.

## 4. Parâmetros de Configuração do Cookie
- **Name**: Nome do cookie.
- **Value**: Valor que será armazenado no cookie, disponível no lado do cliente.
- **Expire**: Tempo até o cookie expirar.
- **Path**: Define as rotas onde o cookie estará disponível. Por exemplo, se definido como **/**, estará disponível em todas as rotas, como **/foo** e **/foo/bar**.
- **Domain**: Especifica o domínio onde o cookie estará disponível.
- **Secure**: Define que o cookie só será transmitido em conexões seguras (HTTPS).
- **HttpOnly**: Se **true**, o cookie estará disponível apenas através de chamadas HTTP, não podendo ser lido ou escrito pelo lado do cliente, mas acompanhando as requisições.
- **SameSite**: Define como o cookie é enviado em requisições:
  - **Strict**: O cookie é enviado apenas em requisições do mesmo origin.
  - **Lax**: O cookie é enviado em interações de clique e submissões de formulários GET, mas não em requisições cross-origin, como POST, iframe, ou XMLHttpRequest/fetch.
  - **None**: O cookie é sempre enviado, mesmo em requisições cross-origin, mas precisa ter o parâmetro Secure como **true**.

## 5. Prioridade dos Cookies
- Se um cookie é enviado pelo servidor com a flag HttpOnly, esse cookie prevalecerá.


Considerações:
- Se o atributo SameSite estiver definido como `Strict`, e o atributo `Domain` estiver configurado com um domínio diferente do que criou o cookie, o cookie não estará disponível nem mesmo para o próprio domínio. Isso significa que o cookie será restrito e não poderá ser acessado em nenhuma circunstância.