// Esta função arredonda as notas dos alunos de acordo com as regras especificadas
function gradingStudents(grades) {
  // Inicializa um array vazio para armazenar as notas arredondadas
  const roundedGrades = [];

  // Itera sobre cada nota no array de notas fornecido
  for (let grade of grades) {
    // Verifica se a nota é menor que 38
    if (grade < 38) {
      // Se a nota for menor que 38, não é arredondada, então é adicionada ao array de notas 
      //arredondadas sem modificação
      roundedGrades.push(grade);
    } else {
      // Se a nota for 38 ou maior
      // Calcula o próximo múltiplo de 5 maior ou igual à nota
      const nextMultipleOfFive = Math.ceil(grade / 5) * 5;

      // Verifica se a diferença entre o próximo múltiplo de 5 e a nota é menor que 3
      if (nextMultipleOfFive - grade < 3) {
        // Se a diferença for menor que 3, arredonda a nota para o próximo múltiplo de 5 e 
        //a adiciona ao array de notas arredondadas
        roundedGrades.push(nextMultipleOfFive);
      } else {
        // Se a diferença for 3 ou mais, a nota não é arredondada e é adicionada 
        //ao array de notas arredondadas sem modificação
        roundedGrades.push(grade);
      }
    }
  }

  // Retorna o array de notas arredondadas
  return roundedGrades;
}

// Defina um array de notas dos alunos
const grades = [73, 67, 38, 33, 94];

// Chame a função e passe o array de notas como argumento
const roundedGrades = gradingStudents(grades);

// Exiba as notas arredondadas
console.log("Notas arredondadas:", roundedGrades);
