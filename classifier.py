# Entrada de dados
nome = input("Digite o nome do herói: ")
xp = int(input("Digite a quantidade de XP do herói: "))

# Definindo o nível do herói conforme XP
if xp < 1000:
    nivel = "Ferro"
elif 1001 <= xp <= 2000:
    nivel = "Bronze"
elif 2001 <= xp <= 5000:
    nivel = "Prata"
elif 5001 <= xp <= 7000:
    nivel = "Ouro"
elif 7001 <= xp <= 8000:
    nivel = "Platina"
elif 8001 <= xp <= 9000:
    nivel = "Ascendente"
elif 9001 <= xp <= 10000:
    nivel = "Imortal"
else:
    nivel = "Radiante"

# Exibindo o resultado
print(f"O Herói de nome {nome} está no nível de {nivel}")
