# -*- coding: utf-8 -*- # reconhecer aracteres especiais
x = 1
y = 3

if x > y:
    print("olá mundo")


o = [1, 2, 3, 4, 5]
u = []

for i in o:
    u.append(i**2)

print(u)

u2 = [i**2 for i in o]
print(u2)

z = [i for i in x if i%2==1]
