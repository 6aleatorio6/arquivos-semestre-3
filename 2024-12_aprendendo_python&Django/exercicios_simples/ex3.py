# Uma empresa de pesquisas precisa tabular os resultados da seguinte enquete feita a um grande quantidade de organizações:

# "Qual o melhor Sistema Operacional para uso em servidores?"

# As possíveis respostas são:

# 1- Windows Server
# 2- Unix
# 3- Linux
# 4- Netware
# 5- Mac OS
# 6- Outro

# Você foi contratado para desenvolver um programa que leia o resultado da enquete e informe ao final o resultado da mesma. O programa deverá ler os valores até ser informado o valor 0, que encerra a entrada dos dados. Não deverão ser aceitos valores além dos válidos para o programa (0 a 6). Os valores referentes a cada uma das opções devem ser armazenados num vetor. Após os dados terem sido completamente informados, o programa deverá calcular a percentual de cada um dos concorrentes e informar o vencedor da enquete. O formato da saída foi dado pela empresa, e é o seguinte:

# Sistema Operacional     Votos   %
# -------------------     -----   ---
# Windows Server           1500   17%
# Unix                     3500   40%
# Linux                    3000   34%
# Netware                   500    5%
# Mac OS                    150    2%
# Outro                     150    2%
# -------------------     -----
# Total                    8800

# O Sistema Operacional mais votado foi o Unix, com 3500 votos, correspondendo a 40% dos votos.

from funcao_aux import input_number
from functools import reduce

print("""
 1- Windows Server
 2- Unix
 3- Linux
 4- Netware
 5- Mac OS
 6- Outro
""")

sistemas_count = [0 for _ in range(6)]

while True:
    value = input_number("vote (1-6): ", int, lambda v: 0 <= v <= 6)

    if value == 0: break
    sistemas_count[value-1] += 1


total = reduce(lambda a, b: a+b, sistemas_count)

print(
f"Sistema Operacional     Votos      %")

aux = [
("Windows Server           {}   {}%"),
("Unix                     {}   {}%"),
("Linux                    {}   {}%"),
("Netware                  {}   {}%"),
("Mac OS                   {}   {}%"),
("Outro                    {}   {}%"),]
      


for key, i in enumerate(aux):
    print(i.format(sistemas_count[key].__str__().ljust(8), (int(sistemas_count[key] / total * 100))))

print(" -------------------     -----     ")
print("Total                    {}      ".format(total))