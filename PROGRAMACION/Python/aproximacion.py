objetivo = int(input('Escoge un numero: '))
epsilon= 0.01
paso= epsilon**2
respuesta =0.0
#la funcion "abs" es para encontrar valores absolutos
while abs(respuesta**2 - objetivo)>= epsilon and respuesta <= objetivo:
#se utiliza print para ver el paso a paso del ciclo hasta encontrar el resultado    
    print(abs(respuesta**2-objetivo), respuesta)
    respuesta += paso
if abs(respuesta**2 -objetivo) >= epsilon:
        print(f'No se encontro la raiz cuadrada de {objetivo}')
else:
        print(f'La raiz cuadrada de {objetivo} es {respuesta}')
