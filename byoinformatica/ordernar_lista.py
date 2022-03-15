lista1 = [3,2,1]

lista2 = sorted(lista1)

lista1.sort() # ordena a lista existente - funciona de forma alfabética tbm
lista1.sort(reverse=True) # ordem decrescente
lista1.reverse() # inverte a lista

print(lista2)

for i in range(len(lista1)):

    menor = 1

    for j in range(i+1,len(lista1)):

        if lista1[j] < lista1[menor]:
            menor = j

        if lista1[i] != lista1[menor]:
            aux = lista1[i]
            lista1[i] = lista1[menor]
            lista1[menor] = aux

print (lista1)