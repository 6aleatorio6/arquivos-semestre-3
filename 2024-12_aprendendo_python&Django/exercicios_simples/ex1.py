#João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas. 

from funcao_aux import input_number

print("\n\n")
pesoPaia = input_number("\ndigite o peso do seu peixe: ", float)

pesoExcedente = max(pesoPaia - 50, 0)
multa = pesoExcedente and pesoExcedente * 4


print(f"seu peixe tem {pesoPaia}kg de peso{f', excedendo o limite em {pesoExcedente} gerando uma multa de R${multa}' if multa else "."}")