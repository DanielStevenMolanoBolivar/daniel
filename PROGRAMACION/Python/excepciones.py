def divide_elementos_de_la_lista(lista,divisor):
    try:
        return [i / divisor for i in lista]
    except ZeroDivisionError as e:
        print(e)
        return lista
    
lista= list(range(10))
divisor =0

print(divide_elementos_de_la_lista(lista,divisor))




"""def busca_pais(paises, pais):
    &quot;&quot;&quot;
    Paises es un diccionario. Pais es la llave.
    Codigo con el principio EAFP.
    &quot;&quot;&quot;
    
    try:
        return paises[pais]
    except KeyError:
        return None"""