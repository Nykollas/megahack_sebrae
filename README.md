# sebrae_megahack

## Descrição

Este projeto consiste na protótipação de uma plataforma de LMS aos moldes do modelo de negócio SaaS, a plataforma foi idealizada considerando a atual situação de algumas empresas privadas voltados para a prestação de serviços educacionais.
   
## Frontend

[Demo](https://serene-bayou-33949.herokuapp.com/)

![Page](https://firebasestorage.googleapis.com/v0/b/github-f7e0a.appspot.com/o/Captura%20de%20tela%20de%202020-05-04%2021-37-28.png?alt=media&token=32107b65-ab96-4d0c-8d9d-ed79e0800c9b)

![Page](https://firebasestorage.googleapis.com/v0/b/github-f7e0a.appspot.com/o/Captura%20de%20tela%20de%202020-05-04%2021-42-33.png?alt=media&token=0160b732-a8e6-4f96-a2ab-f716d75af19e)

![Page](https://firebasestorage.googleapis.com/v0/b/github-f7e0a.appspot.com/o/Captura%20de%20tela%20de%202020-05-04%2021-44-16.png?alt=media&token=a05ebca3-206e-4129-a1ca-da31d9bff71a)

## Video Conferência

[Demo](https://megahacksebrae.herokuapp.com/quickstart/)

Video

https://www.youtube.com/watch?v=lhqKjwIYgHE

## Funcionalidades 

Foi implementado a funcionalidade de Chat e Videoconferência utilizando se as API's Twillio Programmable Chat e Twillio Programmable  Video.  Além destas também foi inserido recursos de notificação via Whatsapp e via SMS, também usando recursos oferecidos pela Twillio.

## Instalação 

Instalação do frontend

```
  cd frontend 
   yarn install
   yarn start 
 ```
 
 Instalação da videoconferência
 ```
   cd videoconf 
   yarn install
   yarn start 
 ```
 ## Uso
 
 Na tela de aluno clique na disciplina de Língua Portuguesa, para acessar a tela de atividades, Clique na primeira linha da tela gravada
 para acessar a tela com o conteúdo da aula. Na coluna "Acontecendo agora" clique no primeiro card para acessar a sala de videoconferência.
 
 
 ## Configuração
 
 Crie um .env na raiz do projeto qe você prentende instalar conforme o exemplo abaixo
 
  TWILIO_ACCOUNT_SID= [ Account SID ]
  
  TWILIO_API_KEY_SID= [ Key SID ]
  
  TWILIO_API_KEY_SECRET= [ Key Secret ]
  
  TWILIO_AUTH_TOKEN = [ XXX ]
  
  TWILIO_MESSAGE_SERVICE_ID = [ XXX ]
  
  
  Endpoint para a obtenção de token.
  
  
  REACT_APP_TOKEN_ENDPOINT= [ Endpoint ]
  
  
 ## Referência 
 
 [Demo Twillio Videoconferência](https://github.com/twilio/video-quickstart-js)
 
 [Documentação Twillio](https://www.twilio.com/docs/api?filter-product=ip-messaging&filter-product=video)
 
 
 
   
