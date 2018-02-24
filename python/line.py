szoveg = open("text.txt","r")
output = open("text2.txt","w")
counter = 0
x = 0
for line in szoveg:
    counter += 1

    x=0
    for szo in line.split():
        if szo == "IT" and x != counter:
                output.write("job:"+szo+"\n ")
                x=counter
        if szo == "law" and x != counter:
            output.write("job:"+szo+"\n ")
            x = counter
        if szo == "school" and x != counter:
            output.write("job:"+szo+"\n ")
            x = counter
        if szo == "hospital" and x != counter:
            output.write("job:"+szo+"\n ")
            x = counter

output.close()



'''
for x in range(len(szoveg)):
    p = p + 1

     if szoveg[x] == " ":
        if p % 2 == 0:
            print(szoveg[z:x])
            z = x + 1



        else:
            print("#")
            p = 0
            z = x + 1

    if x == len(szoveg)-1:
        if p % 2 == 0:
            print("#")
        else:
            print(szoveg[z:])
'''
