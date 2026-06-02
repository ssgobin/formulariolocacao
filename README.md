# Formulário de Locação ACIA

Aplicação estática para pré-locação de espaços da ACIA, feedback pós-locação e dashboard administrativa com Firebase.

## Arquivos principais

- `formulario-locacao-acia.html`: formulário público de pré-locação.
- `feedback-pos-locacao.html`: formulário público de feedback pós-locação.
- `admin-locacao.html`: dashboard administrativa com login via Firebase Authentication.
- `firebase-config.js`: configuração do Firebase e exports usados pelas páginas.
- `firestore.rules`: regras sugeridas para o Firestore.

## Uso local

Sirva a pasta por HTTP para que os módulos JavaScript funcionem corretamente:

```bash
python -m http.server 8000
```

Depois acesse `http://127.0.0.1:8000/formulario-locacao-acia.html`.
