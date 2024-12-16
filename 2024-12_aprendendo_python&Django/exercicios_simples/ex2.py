# Exercício: Calculadora de Fatorial

# O objetivo deste exercício é criar um programa que calcule o fatorial de um número. O fatorial de um número n (denotado como n!) é o produto de todos os números inteiros de 1 até n. O fatorial é calculado da seguinte forma:

#     5! = 5 × 4 × 3 × 2 × 1 = 120
#     3! = 3 × 2 × 1 = 6
#     0! = 1 (por definição)


from funcao_aux import input_number

fatorial = input_number("\ndigite um número positivo para fatorar: ", int, lambda v: v >= 0 )

message = f"{fatorial}! = "

result = 1
for i in range(1, fatorial+1).__reversed__():
    message = message + f"{" x" if i != fatorial else ""} {i}"
    result *= i

print(f"{message} = {result}")




