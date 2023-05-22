#documentacion en phyton:
"""def <nombre>(<parametros>):
  <cuerpo>
  return <expresion>"""

#"def" significa definicion 
def suma(a,b):
    total = a + b
    return total

print(suma(2,3))

#ejemplo 2:

def nombre_completo(nombre, apellido, inverso = False):
    if inverso:
        return f'{apellido} {nombre}'
    else:
        return f'{nombre} {apellido}'
    
print (nombre_completo('David', 'Aroesti'))
print (nombre_completo('David', 'Aroesti', inverso=True))
print (nombre_completo(apellido= 'Aroesti', nombre='David'))
