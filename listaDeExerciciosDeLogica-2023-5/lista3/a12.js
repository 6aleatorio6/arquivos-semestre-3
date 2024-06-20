// Foram anotadas as idades e alturas de 30 alunos. Faça um Programa que determine quantos alunos com mais de 13 anos possuem altura inferior à média de altura desses alunos.


let alunos = [
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {nome:"paia", idade:5, altura:1.5},
  {mediaAltura: function (){
    let a = 0;
    for(i = 0; i<this.length-1; i++) a += this[i].altura
    return a/this.length-1},
   mediaIdade: function (){
    let a = 0;
    for(i = 0; i<this.length-1; i++) a += this[i].idade
    return a/this.length-1}
  }
]


console.log(alunos.mediaIdade())