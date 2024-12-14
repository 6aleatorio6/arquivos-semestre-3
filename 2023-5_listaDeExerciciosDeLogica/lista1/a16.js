  console.log("16. Faça um programa que calcule as raízes de uma equação do segundo grau, na forma ax2 + bx + c. O programa deverá pedir os valores de a, b e c e fazer as consistências, informando ao usuário nas seguintes situações:\n\nSe o usuário informar o valor de A igual a zero, a equação não é do segundo grau e o programa não deve fazer pedir \nos demais valores, sendo encerrado;\nSe o delta calculado for negativo, a equação não possui raizes reais. Informe ao usuário e encerre o programa;\nSe o delta calculado for igual a zero a equação possui apenas uma raiz real; informe-a ao usuário;\nSe o delta for positivo, a equação possui duas raiz reais; informe-as ao usuário;")
      console.log("digite as raízes de uma equação do segundo grau");
    let a = Number(prompt("digite o valor de A: "));
    let b = Number(prompt("digite o valor de B: "));
    let c = Number(prompt("digite o valor de C: "));
    let delta = b*b-4*a*c;
    let p = ((-b)+Math.sqrt(delta))/(a*2)
    let n = ((-b)-Math.sqrt(delta))/(a*2)
           
    if(a==0){console.log("esta nao é uma equação do segundo grau")}
      else if(delta<0) console.log("a equação não possui raizes reais");
      else if(delta==0) console.log("possui apenas uma raiz: "+p);
      else console.log("possui duas raiz: "+n+" e "+p);
      
  
    
  