a1 = prompt ("Aluno 1, digite seu nome")
notasAluno1 = prompt(a1 + ", digite suas três notas") 
notasAluno1 = notasAluno1.split(",")

n1a1 = parseFloat (notasAluno1[0])
n2a1 = parseFloat (notasAluno1[1])
n3a1 = parseFloat (notasAluno1[2])

mediaAluno1 = (n1a1 + n2a1 + n3a1)/3

resultadoAp = ""
resultadoRep = ""

if(mediaAluno1>= 5) {
    resultadoAp += "Parabéns " + a1 + ", você foi aprovado(a)!\n"
} else {
    resultadoRep += a1 + ", você foi reprovado(a) :(\n"
}

// -------
a2 = prompt ("Aluno 2, digite seu nome")
notasAluno2 = prompt(a2 + ", digite suas três notas") 
notasAluno2 = notasAluno2.split(",")

n1a2 = parseFloat (notasAluno2[0])
n2a2 = parseFloat (notasAluno2[1])
n3a2 = parseFloat (notasAluno2[2])

mediaAluno2 = (n1a2 + n2a2 + n3a2)/3

if(mediaAluno2>= 5) {
    resultadoAp += "Parabéns " + a2 + ", você foi aprovado(a)!\n"
} else {
    resultadoRep += a2 + ", você foi reprovado(a) :(\n"
}
// -------
a3 = prompt ("Aluno 3, digite seu nome")
notasAluno3 = prompt(a3 + ", digite suas três notas") 
notasAluno3 = notasAluno3.split(",")

n1a3 = parseFloat (notasAluno3[0])
n2a3 = parseFloat (notasAluno3[1])
n3a3 = parseFloat (notasAluno3[2])

mediaAluno3 = (n1a3 + n2a3 + n3a3)/3

if(mediaAluno3>= 5) {
    resultadoAp += "Parabéns " + a3 + ", você foi aprovado(a)!\n"
} else {
    resultadoRep += a3 + ", você foi reprovado(a) :(\n"
}
// -------
a4 = prompt ("Aluno 4, digite seu nome")
notasAluno4 = prompt(a4 + ", digite suas três notas") 
notasAluno4 = notasAluno4.split(",")

n1a4 = parseFloat (notasAluno4[0])
n2a4 = parseFloat (notasAluno4[1])
n3a4 = parseFloat (notasAluno4[2])

mediaAluno4 = (n1a4 + n2a4 + n3a4)/3

if(mediaAluno4>= 5) {
    resultadoAp += "Parabéns " + a4 + ", você foi aprovado(a)!\n"
} else {
    resultadoRep += a4 + ", você foi reprovado(a) :(\n"
}
// -------
a5 = prompt ("Aluno 5, digite seu nome")
notasAluno5 = prompt(a5 + ", digite suas três notas") 
notasAluno5 = notasAluno5.split(",")

n1a5 = parseFloat (notasAluno5[0])
n2a5 = parseFloat (notasAluno5[1])
n3a5 = parseFloat (notasAluno5[2])

mediaAluno5 = (n1a5 + n2a5 + n3a5)/3

if(mediaAluno5>= 5) {
    resultadoAp += "Parabéns " + a5 + ", você foi aprovado(a)!\n"
} else {
    resultadoRep += a5 + ", você foi reprovado(a) :(\n"
}

alert(resultadoAp)
alert(resultadoRep)