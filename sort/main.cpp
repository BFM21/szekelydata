#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main()
{
    int counter;
    ifstream be;
    be.open("text.txt");
    ofstream ki;
    ki.open("text2.txt");

    string word,line;
    word.clear();
    line.clear();


    while(be >>  word){
            if(word == "IT"){
            ki<<word<<endl;
            }
            else if(word == "law"){
            ki<<word<<endl;
            }
             else if(word == "school"){
            ki<<word<<endl;
            }
             else if(word == "hospital"){
            ki<<word<<endl;
            }else{

            }
    }



ki.close();
be.close();

    return 0;
}
