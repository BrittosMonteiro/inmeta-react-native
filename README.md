# Ordens de Serviço

Aplicação mobile desenvolvida em React Native para gerenciamento de ordens de serviço, com suporte completo a funcionamento offline e sincronização automática quando a conexão é restabelecida.

O objetivo do projeto é demonstrar uma arquitetura offline-first, onde o aplicativo continua totalmente funcional mesmo sem conexão com a internet.

# Tecnologias Utilizadas

- React Native
- Expo
- Realm
- TanStack Query
- Zod
- @react-native-community/netinfo

# Funcionalidades

- Listagem de ordens de serviço
- Visualização de detalhes
- Criação de novas ordens
- Edição de ordens existentes
- Exclusão de ordens
- Alteração de status da ordem
- Sincronização automática com a API
- Funcionamento completo offline

# Arquitetura Offline-First

O aplicativo utiliza uma abordagem offline-first, onde o banco local é a principal fonte de dados.

Fluxo de funcionamento:

```
UI
↓
Realm (banco local)
↓
Serviço de sincronização
↓
API
```

## Comportamento offline

Quando o dispositivo está sem conexão:

- As operações são salvas no banco local

- Cada alteração recebe um syncStatus

- A sincronização ocorre automaticamente quando a conexão retorna

## Sincronização

O processo de sincronização realiza:

1. Envio das alterações locais para o servidor

2. Busca de alterações remotas usando endpoint /work-orders/sync

3. Atualização do banco local

# Estrutura do Projeto

```
src
 ├── app                 # Rotas do Expo Router
 │
 ├── components          # Componentes reutilizáveis
 │
 ├── database            # Configuração e schemas do Realm
 │
 ├── domain              # DTOs e modelos de domínio
 │
 ├── hooks               # Hooks de lógica de aplicação
 │
 ├── lib                 # Configurações de libs como tankstack
 │
 ├── services            # Integração com API e sincronização
 │
 ├── store               # Gerenciamento de estado da aplicação
 │
 └── utils               # Utilitários
```

# Instalação

Clone o repositório:

```
git clone https://github.com/BrittosMonteiro/inmeta-react-native
```

Instale as dependências:

```
npm install
```

# Executando o projeto

Inicie o projeto com:

```
npx expo start
```

ou

```
npx expo run:ios
```

ou

```
npx expo run:android
```

Você poderá rodar o app em:

- Android Emulator
- iOS Simulator
- Dispositivo físico usando Expo Go

# Variáveis de Ambiente

No arquivo .env informar a URL do backend:

```
EXPO_PUBLIC_API_URL=http://localhost:3000
```
