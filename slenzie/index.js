// Desafio - JavaScript: Gestão de Perguntas

// Modelo do objeto slenzie:
const slenzie = {
    nameEvent: "",
    questions: [],
  };
  
  // Modelo do objeto question:
  const question = {
    user: "",
    userQuestion: "",
    vote: 0,
  };
  
  // Função para criar um evento
  function createEvent(objEvent, name) {
    // Define o nome do evento no objeto
    objEvent.nameEvent = name;
  
    // Verifica se o nome é uma string e tem pelo menos 5 caracteres
    if (typeof name === "string" && name.length >= 5) {
      return objEvent;
    }
  
    return "The input value is invalid";
  }
  
  // Função para adicionar uma pergunta a um evento
  function addQuestion(objEvent, question) {
    // Verifica se o usuário não está vazio
    if (question.user === null) {
      return "The user can't be empty";
    } 
    // Verifica se a pergunta não é nula
    else if (question.userQuestion === null) {
      return "The question can't be null";
    }
  
    // Adiciona a pergunta ao array de perguntas do evento
    objEvent.questions.push(question);
  }
  
  // Função para adicionar um voto a uma pergunta
  function addVoteToQuestion(position, objEvent) {
    const lengthQuestions = objEvent.questions.length;
  
    // Verifica se a posição da pergunta é válida
    if (position < 0 || position > lengthQuestions - 1) {
      return "Question not found.";
    } 
    // Verifica se a posição é um número inteiro
    else if (!Number.isInteger(position)) {
      return "The value is not allowed";
    }
  
    // Incrementa o contador de votos da pergunta na posição especificada
    objEvent.questions[position].vote += 1;
  
    return "Vote registered successfully";
  }
  
  // Função para marcar uma pergunta como respondida
  function questionAnswered(position, objEvent) {
    const lengthQuestions = objEvent.questions.length;
  
    // Verifica se a posição da pergunta é válida
    if (position < 0 || position > lengthQuestions - 1) {
      return "Question not found.";
    } 
    // Verifica se a posição é um número inteiro
    else if (!Number.isInteger(position)) {
      return "The value is not allowed";
    }
  
    // Define a propriedade "answered" da pergunta na posição especificada como verdadeira
    objEvent.questions[position].answered = true;
  }
  
  // Função para obter as perguntas não respondidas em um evento
  function unansweredQuestions(objEvent) {
    output = [];
  
    const questions = objEvent.questions;
  
    // Percorre todas as perguntas do evento
    for (let i = 0; i < questions.length; i++) {
      // Verifica se a pergunta não foi respondida
      if (questions[i].answered !== true) {
        output.push(questions[i]);
      }
    }
  
    return output;
  }