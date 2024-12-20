from typing import Callable, Union
import os

# função para pedir um número e transformar em float ou int
def input_number(prompt: str, transform: Callable, condition: Callable = lambda v: v):
    while True:
        value = input(prompt)
        if value.isnumeric():
            value = transform(value)
            if condition(value): return value
        
        print("faça certo!")


def input_pathFile():
    while True :
        path = input("digite o caminho relativo do arquivo: ")

        if os.path.exists(path): return path
        print("Caminho inválido!")