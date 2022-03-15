from Bio.Seq import Seq

minha_primeir_sequencia = Seq("ATG")

print(minha_primeir_sequencia)

my_seq = minha_primeir_sequencia


#sequencia complementar
seq_complementar = my_seq.complement()

print(seq_complementar)

#sequencia complementar
seq_complementar_reverso = my_seq.reverse_complement()

print(seq_complementar_reverso)