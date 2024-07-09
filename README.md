# OBJETIVO DO PROJETO
Extensão compatível com o Chrome que destaca por cores textos/números na página web. Extensão semelhante: "Highlight This" do Wim Deboel

# O QUE ELE FAZ?

A ideia é usá-la assim: recebo intimações via e-mail, se o processo for destacado na minha cor (ex: verde) eu sei que aquele processo é meu. Se for na cor de outro usuário, eu posso ignorar ou encaminhar ao outro usuário.

Entretanto no atual estado há uma dificuldade em marcar as palavras do g-mail por existir uma barreira de segurança via iframes, que impede a modificação do DOM. A melhor ferramenta por enquanto é o "Highlight This" do Wim Deboel

# LINGUAGEM USADA
Javascript - modificação de elementos DOM da página.

# COMO PODEREI USÁ-LO?
O projeto pode ser baixado e instalado diretamente no navegador Chrome. A lista de palavras está no contentOriginal e possui 3 palavras para testes.

1 - abra o chrome://extensions/
2 - ative o modo desenvolvedor
3 - clique e arraste a pasta com os arquivos deste repositório direto no Chrome

# IMPLEMENTOS
Atualmente o projeto está pausado tendo em vista a dificuldade de lidar com os iframes do Gmail.

Não editar campos editáveis (quando cola, o programa substitui o termo)
Funcionar no e-mail (iframe do gmail) e Astrea (descobrir limitação)
Lista de palavras importada
Sincronizar lista de palavras

# SOBRE O DEV
Para cada problema tento achar uma solução. Procuro sempre aprender pela internet (YouTube, ChatGpt, sites). Codando e testando!
Atualmente atuo como advogado na @sgaadv e implemento meus projetos lá
