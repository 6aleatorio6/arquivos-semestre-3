# Faça um programa que leia um arquivo texto contendo uma lista de endereços IP e gere um outro arquivo, contendo um relatório dos endereços IP válidos e inválidos.

#     O arquivo de entrada possui o seguinte formato: 

# 200.135.80.9
# 192.168.1.1
# 8.35.67.74
# 257.32.4.5
# 85.345.1.2
# 1.2.3.4
# 9.8.234.5
# 192.168.0.256]

#     O arquivo de saída possui o seguinte formato: 

# [Endereços válidos:]
# 200.135.80.9
# 192.168.1.1
# 8.35.67.74
# 1.2.3.4

# [Endereços inválidos:]
# 257.32.4.5
# 85.345.1.2
# 9.8.234.5
# 192.168.0.256


import re
from funcao_aux import input_pathFile


path = input_pathFile()    
dir = path.split("/")[0]
file_name = path.split("/")[-1]


with open(f"{dir}/{file_name}_formated.txt","w") as new_file:


    new_file.write("[Endereços válidos:]\n")
    notValid = []

    with open(path, "r") as file:
        padraoIp =  r"^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}" \
             r"(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
        
        for line in file:
            if re.match(padraoIp,line):
                new_file.write(line) 
            else :
                  notValid.append(line) 
    

    new_file.write("\n[Endereços inválidos:]\n")

    for ip in notValid:
        new_file.write(ip)



