// Desafio - JavaScript: Dados Escolares

const alunoCurso = {
    nome: "João",
    idade: 31,
    curso: "FullStack",
    instituicao: "Kenzie Br",
    materias: ["Html", "Css", "JavaScript", "Python"],
    situacaoMatricula: true,
  };

option();

function option() {
    let option = parseInt(prompt("Digite 1 para consultar o curso / Digite 2 para consultar as Materias / Digite 3 para consultar sua Matricula / Digite 4 para Gerar sua carteira de estudante: "))
    if(option < 1 || option > 4) {
        window.alert(`Comando Invalido`);
        option = parseInt(prompt("Digite 1 para consultar o curso / Digite 2 para consultar as Materias / Digite 3 para consultar sua Matricula / Digite 4 para Gerar sua carteira de estudante: "))
    }

    if(option == 1) {
        getTheCurse(alunoCurso);
    } else if (option == 2) {
        getTheSubjects(alunoCurso);
    } else if (option == 3) {
        resgistrationStatus(alunoCurso);
    } else if(option == 4) {
        generateStudentCard(alunoCurso);
    }
}

  function getTheCurse(aluno) {
    let curso = aluno.curso;
    return window.alert(`O aluno ${aluno.nome} realiza o curso ${curso}`);
  }

  function getTheSubjects(aluno) {
    let materias = aluno.materias;
    return window.alert(`O aluno ${aluno.nome} estuda as materias ${materias}`);
  }

  function resgistrationStatus(aluno) {
    let status = aluno.situacaoMatricula;

    if(status == true) {
        return window.alert(`A sua matricula está Ativa`)
    } else {
        return window.alert(`A sua matricula está Inativa`)
    }
  }

  function generateStudentCard(aluno) {
    let cardInformation = `name: ${aluno.nome}, Idade: ${aluno.idade}, Curso: ${aluno.curso}, Instituição: ${aluno.instituicao}`;
    return window.alert(cardInformation);
  }