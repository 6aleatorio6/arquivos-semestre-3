from typing import Callable, Union

# função para pedir um número e transformar em float ou int
def input_number(prompt: str, transform: Callable, condition: Callable = lambda v: v):
    while True:
        value = input(prompt)
        if value.isnumeric():
            value = transform(value)
            if condition(value): return value
        
        print("faça certo!")
